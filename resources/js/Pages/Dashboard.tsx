import { UserLayout } from '@/layouts/user-layout';

export default function Dashboard() {
    return <div>Dashboard</div>;
}

Dashboard.layout = (page: any) => <UserLayout children={page} />;
