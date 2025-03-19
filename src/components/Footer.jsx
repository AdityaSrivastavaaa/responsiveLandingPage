export function Footer() {
    return (
        <footer className="bg-gray-800 text-white text-center py-6 mt-10">
            <div className="container mx-auto px-6">
                <p className="text-sm">&copy; {new Date().getFullYear()} MyWebsite. All Rights Reserved.</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
                    <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
                    <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
                </div>
            </div>
        </footer>
    );
}