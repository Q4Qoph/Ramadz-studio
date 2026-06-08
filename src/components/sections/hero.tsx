// src/components/sections/hero.tsx - Dark olive brand theme
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = [
      "/background1.jpg",
      "/background2.jpg",
      "/background3.jpg",
    ];
    let loadedCount = 0;
    preloadImages.forEach((src) => {
      const img = new window.Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === preloadImages.length) setImagesLoaded(true);
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === preloadImages.length) setImagesLoaded(true);
      };
      img.src = src;
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24">
      {/* Background image — mobile only */}
      <motion.div
        className="absolute inset-0 block lg:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/background1.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-olive-dark/70" />
      </motion.div>

      {/* Solid background — desktop only */}
      <div className="absolute inset-0 bg-olive-dark hidden lg:block" />

      {/* Decorative Circles */}
      <div
        className="circle-deco w-96 h-96 top-[-6rem] right-[-6rem]"
        style={{ backgroundColor: "#B54808", opacity: 0.25 }}
      />
      <div
        className="circle-deco w-64 h-64 bottom-[-4rem] left-[-4rem]"
        style={{ backgroundColor: "#E5D9B6", opacity: 0.12 }}
      />
      <div
        className="circle-deco w-32 h-32 top-24 left-1/2 -translate-x-1/2"
        style={{ backgroundColor: "#636255", opacity: 0.3 }}
      />
      <div
        className="circle-deco w-24 h-24 bottom-24 right-24"
        style={{ backgroundColor: "#B54808", opacity: 0.35 }}
      />

      <div className="container mx-auto py-14 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 items-center lg:grid-cols-2">
          {/* Left Column */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-brand-cream mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Build Authority.{" "}
              <span className="text-brand-orange">Grow Influence.</span>{" "}
              <span className="text-gradient">Drive Revenue.</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-brand-cream/75 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              RMDZ Studios helps professionals and service-based brands build
              authority, refine their message, and convert online attention into
              measurable revenue.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Button
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange/90 hover:shadow-brand transform hover:-translate-y-1 transition-all duration-300 text-white font-semibold px-12 py-6 text-lg rounded-full"
                asChild
              >
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column — collage */}
          <div className="relative flex items-center justify-center w-full">
            <div
              className="relative mx-auto mt-12 lg:mt-0 w-[280px] sm:w-[360px] lg:w-[450px] xl:w-[480px] aspect-[4/5]"
            >
              <AnimatePresence>
                {!imagesLoaded && (
                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className="absolute animate-pulse bg-olive-mid rounded-none"
                      style={{
                        width: "62%",
                        aspectRatio: "3/4",
                        top: "0%",
                        left: "0%",
                      }}
                    />
                    <div
                      className="absolute animate-pulse bg-olive-mid rounded-none"
                      style={{
                        width: "48%",
                        aspectRatio: "1/1",
                        top: "8%",
                        right: "0%",
                      }}
                    />
                    <div
                      className="absolute animate-pulse bg-olive-mid rounded-none"
                      style={{
                        width: "60%",
                        aspectRatio: "4/3",
                        bottom: "0%",
                        right: "0%",
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div
                className="absolute rounded-none overflow-hidden shadow-2xl"
                style={{
                  width: "62%",
                  aspectRatio: "3/4",
                  top: "0%",
                  left: "0%",
                  rotate: "-3deg",
                }}
                animate={{
                  opacity: imagesLoaded ? 1 : 0,
                  x: imagesLoaded ? 0 : -40,
                }}
                transition={{ duration: 0.7, delay: 0.2 }}
                whileHover={{ scale: 1.04, rotate: "0deg", zIndex: 10 }}
              >
                <Image
                  src="/background1.jpg"
                  alt="Content creation studio"
                  fill
                  sizes="(max-width: 640px) 180px, (max-width: 1024px) 240px, 30vw"
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                className="absolute rounded-none overflow-hidden shadow-2xl"
                style={{
                  width: "48%",
                  aspectRatio: "1/1",
                  top: "8%",
                  right: "0%",
                  rotate: "2.5deg",
                }}
                animate={{
                  opacity: imagesLoaded ? 1 : 0,
                  x: imagesLoaded ? 0 : 40,
                }}
                transition={{ duration: 0.7, delay: 0.4 }}
                whileHover={{ scale: 1.04, rotate: "0deg", zIndex: 10 }}
              >
                <Image
                  src="/background2.jpg"
                  alt="Brand strategy work"
                  fill
                  sizes="(max-width: 640px) 140px, (max-width: 1024px) 180px, 30vw"
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                className="absolute rounded-none overflow-hidden shadow-2xl"
                style={{
                  width: "60%",
                  aspectRatio: "4/3",
                  bottom: "18%",
                  left: "15%",
                  rotate: "-4deg",
                }}
                animate={{
                  opacity: imagesLoaded ? 1 : 0,
                  y: imagesLoaded ? 0 : 40,
                }}
                transition={{ duration: 0.7, delay: 0.6 }}
                whileHover={{ scale: 1.04, rotate: "0deg", zIndex: 10 }}
              >
                <Image
                  src="/background3.jpg"
                  alt="Digital growth results"
                  fill
                  sizes="(max-width: 640px) 180px, (max-width: 1024px) 240px, 30vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
