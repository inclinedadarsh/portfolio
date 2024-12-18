import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    url: string;
    linkText: string;
}

const Banner = ({
    className,
    children,
    linkText,
    url,
    ...props
}: BannerProps) => {
    return (
        <div
            className={`py-2 bg-[#5553e0] flex flex-col md:flex-row gap-1.5 md:gap-3 items-center justify-center text-sm md:text-base ${className}`}
            {...props}
        >
            <span className="">{children}</span>
            <Link
                href={url}
                className="flex gap-0.5 items-center underline hover:no-underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
            >
                {linkText} <ArrowUpRight size={20} />
            </Link>
        </div>
    );
};

export default Banner;
