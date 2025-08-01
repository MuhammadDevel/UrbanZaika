import video from "../assets/hero.mp4"
import hero from "../assets/hero.jpg"
import { motion } from "motion/react"

const HeroSection = () => {
  return (
    <section className="relative flex h-screen items-center justify-center">
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <video
          src={video}
          className="h-full w-full object-cover"
          muted
          autoPlay
          loop
          playsInline
          poster={hero}
          preload="auto"
        ></video>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black" />
      <div className="relative z-20 flex h-screen flex-col justify-end pb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full overflow-x-hidden px-4"
        >
          <h1 className="text-white text-[3rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[7rem] xl:text-[9rem] font-extrabold tracking-tight leading-tight break-words max-w-full z-20">
            UrbanZaika
          </h1>
        </motion.div>


        <p className="p-4 text-xl tracking-tighter text-white">Paris</p>
      </div>
    </section>
  )
};

export default HeroSection;