import { CUSINES } from "../constants";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
    }
  }
}

const ItemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8
    }
  }
}

const Expertise = () => {
  return (
    <section id="expertise">
  <h2 className="my-8 text-center text-3xl tracking-tighter lg:text-4xl">Our Expertise</h2>

  <motion.div
    initial="hidden"
    whileInView="show"
    variants={containerVariants}
    className="container mx-auto px-4"
  >
    {CUSINES.map((cusine, index) => (
      <motion.div
  key={index}
  variants={ItemVariants}
  className="flex flex-col md:flex-row items-start md:items-center gap-4 border-b-4 border-dotted border-neutral-700/40 py-6"
>
  {/* Number (Only visible on md+ screens) */}
  <div className="hidden md:block text-2xl font-semibold text-rose-400 md:w-auto">
    {cusine.number}
  </div>

  {/* Image */}
  <div className="w-full md:w-1/3 flex-shrink-0">
    <img
      src={cusine.image}
      alt={cusine.title}
      className="w-full h-auto rounded-3xl object-cover"
    />
  </div>

  {/* Text */}
  <div className="w-full md:pl-8">
    <h3 className="text-xl sm:text-2xl uppercase tracking-tighter text-rose-300">
      {cusine.title}
    </h3>
    <p className="mt-3 text-base sm:text-lg tracking-tight text-neutral-300">
      {cusine.description}
    </p>
  </div>
</motion.div>

    ))}
  </motion.div>
</section>

  )
};

export default Expertise;