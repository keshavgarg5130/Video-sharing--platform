"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function NavBar() {
    const router = useRouter();
    const { data } = useSession();

    return (
        <nav className="border-b border-gray-200 bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-3">
                <h1
                    onClick={() => router.push("/")}
                    className="text-xl font-semibold cursor-pointer text-gray-900 dark:text-gray-100"
                >
                    MyTube
                </h1>
                {data ? (
                    <div className="flex items-center gap-3">
                        <Button
                            variant="outline"
                            onClick={() => router.push("/upload")}
                        >
                            Upload
                        </Button>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="flex items-center gap-2">
                                    <Image
                                        src={data?.user?.image || "/default-avatar.png"}
                                        alt={data?.user?.name || "User"}
                                        width={30}
                                        height={30}
                                        className="rounded-full"
                                    />
                                    <span className="hidden sm:inline text-sm font-medium">
                    {data?.user?.name?.split(" ")[0] || "User"}
                  </span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => router.push("/profile")}>
                                    Profile
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => signOut()}>
                                    Sign Out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                ) : (
                    <Button onClick={() => signIn()}>Sign In</Button>
                )}
            </div>
        </nav>
    );
}
