import React from 'react';
import { ArrowUpRightIcon } from './Hugeicons';
import { motion } from 'framer-motion';

export default function SelectedWork() {
  const projects = [
    {
      id: 'myclosets',
      title: 'MyClosets',
      subtitle: 'Digitalising Interior Design Operations & Customer Experience.',
      tags: ['User Research', 'Design Systems', 'Product Design'],
      thumbnail: '/myclosets.svg',
      link: '#'
    },
    {
      id: 'tidyfy',
      title: 'Tidyfy',
      subtitle: 'Designing an AI-Powered Home Organization Experience.',
      tags: ['UI Revamp', 'Product Thinking', 'AI Powered'],
      thumbnail: '/tidyfy.svg',
      link: '#'
    },
    {
      id: 'meet-in-the-middle',
      title: 'Meet in the Middle',
      subtitle: 'A mobile-first feature within Google Maps.',
      tags: ['Feature Design', 'Usability Testing'],
      thumbnail: '/meetinthemiddle.svg',
      link: '#'
    },
    {
      id: 'vizag-volunteers',
      title: 'Task Flow for Volunteers',
      subtitle: 'Revamping a task flow for volunteer operations.',
      tags: ['Problem Solving', 'User Research'],
      thumbnail: '/vv.svg',
      link: '#'
    }
  ];

  return (
    <section id="work" className="py-20 px-6 sm:px-10 text-center">
      <div className="w-full mx-auto flex flex-col items-center">

        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight mb-3">
            Selected Work
          </h2>
          <p className="text-sm text-[#4B5563] max-w-lg mx-auto">
            Projects where I thought beyond the screen.
          </p>
        </div>

        {/* 2X2 Grid with 4 Square Boxes — 16px (gap-4) spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-left">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="derek-card p-5 sm:p-6 aspect-square flex flex-col justify-between group hover:border-[#433FE5]/40 hover:rounded-none transition-all duration-200 shadow-xs overflow-hidden"
            >
              <div className="space-y-3">
                {/* Thumbnail Image Container (B&W by default, color on hover) */}
                <div className="relative w-full h-36 sm:h-40 rounded-lg group-hover:rounded-none overflow-hidden border border-[#E5E7EB] bg-[#F9FAFB] group-hover:border-[#433FE5]/30 transition-all duration-200">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                  />
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#111827] leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#6B7280] mt-1 line-clamp-2 leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#F0F0F0] text-[#374151] border border-[#E5E7EB]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Hyperlink (Secondary color by default, turns blue on hover) */}
              <div className="pt-3 border-t border-[#E5E7EB] flex items-center justify-between">
                <a
                  href={project.link}
                  target={project.link !== '#' ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6B7280] group-hover:text-[#433FE5] transition-colors"
                >
                  <span>Read Case Study</span>
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




