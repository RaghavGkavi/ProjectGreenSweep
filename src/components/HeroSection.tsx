'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { basePath } from '../../next.config';

export default function HeroSection() {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
    const [globeDiameter, setGlobeDiameter] = useState(0);

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
            setGlobeDiameter(window.innerWidth * 4 / 5);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="text-black min-h-screen max-w-[100vw] overflow-x-hidden flex flex-col justify-center items-center text-center">
            <div className="flex flex-col justify-center items-center text-center text-black space-y-4 py-40">
                {/* title */}
                <div className='p-4 bg-[#ffd12e]'>
                    <p className="text-6xl">PROJECT</p>
                </div>
                <div className='p-4 bg-[#ffd12e]'>
                    <p className="text-6xl">GREEN SWEEP</p>
                </div>

                {/* subtitle */}
                <p className="max-w-[600px] text-2xl uppercase">
                    Action-driven organization creating positive impacts on the environment
                </p>
            </div>

            <div className='flex relative justify-center text-white'>
                {/* globe */}
                <Image
                    className='p-12'
                    src={`${basePath}globe.png`}
                    alt="globe"
                    width={globeDiameter}
                    height={globeDiameter}
                />

                {/* stats */}
                <div className="h-full absolute rotate-[-30deg]">
                    <div className="flex flex-col items-center bg-[#39c161] p-4 rounded-3xl">
                        <p className='text-3xl'>5</p>
                        <p className='text-xl'>EVENTS</p>
                    </div>
                </div>
                <div className="h-full absolute rotate-[0deg]">
                    <div className="flex flex-col items-center bg-[#39c161] p-4 rounded-3xl">
                        <p className='text-3xl'>5</p>
                        <p className='text-xl'>VOLUNTEERS</p>
                    </div>
                </div>
                <div className="h-full absolute rotate-[30deg]">
                    <div className="flex flex-col items-center bg-[#39c161] p-4 rounded-3xl">
                        <p className='text-3xl'>5</p>
                        <p className='text-xl'>HOURS</p>
                    </div>
                </div>

                {/* infinite scrolling carousel of images, centered on the globe and moving left and right off the page */}
                <InfiniteCarousel imageHeight={globeDiameter / 4} />
            </div>
        </div>
    );
}

const images = [
    '/cleanup.jpg',
    '/cleanup.jpg',
    '/cleanup.jpg',
    '/cleanup.jpg',
    '/cleanup.jpg',
];

function InfiniteCarousel({ imageHeight }: { imageHeight: number }) {
    const controls = useAnimation();

    function startAnimation() {
        controls.start({ x: ['0%', '-50%'], transition: { repeat: Infinity, duration: 15, ease: 'linear' } });
    }

    function stopAnimation() {
        controls.stop();
    }

    useEffect(() => {
        startAnimation();
    }, [controls]);

    return (
        <div className='flex flex-col absolute top-1/2 rotate-[-8deg] -translate-y-1/2 p-10 bg-[#ffd12e] w-[200%]'>
            <p className='text-4xl text-black uppercase pb-10 font-bold'>Showcase</p>
            <motion.div
                className="flex gap-10"
                animate={controls}
                onHoverStart={stopAnimation}
                onHoverEnd={startAnimation}
            >
                {images.concat(images).map((src, index) => (
                    <Image
                        key={index}
                        className='border-8 border-black rounded-lg transform duration-200 hover:scale-105'
                        src={`${basePath}${src}`}
                        alt='carousel image'
                        width={imageHeight}
                        height={imageHeight}
                    />
                ))}
            </motion.div>
        </div>
    );
}
