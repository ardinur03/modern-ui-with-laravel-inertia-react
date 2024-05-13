import { UserLayout } from '@/layouts/user-layout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <div>
            <Head title="Dashboard" />
           Dashboard
        </div>
    );
}

Dashboard.layout = (page: any) => <UserLayout children={page} />;
