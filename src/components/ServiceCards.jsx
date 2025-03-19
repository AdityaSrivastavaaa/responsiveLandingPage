import React from 'react';

export default function ServiceCards() {
    const services = [
        { 
            title: "Web Development", 
            description: "Modern websites with fast performance.", 
            image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        { 
            title: "API Integration", 
            description: "Seamless data communication for your apps.", 
            image: "https://imgs.search.brave.com/pbVVd3yNM7mZQbYLCEBpzdTe4uTzViV_MMn6NjFaIFk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by90b3Atdml3LXBo/b3RvLWxhcHRvcC13/aXRoLWFwaS13b3Jk/LXZyLXNjcmVlbi1t/dWx0aW1lZGlhLWlj/b25zLWludGVybmV0/LXRlY2hub2xvZ3lf/NTU2MTc2LTI3NDQu/anBnP3NlbXQ9YWlz/X2h5YnJpZA"
        },
        { 
            title: "UI/UX Design", 
            description: "Beautiful and user-friendly designs.", 
            image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
    ];

    return (
        <div className="p-10">
            <h1 className="text-4xl font-bold text-center text-blue-500 mb-10">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <div key={index} className="p-6 bg-white shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                        <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded-t-2xl" />
                        <div className="p-4">
                            <h2 className="text-2xl font-bold mb-2 text-blue-500">{service.title}</h2>
                            <p className="text-gray-700">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
