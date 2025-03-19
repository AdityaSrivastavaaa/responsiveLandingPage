import React from 'react';
import HeroSection from '../components/HeroSection';
import ServiceCards from '../components/ServiceCards';
import PricingTable from '../components/PricingTable';
import ContactForm from '../components/ContactForm';
import UserSearch from '../components/UserSearch';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function HomePage() {
    return (
        <div className="min-h-screen">
            <Header/>
            <HeroSection />
            <ServiceCards />
            <PricingTable />
            <UserSearch />
            <ContactForm />
            <Footer/>
        </div>
    );
}