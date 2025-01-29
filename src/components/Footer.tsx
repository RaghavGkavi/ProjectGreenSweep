import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-20 text-center">
            <div className="flex flex-col items-center">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    className="w-96 mb-2"
                    width={100}
                    height={100}
                />
                <div className="flex gap-4">
                    <Link href='instagram.com' className='transform duration-200 hover:scale-110'>
                        <FaInstagram className="text-4xl" />
                    </Link>
                    <Link href='mailto:' className='transform duration-200 hover:scale-110'>
                        <FaEnvelope className="text-4xl cursor-pointer" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};
