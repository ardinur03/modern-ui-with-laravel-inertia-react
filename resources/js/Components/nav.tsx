import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { InertiaLinkProps, Link, router, usePage } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from './logo';
import { Button } from './ui/button';
import {
    CircleUser,
    Mail,
    Menu,
    MessageSquare,
    MoonIcon,
    Package2,
    PlusCircle,
    Search,
    SunIcon,
    UserPlus,
} from 'lucide-react';
import { Input } from './ui/input';
import { PageProps } from '@/types';
import { DropdownMenuSub } from '@radix-ui/react-dropdown-menu';
import { useTheme } from './theme-provider';
import {
    IconDashboard,
    IconDeviceDesktop,
    IconLogout,
    IconMoon,
    IconMoonFill,
    IconSettings,
    IconShield,
} from '@irsyadadl/paranoid';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export default function Nav() {
    const { auth } = usePage<PageProps>().props;

    function logout() {
        router.post(route('logout'));
    }

    const { theme, setTheme } = useTheme();

    return (
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                <NavLink href="#" className="flex items-center gap-2 text-lg font-semibold md:text-base">
                    <Logo className="size-6 fill-red-500" />
                    <span className="sr-only">Acme Inc</span>
                </NavLink>
                <NavLink
                    href={route('home')}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                >
                    Home
                </NavLink>
                <NavLink href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Customers
                </NavLink>
            </nav>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <nav className="grid gap-6 text-lg font-medium">
                        <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
                            <Package2 className="h-6 w-6" />
                            <span className="sr-only">Acme Inc</span>
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-foreground">
                            Dashboard
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>
            <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2">
                <form className="ml-auto flex-1 sm:flex-initial">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search products..."
                            className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                        />
                    </div>
                </form>

                {auth.user ? (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Avatar className="size-6 sm:size-8">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                            <DropdownMenuLabel>
                                <div>{auth.user.name}</div>
                                <div className="text-sm text-muted-foreground">{auth.user.email}</div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <Link href={route('dashboard')}>
                                    <IconDashboard />
                                    Dashboard
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href={route('settings.profile')}>
                                    <IconSettings />
                                    Settings
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href={route('settings.password')}>
                                    <IconShield />
                                    Update Password
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />

                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger className="[&>svg]:text-muted-foreground [&_svg]:mr-2 [&_svg]:size-4">
                                    {theme === 'system' ? (
                                        <IconDeviceDesktop />
                                    ) : theme === 'light' ? (
                                        <IconMoon />
                                    ) : (
                                        <IconMoonFill />
                                    )}
                                    Preferences
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuItem onSelect={() => setTheme('system')}>
                                            System
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onSelect={() => setTheme('light')}>
                                            Light
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onSelect={() => setTheme('dark')}>
                                            Dark
                                        </DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>

                            <DropdownMenuSeparator />
                            <DropdownMenuItem onSelect={logout}>
                                <IconLogout />
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                ) : (
                    <>
                        <div className="[&_svg]:text-muted-foreground [&_svg]:hover:text-foreground">
                            <Button
                                variant="outline"
                                className="block dark:hidden"
                                onClick={() => setTheme('dark')}
                            >
                                <IconMoon className="size-4" />
                            </Button>
                            <Button
                                variant="outline"
                                className="hidden dark:block"
                                onClick={() => setTheme('light')}
                            >
                                <IconMoonFill className="size-4" />
                            </Button>
                        </div>
                        <NavLink
                            href={route('login')}
                            className="text-sm text-muted-foreground hover:text-foreground"
                        >
                            Login
                        </NavLink>
                    </>
                )}
            </div>
        </header>
    );
}

interface NavlinkProps extends InertiaLinkProps {
    active?: boolean;
    className?: string;
}

export function NavLink({ active, className, ...props }: NavlinkProps) {
    return (
        <Link
            className={cn(
                'text-sm transition-colors duration-200',
                active ? 'font-semibold text-foreground' : 'text-muted-foreground hover:text-foreground',
            )}
            {...props}
        />
    );
}
