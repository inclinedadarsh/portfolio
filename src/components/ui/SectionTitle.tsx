import { Triangle } from "lucide-react";
import Badge from "./Badge";

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
    children: string;
    badges: string[];
}

const SectionTitle = ({ children, badges }: SectionTitleProps) => {
    return (
        <div className="flex justify-between items-center gap-5 mb-10 flex-wrap">
            <h2 className="text-2xl lg:text-3xl font-medium flex items-center gap-3">
                <Triangle
                    className="rotate-90"
                    size={16}
                    fill="#8987f4"
                    strokeWidth={0}
                />
                {children}
            </h2>
            <div className="border-t-2 border-dashed border-muted-1 grow" />
            <div className="flex gap-2 flex-wrap">
                {badges.map(badge => (
                    <Badge key={badge} color="primary-light">
                        {badge}
                    </Badge>
                ))}
            </div>
        </div>
    );
};

export default SectionTitle;
