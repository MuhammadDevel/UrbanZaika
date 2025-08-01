import { REVIEW } from "../constants";
import xaviour from "../assets/xaviour.jpeg"
import customer1 from "../assets/customer1.jpg"
import customer2 from "../assets/customer2.jpg"
import customer3 from "../assets/customer3.jpg"
import { motion } from "motion/react"

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.8,
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
}

const Review = () => {
    return (
        <section className="container mx-auto mb-8 mt-12 px-4" id="review">
  <motion.div
    initial="hidden"
    whileInView="show"
    variants={containerVariants}
    viewport={{ once: true }}
    className="flex flex-col items-center"
  >
    {/* Review Content */}
    <motion.p
      variants={itemVariants}
      className="mb-10 text-xl sm:text-2xl md:text-3xl font-light leading-normal tracking-tighter text-center max-w-4xl"
    >
      {REVIEW.content}
    </motion.p>

    {/* Reviewer Info */}
    <motion.div
      variants={itemVariants}
      className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left"
    >
      <img
        src={xaviour}
        width={70}
        height={70}
        alt={REVIEW.name}
        className="rounded-full border object-cover"
      />
      <div className="tracking-tighter">
        <h6 className="text-base font-semibold">{REVIEW.name}</h6>
        <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
      </div>
    </motion.div>
  </motion.div>

  {/* Customer Images Row */}
  <motion.div
    initial="hidden"
    whileInView="show"
    variants={itemVariants}
    viewport={{ once: true }}
    className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6"
  >
    {[customer1, customer2, customer3].map((customer, index) => (
      <motion.img
        variants={itemVariants}
        key={index}
        src={customer}
        alt="customer"
        className="w-full max-w-[280px] h-[250px] rounded-br-3xl rounded-tl-3xl object-cover"
      />
    ))}
  </motion.div>
</section>

    )
};

export default Review;