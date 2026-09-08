import React from 'react';
import { ArrowUpRightIcon, GithubIcon } from './Hugeicons';
import { motion } from 'framer-motion';

export default function OtherProjects() {
  const shippedProjects = [
    {
      id: 'fitflow',
      title: 'FitFlow – A Fitness Stopwatch',
      description: 'A workout timer that automates sets, reps, & rest periods.',
      thumbnail: '/fitstate.svg',
      githubLink: 'https://github.com/harshav13/FitState',
      appLink: 'https://fit-state.vercel.app',
      linkLabel: 'Plan Your Workout'
    },
    {
      id: 'web-comment',
      title: 'Web-Comment',
      description: 'A chrome extension where you can comment on live websites, just like figma comment.',
      thumbnail: '/webcomment.svg',
      githubLink: 'https://github.com/harshav13/Web-Comment',
      appLink: 'https://github.com/harshav13/Web-Comment',
      linkLabel: 'View Extension'
    }
  ];

  return (
    <section id="other-projects" className="py-20 px-6 sm:px-10 text-center">
      <div className="w-full mx-auto flex flex-col items-center">

        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight mb-3">
            Shipped with AI
          </h2>
          <p className="text-sm text-[#4B5563] max-w-lg mx-auto">
            A collection of smaller products, chrome extensions, and experiments built and shipped using modern AI workflows.
          </p>
        </div>

        {/* Shipped with AI Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-left">
          {shippedProjects.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="derek-card p-5 sm:p-6 flex flex-col justify-between group hover:border-[#433FE5]/40 hover:rounded-none transition-all duration-200 shadow-xs overflow-hidden"
            >
              <div className="space-y-3">
                {/* Thumbnail Image Container (B&W by default, color on hover) */}
                <div className="relative w-full h-36 sm:h-40 rounded-lg group-hover:rounded-none overflow-hidden border border-[#E5E7EB] bg-[#F9FAFB] group-hover:border-[#433FE5]/30 transition-all duration-200">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                  />
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#111827] leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6B7280] mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action Links Bar */}
              <div className="pt-3 mt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                <a
                  href={item.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6B7280] hover:text-[#433FE5] transition-colors"
                  aria-label={`View ${item.title} on GitHub`}
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={item.appLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6B7280] group-hover:text-[#433FE5] transition-colors"
                >
                  <span>{item.linkLabel}</span>
                  <ArrowUpRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

