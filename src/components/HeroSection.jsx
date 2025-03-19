import React from 'react';
import backgroundVideo from "../assets/background.mp4"


export default function HeroSection() {
    return (
        <div className="relative h-screen">
            {/* Background Video */}
            <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
                <h1 className="text-5xl font-bold mb-4">Welcome to Our Platform</h1>
                <p className="text-lg mb-6">Empowering creativity with seamless performance.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
                    Get Started
                </button>
            </div>
        </div>
    );
}