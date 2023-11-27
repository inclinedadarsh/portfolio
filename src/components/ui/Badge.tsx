interface BadgeProps {
  children: string;
  color?: "primary-light" | "green";
}

const Badge = ({ children, color }: BadgeProps) => {
  return (
    <div className="font-mono flex gap-2 items-center px-3 py-2 bg-muted-1 rounded-full h-fit">
      <span
        className={`w-3 h-3 ${
          color == "green" ? "bg-green" : "bg-primary-light"
        } rounded-full`}
      ></span>
      <span>{children}</span>
    </div>
  );
};

export default Badge;
