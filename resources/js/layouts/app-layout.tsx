import Nav from '@/components/nav';
import React from 'react';

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Nav />
            <main className="py-6 sm:py-16">{children}</main>
        </div>
    );
}
