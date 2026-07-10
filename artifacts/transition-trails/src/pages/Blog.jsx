import { useState } from "react";
import { Link } from "wouter";
import wordmark from "../assets/Wordmark.jpg";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Loader } from "lucide-react";
import { CATEGORIES } from "../data/blogPosts";
import { useSubstackFeed } from "../hooks/useSubstackFeed";
import { FeedErrorBoundary } from "../components/ErrorBoundary";
import Seo from "../components/Seo";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } };
const stagger = { show: { transition: { staggerChildren: 0.09 } } };

function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { posts, loading, error } = useSubstackFeed();

  const filtered = activeCategory === "all"
    ? posts
    : posts.filter(p => p.category === activeCategory);

  const sorted = [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="flex flex-col min-h-screen">
      <Seo
        title="The Trail Journal"
        description="Salesforce career advice, nonprofit technology, program updates, and lessons from building Transition Trails."
        path="/blog"
      />
      {/* HERO */}
      <section className="bg-[#2A2E2C] py-20 px-8">
        <motion.div className="max-w-7xl mx-auto" initial="hidden" animate="show" variants={stagger}>
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.15em] text-[#F5A623] mb-3">THE TRAIL JOURNAL</motion.p>
          <motion.h1 variants={fadeUp} className="font-['Fraunces'] font-bold text-[clamp(2.5rem,5vw,3.75rem)] text-white leading-tight mb-4 max-w-3xl">Insights from the trail.</motion.h1>
          <motion.p variants={fadeUp} className="font-['Open_Sans'] text-[17px] text-white/70 leading-relaxed max-w-2xl">Salesforce career advice, nonprofit technology, program updates, and lessons from building Transition Trails — published weekly.</motion.p>
        </motion.div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="bg-white border-b border-[#E2E4E1] sticky top-[80px] z-10">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center gap-2 overflow-x-auto">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-shrink-0 text-[13px] font-semibold px-4 py-2 rounded-full transition-colors duration-200 ${
                activeCategory === cat.id
                  ? "bg-[#2F6B3F] text-white"
                  : "bg-[#F3F4F6] text-[#6B7280] hover:bg-[#EBF3EE] hover:text-[#2F6B3F]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="bg-[#FAFAF7] py-16 px-8 flex-1">
        <div className="max-w-7xl mx-auto">

          {/* Loading state */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-24 gap-4">
              <Loader size={32} stroke="#2F6B3F" className="animate-spin" />
              <p className="font-['Open_Sans'] text-[15px] text-[#6B7280]">Loading posts…</p>
            </div>
          )}

          {/* Error state */}
          {error && !loading && (
            <div className="text-center py-24">
              <p className="font-['Open_Sans'] text-[15px] text-[#6B7280]">Unable to load posts right now. Please try again shortly.</p>
            </div>
          )}

          {/* Empty state */}
          {!loading && !error && sorted.length === 0 && (
            <div className="text-center py-24">
              <p className="font-['Open_Sans'] text-[16px] text-[#6B7280]">No posts in this category yet. Check back soon.</p>
            </div>
          )}

          {/* Posts grid */}
          {!loading && !error && sorted.length > 0 && (
            <FeedErrorBoundary>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              animate="show"
              variants={stagger}
            >
              {sorted.map(post => (
                <motion.div key={post.id} variants={fadeUp}>
                  <Link href={`/blog/${post.id}`}>
                    <div className="bg-white border border-[#E2E4E1] rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#2F6B3F] transition-all duration-200 cursor-pointer h-full flex flex-col">
                      {post.image ? (
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover"
                          loading="lazy"
                          decoding="async"
                          width="600"
                          height="192"
                          onError={(e) => {
                            e.currentTarget.parentElement.innerHTML = `<div class="w-full h-48 bg-[#FAFAF7] flex items-center justify-center"><img src="${wordmark}" alt="Transition Trails" class="h-10 w-auto object-contain opacity-50" /></div>`;
                          }}
                        />
                      ) : (
                        <div className="w-full h-48 bg-[#FAFAF7] flex items-center justify-center">
                          <img
                            src={wordmark}
                            alt="Transition Trails"
                            className="h-10 w-auto object-contain opacity-50"
                          />
                        </div>
                      )}
                      <div className="p-7 flex flex-col flex-1">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] bg-[#EBF3EE] text-[#2F6B3F] px-3 py-1 rounded-full">
                            {CATEGORIES.find(c => c.id === post.category)?.label}
                          </span>
                        </div>
                        <h2 className="font-['Poppins'] font-semibold text-[17px] text-[#2A2E2C] leading-snug mb-3 flex-1">{post.title}</h2>
                        <p className="font-['Open_Sans'] text-[13px] text-[#6B7280] leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center justify-between pt-4 border-t border-[#E2E4E1]">
                          <div className="flex items-center gap-3 text-[#6B7280]">
                            <span className="flex items-center gap-1 text-[12px]"><Calendar size={12} />{formatDate(post.date)}</span>
                            <span className="flex items-center gap-1 text-[12px]"><Clock size={12} />{post.readTime}</span>
                          </div>
                          <span className="text-[#2F6B3F]"><ArrowRight size={16} /></span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            </FeedErrorBoundary>
          )}
        </div>
      </section>
    </div>
  );
}
