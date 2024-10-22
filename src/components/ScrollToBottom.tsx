import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type Props = React.ComponentPropsWithoutRef<"button"> & {
  bottom?: number;
  smooth?: boolean;
  svgPath?: string;
  viewBox?: string;
  component?: any;
  width?: string;
  height?: string;
};

function scrollToBottom(smooth: boolean = false) {
  const targetPosition = document.documentElement.scrollTop + 850;
  if (smooth) {
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  } else {
    document.documentElement.scrollTop = targetPosition;
  }
}

const ScrollToBottom = ({
  bottom = 0,
  className = "",
  color = "black",
  smooth = false,
  component = "",
  viewBox = "0 0 24 24",
  svgPath = "M4.5 13.5 12 21m0 0 7.5-7.5M12 21V3",
  width = "24",
  height = "24",
  ...props
}: Props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const isAtBottom =
        document.documentElement.scrollHeight -
          document.documentElement.scrollTop <=
        bottom + window.innerHeight;
      setVisible(!isAtBottom);
    };
    onScroll();
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [bottom]);

  return (
    <>
      {visible && (
        <motion.div
          initial={{ translateY: 0 }}
          animate={{ translateY: [0, 10, 0] }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 0.8,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="z-[2] my-8 flex items-center justify-center sm:my-24 md:my-36"
        >
          <button
            className={`scroll-to-bottom ${className}`}
            onClick={() => scrollToBottom(smooth)}
            aria-label="Scroll to bottom"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
          >
            {component || (
              <svg
                stroke="currentColor"
                strokeWidth="1.5"
                width={width}
                height={height}
                fill={color}
                viewBox={viewBox}
              >
                <path d={svgPath} />
              </svg>
            )}
          </button>
        </motion.div>
      )}
    </>
  );
};

export default ScrollToBottom;
