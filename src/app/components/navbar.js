import React from "react";
import Link from "next/link";
import { User, Settings } from "lucide-react";
import { Menu } from 'lucide-react';

function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4 px-8 bg-gray-100 border-b border-gray-300">
                <div className="flex gap-4">
                    <Link href="/settings" className="group relative">
                        <Settings size={24} className="cursor-pointer" />
                        <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 scale-x-0 group-hovor:scale-x-100 transition-transform duration-300 origin-left rounded-full pointer-events-none" />
                    </Link>
                </div>
            <div className="fount-bold text-3xl">
                <Link href="/" className="group relatvie">
                    <span className="cursor-pointer text-gray-900">DevGPA</span>
                </Link>
            </div>
            <div className="flex gap-4">
                <Link href="/profile" className="group relative">
                    <Menu size={24} className="cursor-pointer" />
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;