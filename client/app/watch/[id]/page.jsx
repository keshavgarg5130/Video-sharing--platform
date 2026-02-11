"use client";
import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Hls from "hls.js";

export default function WatchPage() {
    const { id } = useParams();
    const [video, setVideo] = useState(null);
    const videoRef = useRef(null);

    useEffect(() => {
        const storedVideo = JSON.parse(localStorage.getItem("selectedVideo"));
        setVideo(storedVideo);
    }, [id]);


    useEffect(() => {
        if (!video?.url) return;
        const fileName = video.url.split("/").pop();
        const masterFileName = fileName.replace('.', '_') + '_master.m3u8';
        const baseUrl = video.url.substring(0, video.url.lastIndexOf('/'));
        const hlsUrl =`${baseUrl}/hls/${masterFileName}`;
        if (!hlsUrl) return;
        const player = videoRef.current;
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(hlsUrl);
            hls.attachMedia(player);
            hls.on(Hls.Events.MANIFEST_PARSED, () => player.play());
            return () => hls.destroy();
        } else if (player.canPlayType("application/vnd.apple.mpegurl")) {
            player.src = hlsUrl;
            player.play();
        }
    }, [video]);

    if (!video) return <div>Loading...</div>;

    return (
        <div className="p-6 flex flex-col items-center">
            <video ref={videoRef} controls className="rounded-lg shadow-lg w-full max-w-4xl" />
            <h2 className="mt-4 text-2xl font-semibold">{video.title}</h2>
            <p>{video.description}</p>
            <p className="text-gray-700 font-medium">Author: {video.author}</p>
        </div>
    );
}
