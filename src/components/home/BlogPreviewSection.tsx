import React from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { BlogPost, PageRoute } from '../../types';
import { WatermarkedImage } from '../common/WatermarkedImage';

interface BlogPreviewSectionProps {
  posts: BlogPost[];
  onSelectPost: (post: BlogPost) => void;
  onNavigate: (route: PageRoute) => void;
}

export const BlogPreviewSection: React.FC<BlogPreviewSectionProps> = ({
  posts,
  onSelectPost,
  onNavigate,
}) => {
  const latestPosts = posts.slice(0, 3);

  return (
    <section className="py-20 bg-[#F8F9FA] border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5 text-amber-600" />
              <span>Azerbaijan Knowledge Hub</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A] font-serif">
              Latest Travel Guides & Advisory Insights
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Practical guides on visa applications, residency pathways, Baku real estate tips, and winter ski resort itineraries.
            </p>
          </div>

          <button
            onClick={() => onNavigate('blog')}
            className="self-start md:self-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs border border-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <span>View All Guides</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="rounded-2xl bg-white border border-slate-200 hover:border-amber-400 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <WatermarkedImage
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-900/90 backdrop-blur-md text-amber-300 text-xs font-bold border border-slate-700">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-[11px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] group-hover:text-amber-700 transition-colors font-serif line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-bold text-amber-700 border-t border-slate-100">
                <span>Read Full Guide</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
