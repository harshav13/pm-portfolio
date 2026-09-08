import React from 'react';
import { ArrowRightIcon, ArrowUpRightIcon } from './Hugeicons';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 text-center px-6 sm:px-10">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
        
        {/* Status Pill Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-[#F0F0F0] text-[#374151] border border-[#E5E7EB] shadow-2xs"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Associate Product Manager
        </motion.div>

        {/* 100x100 Black & White Photo Circle Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="w-[100px] h-[100px] rounded-full overflow-hidden border-2 border-[#E5E7EB] relative group shrink-0"
        >
          <img
            src="/harsha.jpeg"
            alt="Harsha Valluri"
            className="w-full h-full object-cover grayscale contrast-105"
          />
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111827] leading-[1.15] text-center"
        >
          I enjoy understanding messy problems, turning them into clear product opportunities.
        </motion.h1>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://drive.google.com/file/d/1IKQZYj4GLj-OXT4y-MmixE8oHSou5GeS/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#111827] bg-[#F0F0F0] hover:bg-[#E5E7EB] border border-[#E5E7EB] rounded-xl transition-all hover:-translate-y-0.5"
          >
            <span>Resume</span>
            <ArrowUpRightIcon className="w-4 h-4 text-[#6B7280]" />
          </a>

          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#433FE5] hover:bg-[#3430C6] rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <span>Read Case-Studies</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
