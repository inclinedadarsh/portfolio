import Link, { LinkProps } from "next/link";

interface IconLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

const IconLink = ({ className, children, href }: IconLinkProps) => {
  return (
    <Link
      className={`p-3 rounded-full bg-muted-2 hover:bg-muted-1 focus-visible:bg-muted-1 transition-colors ${className}`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default IconLink;
