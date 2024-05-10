import { Container } from '@/components/container';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function Home() {
    return (
        <div>
            <Head title="Home" />
            <Container>Home</Container>
        </div>
    );
}

Home.layout = (page: any) => <AppLayout children={page} />;
