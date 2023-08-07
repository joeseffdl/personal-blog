"use client"

import { motion } from "framer-motion"

export default function LandingPage() {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, top: 800, skewX: 0 }}
        animate={{ opacity: 1, top: 0, skew: -12 }}
        transition={{ duration: 0.25 }}
        className="h-full w-1/5 absolute left-[18%] bg-blue-300"
      />
      <motion.div
        initial={{ opacity: 0, bottom: 800, skewX: 0 }}
        animate={{ opacity: 1, bottom: 0, skew: -12 }}
        transition={{ duration: 0.25 }}
        className="h-full w-1/5 absolute right-[18%] bg-blue-700"
      />
      <div className="w-fit p-8 rotate-12 text-6xl font-bold z-10 text-center uppercase overflow-hidden">
        <div className="-rotate-12">
          <motion.div
            initial={{ opacity: 0, x: -1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className=""
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              🚲
            </motion.span>{" "}
            Biyahe
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className=""
          >
            ni
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className=""
          >
            Zeph{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              🚲
            </motion.span>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
