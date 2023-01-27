import React, { useState, useEffect } from "react";

type Props = React.ComponentPropsWithoutRef<"button"> & {
  top?: number;
  smooth?: boolean;
  svgPath?: string;
  viewBox?: string;
  component?: any;
  width?: string;
  height?: string;
};

function scrollToTop(smooth: boolean = false) {
  if (smooth) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    document.documentElement.scrollTop = 0;
  }
}

const ScrollToTop = ({
  top = 20,
  className = "",
  color = "black",
  smooth = false,
  component = "",
  viewBox = "0 0 24 24",
  svgPath = "M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18",
  width = "24",
  height = "24",
  ...props
}: Props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(document.documentElement.scrollTop >= top);
    };
    onScroll();
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [top]);

  return (
    <>
      {visible && (
        <button
          className={`scroll-to-top ${className}`}
          onClick={() => scrollToTop(smooth)}
          aria-label="Scroll to top"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
        >
          {component || (
            <svg
              stroke="currentColor"
              stroke-width="1.5"
              width={width}
              height={height}
              fill={color}
              viewBox={viewBox}
            >
              <path d={svgPath} />
            </svg>
          )}
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
