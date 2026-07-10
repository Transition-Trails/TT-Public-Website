import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Loader, ExternalLink } from "lucide-react";
import { CATEGORIES } from "../data/blogPosts";
import { useSubstackFeed } from "../hooks/useSubstackFeed";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } };
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogPost() {
  const [, params] = useRoute("/blog/:id");
  const { posts, loading, error } = useSubstackFeed();

  const post = posts.find(p => p.id === params?.id);

  const relatedPosts = post
    ? posts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 3)
    : [];

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAFAF7] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader size={32} stroke="#2F6B3F" className="animate-spin" />
          <p className="font-['Open_Sans'] text-[15px] text-[#6B7280]">Loading post…</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-[#FAFAF7] flex items-center justify-center px-8">
        <div className="text-center">
          <h1 className="font-['Fraunces'] font-bold text-[2.5rem] text-[#2A2E2C] mb-4">Post not found.</h1>
          <p className="font-['Open_Sans'] text-[16px] text-[#6B7280] mb-8">This post may have moved or been removed.</p>
          <Link href="/blog" className="inline-flex items-center gap-2 bg-[#2F6B3F] text-white font-['Open_Sans'] font-bold text-[14px] px-6 py-3 rounded-lg hover:bg-[#1E4A2A] transition-colors duration-200">\u2190 Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* POST HERO */}
      <section className="bg-[#2A2E2C] py-20 px-8">
        <motion.div className="max-w-4xl mx-auto" initial="hidden" animate="show" variants={stagger}>
          <motion.div variants={fadeUp} className="mb-6">
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-200 font-['Open_Sans'] text-[13px]">
              <ArrowLeft size={14} /> Back to Blog
            </Link>
          </motion.div>
          <motion.span variants={fadeUp} className="inline-block text-[11px] font-semibold uppercase tracking-[0.1em] bg-[#EBF3EE] text-[#2F6B3F] px-3 py-1 rounded-full mb-4">
            {CATEGORIES.find(c => c.id === post.category)?.label}
          </motion.span>
          <motion.h1 variants={fadeUp} className="font-['Fraunces'] font-bold text-[clamp(2rem,4vw,3rem)] text-white leading-tight mb-6">{post.title}</motion.h1>
          <motion.div variants={fadeUp} className="flex items-center gap-4 text-white/50 flex-wrap">
            <span className="flex items-center gap-1.5 font-['Open_Sans'] text-[13px]"><Calendar size={13} />{formatDate(post.date)}</span>
            <span className="flex items-center gap-1.5 font-['Open_Sans'] text-[13px]"><Clock size={13} />{post.readTime}</span>
            <span className="font-['Open_Sans'] text-[13px]">{post.author}</span>
            {post.substackUrl && (
              <a href={post.substackUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[#F5A623] hover:text-[#D4890A] transition-colors font-['Open_Sans'] text-[13px]">
                <ExternalLink size={12} /> Read on Substack
              </a>
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* POST CONTENT */}
      <section className="bg-white py-16 px-8 flex-1">
        <div className="max-w-4xl mx-auto">
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="w-full rounded-2xl mb-12 object-cover max-h-[480px]"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          )}
          <div
            className="prose prose-lg max-w-none font-['Open_Sans'] text-[#2A2E2C]
              prose-h2:font-['Fraunces'] prose-h2:font-bold prose-h2:text-[1.75rem] prose-h2:text-[#2A2E2C] prose-h2:leading-tight prose-h2:mt-10 prose-h2:mb-4
              prose-h3:font-['Poppins'] prose-h3:font-semibold prose-h3:text-[1.25rem] prose-h3:text-[#2A2E2C] prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-[16px] prose-p:leading-[1.85] prose-p:text-[#4A4F4D] prose-p:mb-5
              prose-a:text-[#2F6B3F] prose-a:underline prose-a:font-semibold
              prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
              prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2
              prose-li:text-[16px] prose-li:text-[#4A4F4D] prose-li:leading-relaxed
              prose-img:rounded-xl prose-img:my-8 prose-img:w-full
              prose-blockquote:border-l-4 prose-blockquote:border-[#2F6B3F] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-[#6B7280] prose-blockquote:my-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* RELATED POSTS */}
      {relatedPosts.length > 0 && (
        <section className="bg-[#FAFAF7] py-16 px-8 border-t border-[#E2E4E1]">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-['Fraunces'] font-bold text-[1.75rem] text-[#2A2E2C] mb-8">More from this category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(related => (
                <Link key={related.id} href={`/blog/${related.id}`}>
                  <div className="bg-white border border-[#E2E4E1] rounded-2xl p-6 hover:shadow-md hover:border-[#2F6B3F] transition-all duration-200 cursor-pointer">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.1em] bg-[#EBF3EE] text-[#2F6B3F] px-3 py-1 rounded-full">{CATEGORIES.find(c => c.id === related.category)?.label}</span>
                    <h3 className="font-['Poppins'] font-semibold text-[15px] text-[#2A2E2C] leading-snug mt-3 mb-2">{related.title}</h3>
                    <p className="font-['Open_Sans'] text-[13px] text-[#6B7280] leading-relaxed line-clamp-2">{related.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#2A2E2C] py-16 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-['Fraunces'] font-bold text-[clamp(1.75rem,3vw,2.25rem)] text-white leading-tight mb-4">Ready to find your trail?</h2>
          <p className="font-['Open_Sans'] text-[16px] text-white/70 leading-relaxed mb-8">Join the waitlist for Guided Trail Cohort 1 or Explorer's Trail launching October 1, 2026.</p>
          <Link href="/waitlist" className="inline-flex items-center gap-2 bg-[#F5A623] text-[#2A2E2C] font-['Open_Sans'] font-bold text-[15px] px-8 py-4 rounded-lg hover:bg-[#D4890A] transition-colors duration-200">Join the Waitlist \u2192</Link>
        </div>
      </section>
    </div>
  );
}
