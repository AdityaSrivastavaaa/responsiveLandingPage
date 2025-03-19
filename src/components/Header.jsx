import React from 'react'
export function Header() {
    return (
        <header className="sticky top-0 bg-blue-500 text-white shadow-md z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">MyWebsite</h1>
                <nav className="space-x-6">
                    <a href="#home" className="hover:text-blue-300">Home</a>
                    <a href="#services" className="hover:text-blue-300">Services</a>
                    <a href="#pricing" className="hover:text-blue-300">Pricing</a>
                    <a href="#contact" className="hover:text-blue-300">Contact</a>
                </nav>
            </div>
        </header>
    );
}