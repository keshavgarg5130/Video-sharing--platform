'use client';
import React from 'react';
import ReactPlayer from 'react-player';

const Room = () => {
    return (
        <div className="m-10 flex justify-center">
            <ReactPlayer
                src="https://youtu.be/n6pM531_rac?si=dSPtxL4hnHsCyHZK"
                width="1280px"
                height="720px"
                controls={true}
                autoPlay={true}
                muted={true}
                playsinline={true}
            />
        </div>
    );
};

export default Room;
