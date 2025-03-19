import React from 'react';

export default function PricingTable() {
    const plans = [
        { 
            name: "Basic", 
            price: "$10/month", 
            features: ["Feature 1", "Feature 2"],
            image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        { 
            name: "Pro", 
            price: "$20/month", 
            features: ["Feature 1", "Feature 2", "Feature 3"],
            image: "https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        { 
            name: "Enterprise", 
            price: "$30/month", 
            features: ["All Features Included"],
            image: "https://images.pexels.com/photos/3183199/pexels-photo-3183199.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
    ];

    return (
        <div className="p-10">
            <h1 className="text-4xl font-bold text-center text-blue-500 mb-10">Our Pricing Plans</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {plans.map((plan, index) => (
                    <div key={index} className="p-6 bg-white shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                        <img src={plan.image} alt={plan.name} className="w-full h-40 object-cover rounded-t-2xl" />
                        <div className="p-4">
                            <h3 className="text-2xl font-bold text-blue-500">{plan.name}</h3>
                            <p className="text-3xl font-semibold my-2 text-gray-800">{plan.price}</p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="before:content-['✔️'] before:mr-2">{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}