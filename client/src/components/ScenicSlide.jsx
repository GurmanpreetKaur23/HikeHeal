import { motion } from 'framer-motion';

export default function ScenicSlide({ image, caption }) {
  return (
    <div className="relative w-screen h-[710px] overflow-hidden">
      <motion.img
        src={image}
        alt={caption}
        initial={{ scale: 1.2, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      
    </div>
  );
}
