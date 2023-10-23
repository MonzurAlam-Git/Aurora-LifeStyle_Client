// "use client";

import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay, Pagination } from "swiper";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import { bannerData } from "../../../Data/BannerData";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Overlay from "../../Shared/Overlay";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <section className="w-full h-[calc(100vh-4rem)]">
      <Swiper
        pagination={{
          clickable: true,
        }}
        speed={750}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        grabCursor={true}
        navigation={true}
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper w-full h-full"
      >
        {bannerData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full h-screen relative">
              <img
                src={item.src}
                alt={item.alt}
                // width={1920}
                // height={1080}
                // priority
                className="w-full h-full object-contain"
              />
              <Overlay />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-[2] space-y-5 text-white">
                <div className="overflow-hidden">
                  <motion.h2
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="text-4xl md:text-8xl font-bold uppercase"
                  >
                    <Fade cascade damping={1e-1}>
                      {item.heading}
                    </Fade>
                  </motion.h2>
                </div>
                <div className="overflow-hidden hidden md:block">
                  <motion.p
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                      delay: 0.3,
                    }}
                    className="text-xl"
                  >
                    {item.paragraph}
                  </motion.p>
                </div>
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                      delay: 0.6,
                    }}
                  >
                    <Link href="/#our-vision" className="btn btn-accent">
                      {item.cta}
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
