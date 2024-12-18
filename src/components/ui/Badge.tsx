import type { ReactNode } from "react";

interface BadgeProps {
    children: string | ReactNode;
    className?: string;
    color?: "primary-light" | "green";
}

const Badge = ({ children, color, className }: BadgeProps) => {
    return (
        <div
            className={`font-mono flex items-center space-x-2 px-3 py-2 bg-muted-1 rounded-full h-fit ${className}`}
        >
            <span
                className={`inline-block w-3 h-3 rounded-full ${
                    color === "green" ? "bg-green" : "bg-primary-light"
                }`}
            />
            <span className="flex-1">{children}</span>
        </div>
    );
};

export default Badge;
