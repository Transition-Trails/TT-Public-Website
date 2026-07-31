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

      <section className="bg-trail-light flex-1 flex flex-col items-center justify-center px-5 py-24 text-center">
        <div className="max-w-[600px] mx-auto">
          <div className="font-['Poppins'] font-bold text-[120px] md:text-[160px] text-trail-green/10 leading-none select-none mb-0">
            404
          </div>

          <div className="inline-block bg-green-100 text-trail-green font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded mb-6 -mt-4">
            Trail Not Found
          </div>

          <h1 className="font-['Poppins'] font-bold text-[32px] md:text-[40px] text-charcoal mb-4 leading-tight">
            This trail doesn't exist yet.
          </h1>

          <p className="font-['Open_Sans'] text-[18px] text-slate mb-10 leading-[1.6] max-w-md mx-auto">
            The page you're looking for may have moved, been renamed, or never existed. Let's get you back on the right path.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-trail-green hover:bg-green-700 text-white font-['Open_Sans'] font-semibold text-[15px] h-[52px] px-8 rounded-lg transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center border border-trail-green text-trail-green hover:bg-green-100 font-['Open_Sans'] font-semibold text-[15px] h-[52px] px-8 rounded-lg transition-colors"
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
                className="font-['Open_Sans'] text-[14px] text-slate hover:text-trail-green transition-colors py-2 border border-warm-gray rounded-lg hover:border-trail-green/30"
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
