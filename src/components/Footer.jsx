import React from 'react';
import { ArrowUpIcon, HeartIcon } from './Hugeicons';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="py-12 px-6 sm:px-10 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center">

        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-dashed-wide">

          {/* Brand Info */}
          <div className="text-center md:text-left">
            <div className="text-base font-bold text-[#111827] tracking-tight">
              Harsha Valluri
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-[#374151]">
            <a
              href="mailto:harshavalluri52@gmail.com"
              className="group inline-flex items-center text-xs font-medium text-[#4B5563] hover:text-[#433FE5] transition-colors py-1"
            >
              <span className="inline-block transition-transform duration-200 ease-out group-hover:-translate-x-[2px] text-[#9CA3AF] group-hover:text-[#433FE5]">
                [
              </span>
              <span className="px-0.5">Email</span>
              <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-[2px] text-[#9CA3AF] group-hover:text-[#433FE5]">
                ]
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/harsha-valluri-/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center text-xs font-medium text-[#4B5563] hover:text-[#433FE5] transition-colors py-1"
            >
              <span className="inline-block transition-transform duration-200 ease-out group-hover:-translate-x-[2px] text-[#9CA3AF] group-hover:text-[#433FE5]">
                [
              </span>
              <span className="px-0.5">LinkedIn</span>
              <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-[2px] text-[#9CA3AF] group-hover:text-[#433FE5]">
                ]
              </span>
            </a>

            <a
              href="https://github.com/harshav13"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center text-xs font-medium text-[#4B5563] hover:text-[#433FE5] transition-colors py-1"
            >
              <span className="inline-block transition-transform duration-200 ease-out group-hover:-translate-x-[2px] text-[#9CA3AF] group-hover:text-[#433FE5]">
                [
              </span>
              <span className="px-0.5">GitHub</span>
              <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-[2px] text-[#9CA3AF] group-hover:text-[#433FE5]">
                ]
              </span>
            </a>

            <button
              onClick={onOpenResume}
              className="group inline-flex items-center text-xs font-medium text-[#4B5563] hover:text-[#433FE5] transition-colors py-1 cursor-pointer"
            >
              <span className="inline-block transition-transform duration-200 ease-out group-hover:-translate-x-[2px] text-[#9CA3AF] group-hover:text-[#433FE5]">
                [
              </span>
              <span className="px-0.5">Resume</span>
              <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-[2px] text-[#9CA3AF] group-hover:text-[#433FE5]">
                ]
              </span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6B7280]">
          <div className="flex items-center gap-1.5 justify-center sm:justify-start">
            <span>© {new Date().getFullYear()} Vibe-Coded with curiosity</span>
            <HeartIcon className="w-3.5 h-3.5 fill-[#433FE5] text-[#433FE5] inline-block" />
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-[#374151] hover:text-[#433FE5] transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUpIcon className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
