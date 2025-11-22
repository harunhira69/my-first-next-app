"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "/car.jpg",
    texts: ["High-End Cars", "Luxury & Performance"],
    subtitle: "Experience unmatched sophistication with every drive.",
  },
  {
    image: "/kawasaki.jpg",
    texts: ["Kawasaki Bikes", "Ride Fast, Ride Free"],
    subtitle: "Precision engineering designed for adrenaline seekers.",
  },
  {
    image: "/sport-bike.jpg",
    texts: ["Sport Bicycles", "Speed & Agility"],
    subtitle: "Where performance meets lightweight innovation.",
  },
  {
    image: "/bike.jpg",
    texts: ["Urban Bicycles", "City in Style"],
    subtitle: "Smart, comfortable, and stylish — for every city ride.",
  },
];

export default function Hero() {
  return (
    <section className="relative h-[90vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-center items-center px-4 text-center">
              <div className="animate-fade-up opacity-0 [animation-delay:200ms] max-w-3xl">
                
                {/* Headline */}
                <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight drop-shadow-xl leading-[1.2] min-h-[80px]">
                  <Typewriter
                    words={slide.texts}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={60}
                    deleteSpeed={40}
                    delaySpeed={1800}
                  />
                </h1>

                {/* Subtitle */}
                <p className="mt-6 text-lg sm:text-2xl text-gray-200 drop-shadow-lg max-w-2xl mx-auto min-h-[70px] leading-relaxed">
                  {slide.subtitle}
                </p>

                {/* CTA Buttons */}
                <div className="mt-10 flex justify-center space-x-5">
                  <Link
                    href="/products"
                    className="px-8 py-3 text-lg font-semibold rounded-xl bg-blue-600 text-white shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all transform hover:-translate-y-1"
                  >
                    Shop Now
                  </Link>

                  <Link
                    href="/about"
                    className="px-8 py-3 text-lg font-semibold rounded-xl bg-white/90 backdrop-blur text-gray-900 shadow-lg hover:bg-white hover:text-black hover:shadow-xl transition-all transform hover:-translate-y-1"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Fade Animation Keyframes */}
      <style>{`
        .animate-fade-up {
          animation: fadeUp 1s ease forwards;
        }

        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
