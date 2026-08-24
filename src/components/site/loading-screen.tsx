import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import logo from "@/assets/logo.png";

export function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDone(true);
    }, 1800);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-7 px-6">

            {/* Logo */}
            <motion.img
              src={logo}
              alt="Prince Group of Business"
              width={220}
              height={220}
              className="h-auto w-[180px] object-contain sm:w-[220px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            />

            {/* Loading Bar */}
            <div className="h-[3px] w-48 overflow-hidden rounded-full bg-white/20">
              <motion.div
                className="h-full w-full origin-left rounded-full bg-white"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Loading Text */}
            <motion.p
              className="text-xs uppercase tracking-[0.3em] text-white/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              
            </motion.p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}