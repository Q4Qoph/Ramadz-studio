"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="py-10 sm:py-14 bg-cream/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.h2
          className="text-2xl sm:text-3xl font-serif font-bold text-charcoal text-center mb-8 tracking-wide uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Who{" "}
          <span className="bg-gradient-to-r from-brand-orange to-orange-700 bg-clip-text text-transparent">
            We Are
          </span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-sm overflow-hidden shadow-xl relative w-full aspect-[16/10]"
          >
            <Image
              src="/background2.jpg"
              alt="RMDZ Studios"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 pt-8"
          >
            <motion.p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
              RMDZ Studios is a{" "}
              <span className="text-brand-orange">strategic content</span> and {""}
              <span className="text-brand-orange">digital growth</span> studio that helps professionals and service-based
              brands <span className="text-brand-orange">build authority</span>,
              structure their messaging, and convert online attention into{" "}
              <span className="text-brand-orange">measurable income</span>.
            </motion.p>

            <motion.p
              className="text-xl sm:text-2xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              We&apos;ve grown with our clients — podcasts that began as passion
              projects are now platforms of influence. Social feeds that once
              blended in are now setting trends. Our story is a blend of hustle,
              humanity, and the relentless pursuit of creative clarity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Button
                className="bg-brand-orange hover:bg-brand-orange/90 hover:shadow-brand transform hover:-translate-y-1 transition-all duration-300 text-white font-semibold px-10 py-6 text-base sm:text-lg rounded-full"
                asChild
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
