import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import logo from "@/assets/logo.png";

export function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-ink"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-6 px-6">
            <motion.img
              src={logo}
              alt=""
              width={220}
              height={110}
              className="w-[180px] brightness-0 invert sm:w-[220px]"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
            <div className="h-[3px] w-48 overflow-hidden rounded-full bg-white/15">
              <motion.div
                className="h-full w-full origin-left rounded-full"
                style={{ background: "var(--gradient-primary)" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
