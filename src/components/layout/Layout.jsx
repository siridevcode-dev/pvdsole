'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import '../../i18n/i18n'; // Import i18n config to ensure it runs

const Layout = ({ children }) => {
    const pathname = usePathname();

    useEffect(() => {
        // Scroll to top when route changes
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
