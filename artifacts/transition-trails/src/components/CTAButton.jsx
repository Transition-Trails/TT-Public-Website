import { Link } from "wouter";
import { trackEvent } from "../lib/analytics";

export function CTAButton({
  href,
  children,
  variant = "amber",
  size = "md",
  external = false,
  className = "",
  analyticsEvent,
  analyticsData,
  onClick,
  ...props
}) {
  const baseClasses = "inline-flex items-center justify-center font-['Open_Sans'] font-semibold transition-colors duration-150";
  
  const sizeClasses = {
    lg: "h-14 px-8 text-base rounded-lg",
    md: "h-11 px-6 text-[15px] rounded-lg",
    sm: "h-9 px-4 text-sm rounded-lg"
  };

  const variantClasses = {
    amber: "bg-sun-amber text-charcoal hover:bg-amber-700",
    green: "bg-trail-green text-white hover:bg-green-700",
    dark: "bg-charcoal text-white hover:bg-charcoal",
    outline: "bg-transparent border-[1.5px] border-current hover:bg-white/10",
    ghost: "bg-transparent text-current hover:bg-black/5"
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const isExternal = external || href.startsWith("http");
  const handleClick = (event) => {
    if (analyticsEvent) {
      trackEvent(analyticsEvent, analyticsData);
    }
    onClick?.(event);
  };

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
