import Room from "@/components/room";
import UploadForm from "../components/uploadForm";
import AuthPage from "../components/AuthPage";
import YouTubeHome from "../components/home";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen  justify-center bg-zinc-50 font-sans dark:bg-black">

        <YouTubeHome/>
    </div>
  );
}
