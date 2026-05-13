import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import './StickyScroll.css';

interface StickyScrollProps {
  children: React.ReactNode[];
}

interface StickyScrollItemProps {
  child: React.ReactNode;
  index: number;
  numSections: number;
  scrollYProgress: MotionValue<number>;
}

const StickyScrollItem: React.FC<StickyScrollItemProps> = ({ child, index, numSections, scrollYProgress }) => {
  const sectionStart = index / numSections;
  const sectionEnd = (index + 1) / numSections;

  const opacity = useTransform(
    scrollYProgress,
    [sectionStart, sectionEnd - (0.5 / numSections), sectionEnd],
    [1, 1, 0] 
  );

  const scale = useTransform(
    scrollYProgress,
    [sectionStart, sectionEnd],
    [1, 0.95]
  );

  return (
    <motion.div
      className="sticky-scroll-section"
      style={{ 
        opacity, 
        scale,
        zIndex: numSections - index 
      }}
    >
      {child}
    </motion.div>
  );
};

const StickyScroll: React.FC<StickyScrollProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const numSections = React.Children.count(children);

  return (
    <div ref={containerRef} className="sticky-scroll-container" style={{ height: `${numSections * 100}vh` }}>
      {React.Children.map(children, (child, index) => (
        <StickyScrollItem 
          key={index}
          child={child} 
          index={index} 
          numSections={numSections} 
          scrollYProgress={scrollYProgress} 
        />
      ))}
    </div>
  );
};

export default StickyScroll;
