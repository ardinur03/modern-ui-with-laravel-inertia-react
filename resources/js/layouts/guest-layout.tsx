import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Head } from '@inertiajs/react';
import React from 'react';

interface Props {
    title: string;
    description?: string;
    children: React.ReactNode;
}

export default function GuestLayout({ title, description, children }: Props) {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <Head title={title} />
            <div className="w-full max-w-xl p-8">
                <Card>
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>{description}</CardDescription>
                    </CardHeader>
                    <CardContent>{children}</CardContent>
                </Card>
            </div>
        </div>
    );
}
