import { AnimatePresence, motion } from 'framer-motion';
import { type ReactNode, useState } from 'react';

import Button from '@/ui/components/button/Button';

interface FadeProps {
  children: ReactNode;
  show?: boolean;
  duration?: number;
}

const Fade = ({ children, show = true, duration = 0.3 }: FadeProps) => (
  <AnimatePresence mode="wait">
    {show && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration }}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

interface FadeDemoProps {
  duration?: number;
}

export const FadeDemo = ({ duration = 0.3 }: FadeDemoProps) => {
  const [show, setShow] = useState(true);

  return (
    <div className="flex flex-col items-center gap-4">
      <Button onClick={() => setShow((value) => !value)}>{show ? 'Hide' : 'Show'}</Button>
      <Fade show={show} duration={duration}>
        <div className="rounded-(--radius) border border-border bg-card px-6 py-4 text-card-foreground">
          Fading content
        </div>
      </Fade>
    </div>
  );
};

export default Fade;
