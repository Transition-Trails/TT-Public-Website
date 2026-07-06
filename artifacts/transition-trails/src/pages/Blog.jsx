import { useState } from "react";
import { CTAButton } from "../components/CTAButton";
import { PageMeta } from "../components/PageMeta";
import { LINKS } from "../constants/links";
import { ArrowRight } from "lucide-react";

const ARTICLES = [
  {
    slug: "hugh-richardson-salesforce-story",
    category: "Program Stories",
    date: "May 2025",
    title: "From 47 Rejections to Solutions Architect: Hugh Richardson's Salesforce Story",
    excerpt:
      "Hugh spent 16 years driving trucks and studied Salesforce between loads during the pandemic. After earning his Admin certification, he applied to 47 jobs and heard nothing. What changed wasn't his resume — it was getting one real implementation project with a real nonprofit client. Five years later he's a Solutions Architect at Salesforce and co-founder of Transition Trails.",
    readTime: "6 min read",
    accent: "#2F6B3F",
  },
  {
    slug: "experience-gap-salesforce-job-market",
    category: "Career Pivots",
    date: "April 2025",
    title: "The Experience Gap: Why the Salesforce Job Market Is Broken for New Admins",
    excerpt:
      "You passed the Administrator exam. You built flows in a developer org. You can explain object relationships in your sleep. And you still can't get an entry-level Salesforce job. Here's why that's a structural problem — and what Transition Trails built to fix it. The answer isn't more certifications. It's one real project.",
    readTime: "8 min read",
    accent: "#1E4A2A",
  },
  {
    slug: "salesforce-admin-exam-90-days",
    category: "Salesforce Exam",
    date: "March 2025",
    title: "How to Pass the Salesforce Administrator Exam in 90 Days (Without Quitting Your Job)",
    excerpt:
      "The Admin exam covers 60+ topics across six domains. Most candidates fail not because they don't know the material — they fail because they don't know how to study it efficiently. Here's the study framework we teach inside Foundations Trail: how to prioritize domains by weight, which topics to drill vs. skim, and how to use practice exams without memorizing answers.",
    readTime: "10 min read",
    accent: "#2F6F7E",
  },
  {
    slug: "what-nonprofits-need-from-salesforce",
    category: "Nonprofit Tech",
    date: "February 2025",
    title: "What Nonprofits Actually Need From Salesforce (That Consultants Don't Tell Them)",
    excerpt:
      "The Power of Us grant gives eligible nonprofits access to Salesforce. But access is not the same as adoption. Seventeen months after implementation, the average nonprofit is using 23% of the features they were set up with. Here's what we've learned from serving Hartford Promises, CLYLP, and KC Global One about what nonprofits actually need — and why ongoing support matters more than perfect setup.",
    readTime: "7 min read",
    accent: "#7FAFC6",
  },
  {
    slug: "inside-the-guided-trail",
    category: "Program Stories",
    date: "January 2025",
    title: "Inside the Guided Trail: What a 12-Week Real-Client Salesforce Practicum Looks Like",
    excerpt:
      "The Guided Trail isn't a simulation. You are assigned a real nonprofit that needs actual Salesforce work done. Week 1 is discovery calls and requirements gathering. Week 4 is architecture review with our senior advisors. Week 12 is a live handoff to a client who depends on what you built. Here's a week-by-week breakdown of what happens in between — and why it changes how hiring managers see your resume.",
    readTime: "9 min read",
    accent: "#1E4A2A",
  },
  {
    slug: "career-change-into-salesforce",
    category: "Career Pivots",
    date: "December 2024",
    title: "Making a Career Change into Salesforce? Here's What Nobody Tells You",
    excerpt:
      "Whether you're coming from sales, nonprofit program management, teaching, or the military — the Salesforce career transition has predictable obstacles that most blog posts gloss over. We've watched hundreds of career changers navigate this path. Here's the honest guide: which certifications actually matter for your background, how long it realistically takes, and what the experience gap problem looks like from the inside.",
    readTime: "11 min read",
    accent: "#2F6B3F",
  },
];

const CATEGORIES = ["All", "Career Pivots", "Salesforce Exam", "Nonprofit Tech", "Program Stories"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="Blog | Salesforce Career Insights | Transition Trails"
        description="Salesforce career guides, nonprofit technology insights, and stories from the trail. Resources for aspiring and working Salesforce professionals."
        path="/blog"
      />

      {/* Hero */}
      <section className="bg-[#2A2E2C] pt-24 pb-16 px-5 md:px-10">
        <div className="max-w-[1024px] mx-auto">
          <div className="inline-block bg-[#F5A623]/20 border border-[#F5A623]/30 text-[#F5A623] font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] px-3 py-1.5 rounded mb-6">
            FROM THE TRAIL
          </div>
          <h1 className="font-['Poppins'] font-bold text-[40px] md:text-[52px] text-white tracking-[-1px] leading-tight mb-4 max-w-3xl">
            Insights, guides, and stories from the trail.
          </h1>
          <p className="font-['Open_Sans'] text-[18px] text-white/70 max-w-2xl leading-[1.6]">
            Career pivots, exam prep, nonprofit technology, and real stories from the Salesforce ecosystem. Written by practitioners who've been through it.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-white border-b border-[#E2E4E1] px-5 md:px-10 sticky top-[80px] z-10">
        <div className="max-w-[1024px] mx-auto py-4 flex gap-2 overflow-x-auto pb-4 -mb-px">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap font-['Open_Sans'] font-semibold text-[13px] px-4 py-2 rounded-lg transition-colors shrink-0 ${
                activeCategory === cat
                  ? "bg-[#2F6B3F] text-white"
                  : "bg-[#FAFAF7] text-[#4A4F4D] hover:bg-[#E6F3EA] hover:text-[#2F6B3F] border border-[#E2E4E1]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Article Grid */}
      <section className="bg-[#FAFAF7] flex-1 py-16 px-5 md:px-10">
        <div className="max-w-[1024px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((article) => (
              <article
                key={article.slug}
                className="bg-white border border-[#E2E4E1] rounded-2xl overflow-hidden hover:shadow-md transition-shadow flex flex-col"
              >
                <div
                  className="h-[6px] w-full"
                  style={{ backgroundColor: article.accent }}
                />
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[1.5px] px-2 py-1 rounded"
                      style={{
                        color: article.accent,
                        backgroundColor: `${article.accent}15`,
                      }}
                    >
                      {article.category}
                    </span>
                    <span className="font-['Open_Sans'] text-[12px] text-[#4A4F4D]/60">
                      {article.date} · {article.readTime}
                    </span>
                  </div>

                  <h2 className="font-['Poppins'] font-bold text-[20px] text-[#2A2E2C] mb-4 leading-[1.3]">
                    {article.title}
                  </h2>

                  <p className="font-['Open_Sans'] text-[14px] text-[#4A4F4D] leading-[1.7] mb-6 flex-1">
                    {article.excerpt}
                  </p>

                  <a
                    href={`#${article.slug}`}
                    className="inline-flex items-center gap-2 font-['Open_Sans'] font-semibold text-[14px] transition-colors"
                    style={{ color: article.accent }}
                  >
                    Read article <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-['Open_Sans'] text-[16px] text-[#4A4F4D]">
                No articles in this category yet. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Strip */}
      <section className="bg-[#2F6B3F] py-16 px-5 md:px-10">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="font-['Open_Sans'] font-semibold text-[11px] uppercase tracking-[2px] text-[#F5A623] mb-4">
            STAY CONNECTED
          </div>
          <h2 className="font-['Poppins'] font-bold text-[28px] md:text-[36px] text-white mb-4">
            Get Salesforce career insights in your inbox.
          </h2>
          <p className="font-['Open_Sans'] text-[17px] text-white/75 mb-8 max-w-xl mx-auto leading-[1.6]">
            We write about career pivots, exam prep, nonprofit technology, and program updates. Follow us on Substack to get every post.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href={LINKS.substack} variant="amber" size="lg" external>
              Follow Transition Trails
            </CTAButton>
            <CTAButton
              href={LINKS.substackCompass}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
              external
            >
              Follow The Compass (Nonprofits)
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
