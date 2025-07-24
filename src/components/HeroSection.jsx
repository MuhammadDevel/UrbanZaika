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
          className="relative inline-block"
        >
          <h1 className="text-white text-[4rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] font-extrabold tracking-wide relative z-20 leading-tight">
            UrbanZaika
          </h1>
        </motion.div>

        <p className="p-4 text-xl tracking-tighter text-white">Paris</p>
      </div>
    </section>
  )
};

export default HeroSection;