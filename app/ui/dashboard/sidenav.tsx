import Link from "next/link";
import OrbLogo from "@/app/ui/orb-logo";
import NavLinks from "@/app/ui/dashboard/nav-links";

export default function SideNav() {
    return (
        <div className="flex h-full flex-col px-3 px-4 md:px-2">
            <Link
                className="mb-2 flex h-20 items-end justify-start rounded-md bg-green-900 p-4 md:h-40"
                href='/'
            >
                <div className="w-32 text-white md:w-40">    
                    <OrbLogo />
                </div>
            </Link>
            <div className="grow flex-row justify-between space-x-2 md:col-flex md:space-x-0 md:space-y-2">
                <NavLinks />
            </div>
        </div>
    );
}