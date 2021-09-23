import { useEffect, useState, useRef } from 'react';

const useIntersectionObserver = () => {
  const targetRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isRanOut, setIsRanOut] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, { threshold: 1.0 });
    if (targetRef.current) observer.observe(targetRef.current);

    if (isRanOut) observer.unobserve(targetRef.current);

    return () => {
      if (targetRef.current) observer.unobserve(targetRef.current);
    };
  }, []);

  return {
    targetRef, isIntersecting, isRanOut, setIsRanOut,
  };
};

export default useIntersectionObserver;
