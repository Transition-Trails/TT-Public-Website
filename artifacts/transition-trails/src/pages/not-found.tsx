import { Link } from "wouter";
import { PageMeta } from "../components/PageMeta";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Page Not Found | Transition Trails"
        description="The page you're looking for doesn't exist. Explore Transition Trails programs, about, and contact pages."
        path="/404"
      />

      <section className="bg-[#FAFAF7] flex-1 flex flex-col items-center justify-center px-5 py-24 text-center">
        <div className="max-w-[600px] mx-auto">
          <div className="font-['Poppins'] font-bold text-[120px] md:text-[160px] text-[#2F6B3F]/10 leading-none select-none mb-0">
            404
          </div>

          <div className="inline-block bg-[#E6F3EA] text-[#2F6B3F] font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded mb-6 -mt-4">
            Trail Not Found
          </div>

          <h1 className="font-['Poppins'] font-bold text-[32px] md:text-[40px] text-[#2A2E2C] mb-4 leading-tight">
            This trail doesn't exist yet.
          </h1>

          <p className="font-['Open_Sans'] text-[18px] text-[#4A4F4D] mb-10 leading-[1.6] max-w-md mx-auto">
            The page you're looking for may have moved, been renamed, or never existed. Let's get you back on the right path.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-[#2F6B3F] hover:bg-[#1E4A2A] text-white font-['Open_Sans'] font-semibold text-[15px] h-[52px] px-8 rounded-lg transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center border border-[#2F6B3F] text-[#2F6B3F] hover:bg-[#E6F3EA] font-['Open_Sans'] font-semibold text-[15px] h-[52px] px-8 rounded-lg transition-colors"
            >
              View Programs
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-[500px] mx-auto">
            {[
              { label: "About", href: "/about" },
              { label: "Donate", href: "/donate" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/contact" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] hover:text-[#2F6B3F] transition-colors py-2 border border-[#E2E4E1] rounded-lg hover:border-[#2F6B3F]/30"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
