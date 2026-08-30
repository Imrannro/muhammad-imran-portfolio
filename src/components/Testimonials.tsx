import React from 'react';
import { motion } from 'motion/react';
import { testimonialsData } from '../data/portfolioData';
import { MessageSquareQuote, CheckCircle2, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-14 sm:py-16 bg-[#121212] dark:bg-[#121212] light:bg-slate-50 border-y border-[#212121] dark:border-[#212121] light:border-slate-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#22d472] dark:bg-[#22d472] light:bg-[#16a34a]" />
            <span className="font-mono text-xs tracking-wider text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] uppercase font-semibold">
              PEER &amp; MENTOR FEEDBACK
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 tracking-[-0.04em]">
            Endorsements<span className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]">.</span>
          </h2>
          <p className="text-[#6b6b6b] dark:text-[#9e9e9e] light:text-slate-600 text-sm sm:text-base mt-2 font-normal">
            Reflections from team leads, collaborators, and engineering mentors on code discipline and delivery reliability.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {testimonialsData.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glow-card p-6 sm:p-7 rounded-2xl bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-white border border-[#212121] dark:border-[#212121] light:border-slate-200 flex flex-col justify-between space-y-4 shadow-md"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <MessageSquareQuote className="w-6 h-6 text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]" />
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#22d472] dark:fill-[#22d472] light:fill-[#16a34a] text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]" />
                    ))}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#f2f2f2]/90 dark:text-[#f2f2f2]/90 light:text-slate-700 leading-relaxed font-normal italic">
                  "{test.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#212121] dark:border-[#212121] light:border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900">{test.author}</h4>
                  <p className="text-xs font-mono text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-500 mt-0.5">{test.role}</p>
                </div>
                <span className="text-xs font-mono text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] bg-[#22d472]/10 dark:bg-[#22d472]/10 light:bg-[#16a34a]/10 border border-[#22d472]/20 dark:border-[#22d472]/20 light:border-[#16a34a]/20 px-2.5 py-1 rounded-md font-bold tracking-wider">
                  VERIFIED
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
