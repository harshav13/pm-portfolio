import React from 'react';
import { motion } from 'framer-motion';

export default function AboutMe() {
  const photos = [
    { id: 1, src: '/1.webp', alt: 'Photography 1', rotation: '-rotate-6', margin: '-mr-4 sm:-mr-6', zIndex: 'z-10' },
    { id: 2, src: '/2.webp', alt: 'Photography 2', rotation: 'rotate-4', margin: '-mr-4 sm:-mr-6', zIndex: 'z-20' },
    { id: 3, src: '/3.webp', alt: 'Photography 3', rotation: '-rotate-4', margin: '-mr-4 sm:-mr-6', zIndex: 'z-30' },
    { id: 4, src: '/4.webp', alt: 'Photography 4', rotation: 'rotate-6', margin: '', zIndex: 'z-40' },
  ];

  return (
    <section id="about-me" className="py-20 px-6 sm:px-10 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center">

        {/* Section Header */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight">
            A little more about me
          </h2>
        </div>

        {/* Center-aligned Text without Container */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="space-y-6 text-base sm:text-lg text-[#4B5563] leading-relaxed text-center max-w-2xl mx-auto"
        >
          <p>
            Product-minded builder with 1+ year shipping 0-to-1 products end-to-end, from research to MVP delivery, across B2B2C and consumer platforms. A design foundation sharpened into product judgment, framing ambiguous problems, prioritizing scope, and partnering with engineering to ship fast.
            <br />
            But I also love to...
          </p>
        </motion.div>

        {/* Overlapped Photo Thread with Alternating Tilts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex items-center justify-center mt-8 pb-4"
        >
          {photos.map((photo) => (
            <div
              key={photo.id}
              className={`relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-white shadow-md bg-[#F9FAFB] transform ${photo.rotation} ${photo.margin} ${photo.zIndex} hover:z-50 hover:scale-110 hover:rotate-0 transition-all duration-300 cursor-pointer`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}



