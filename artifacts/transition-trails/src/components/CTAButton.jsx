import { Link } from "wouter";

export function CTAButton({
  href,
  children,
  variant = "amber",
  size = "md",
  external = false,
  className = "",
  ...props
}) {
  const baseClasses = "inline-flex items-center justify-center font-['Open_Sans'] font-semibold transition-colors duration-150";
  
  const sizeClasses = {
    lg: "h-14 px-8 text-base rounded-lg",
    md: "h-11 px-6 text-[15px] rounded-lg",
    sm: "h-9 px-4 text-sm rounded-lg"
  };

  const variantClasses = {
    amber: "bg-[#F5A623] text-[#2A2E2C] hover:bg-[#D4890A]",
    dark: "bg-[#2A2E2C] text-white hover:bg-[#1a1e1c]",
    outline: "bg-transparent border-[1.5px] border-current hover:bg-white/10",
    ghost: "bg-transparent text-current hover:bg-black/5"
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const isExternal = external || href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
