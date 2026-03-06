// src/components/sections/hero.tsx - Dark olive brand theme
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  // DEV toggle — remove before shipping
  const [variant, setVariant] = useState<"collage" | "background">("collage");

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background — image in 'background' variant, solid color in 'collage' variant */}
      <AnimatePresence>
        {variant === "background" && (
          <motion.div
            key="bg-image"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
        )}
      </AnimatePresence>
      <div
        className={`absolute inset-0 transition-colors duration-600 ${variant === "collage" ? "bg-olive-dark" : "bg-transparent"}`}
      />

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
        <div
          className={`grid gap-12 items-center ${variant === "collage" ? "lg:grid-cols-2" : "max-w-3xl mx-auto"}`}
        >
          {/* Left Column */}
          <motion.div
            className={
              variant === "collage" ? "text-center lg:text-left" : "text-center"
            }
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
              className={`flex flex-col sm:flex-row gap-4 ${variant === "collage" ? "justify-center lg:justify-start" : "justify-center"}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Button
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange/90 hover:shadow-brand transform hover:-translate-y-1 transition-all duration-300 text-white font-semibold px-10 py-4"
                asChild
              >
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column — collage only */}
          <AnimatePresence>
            {variant === "collage" && (
              <motion.div
                key="collage"
                className="relative flex items-center justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.6 }}
              >
                {/* Desktop */}
                <div
                  className="hidden lg:block relative mx-auto"
                  style={{ width: "100%", maxWidth: 480, aspectRatio: "4/5" }}
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
                          className="absolute animate-pulse bg-olive-mid rounded-2xl"
                          style={{
                            width: "62%",
                            aspectRatio: "3/4",
                            top: "0%",
                            left: "0%",
                          }}
                        />
                        <div
                          className="absolute animate-pulse bg-olive-mid rounded-2xl"
                          style={{
                            width: "48%",
                            aspectRatio: "1/1",
                            top: "8%",
                            right: "0%",
                          }}
                        />
                        <div
                          className="absolute animate-pulse bg-olive-mid rounded-2xl"
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
                    className="absolute rounded-2xl overflow-hidden shadow-2xl"
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
                      sizes="(max-width: 1024px) 0px, 30vw"
                      className="object-cover"
                    />
                  </motion.div>

                  <motion.div
                    className="absolute rounded-2xl overflow-hidden shadow-2xl"
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
                      sizes="(max-width: 1024px) 0px, 30vw"
                      className="object-cover"
                    />
                  </motion.div>

                  <motion.div
                    className="absolute rounded-2xl overflow-hidden shadow-2xl"
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
                      sizes="(max-width: 1024px) 0px, 30vw"
                      className="object-cover"
                    />
                  </motion.div>
                </div>

                {/* Mobile */}
                <div
                  className="block lg:hidden w-full rounded-2xl overflow-hidden shadow-2xl"
                  style={{ aspectRatio: "16/9" }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/background1.jpg"
                      alt="Content creation studio"
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* DEV toggle — remove before shipping */}
      <div className="fixed bottom-4 right-4 z-50 flex gap-2 font-mono text-xs">
        <button
          onClick={() => setVariant("collage")}
          className={`px-3 py-1.5 rounded-md border transition-colors ${variant === "collage" ? "bg-brand-orange text-white border-brand-orange" : "bg-black/60 text-white/60 border-white/20 hover:bg-black/80"}`}
        >
          Collage
        </button>
        <button
          onClick={() => setVariant("background")}
          className={`px-3 py-1.5 rounded-md border transition-colors ${variant === "background" ? "bg-brand-orange text-white border-brand-orange" : "bg-black/60 text-white/60 border-white/20 hover:bg-black/80"}`}
        >
          Background
        </button>
      </div>
    </section>
  );
}
