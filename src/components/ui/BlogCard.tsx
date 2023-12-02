import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface BlogCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: string;
  className?: string;
  slug: string;
}

const BlogCard = ({ children, className, slug }: BlogCardProps) => {
  return (
    <Link
      href={`https://blog.adarshdubey.com/${slug}`}
      rel="noopener noreferrer"
      target="_blank"
      className={`flex justify-between items-center group py-4 md:py-6 lg:py-8 border-b border-muted-1 hover:px-4 md:hover:px-6 lg:hover:px-8 hover:bg-muted-1 hover:border-primary-light transition-all ${className}`}
    >
      <span className="text-xl md:text-2xl font-light group-hover:font-normal truncate w-[240px] md:w-[500px] lg:w-[720px] xl:w-[1020px]">
        {children}
      </span>
      <ArrowUpRight className="" strokeWidth={1} />
    </Link>
  );
};

export default BlogCard;
