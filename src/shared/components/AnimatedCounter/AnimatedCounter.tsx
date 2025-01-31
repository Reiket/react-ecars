import React, { FC } from "react";
import { animated, useSpring } from "@react-spring/web";

interface AnimatedCounterProps {
  count: number;
}

const AnimatedCounter: FC<AnimatedCounterProps> = ({ count }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: count,
    delay: 200,
    config: { mass: 1, tension: 170, friction: 26 },
  });
  return <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>;
};

export default AnimatedCounter;
