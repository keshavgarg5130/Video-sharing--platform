import Room from "@/components/room";
import UploadForm from "../components/uploadForm";
import AuthPage from "../components/AuthPage";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <AuthPage/>
    </div>
  );
}
