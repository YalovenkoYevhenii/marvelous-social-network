import { useEffect, useState, useRef } from 'react';

const useLazyLoad = () => {
  const targetRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isRanOut, setIsRanOut] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, { threshold: 1.0 });

    if (targetRef) observer.observe(targetRef);

    if (isRanOut) observer.unobserve(targetRef);

    return () => isRanOut || observer.unobserve(targetRef);
  }, []);

  return { targetRef, isIntersecting, setIsRanOut };
};

export default useLazyLoad;
