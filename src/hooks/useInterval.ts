import { useEffect, useRef, useState } from "react";

export type IntervalDelay = number | null;

type Props = (callback: () => void, delay: IntervalDelay) => void;

/**
 * @param callback
 * Function to execute after each delay time.
 * @param delay
 * Number of miliseconds before executing the next callback. Can be paused if set to `null`.
 */
const useInterval: Props = (callback, delay) => {
  const [isInitialRender, setIsInitialRender] = useState(true);

  const callbackRef: React.MutableRefObject<() => void> = useRef(() => null);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const cb = () => {
      callbackRef.current();
    };

    if (isInitialRender) {
      // Does not waits the delay time if it's the first render.
      cb();
      setIsInitialRender(false);
    }

    if (delay !== null) {
      const id = setInterval(cb, delay);
      return () => {
        clearInterval(id);
        setIsInitialRender(true);
      };
    }
  }, [delay]); // eslint-disable-line
};

export default useInterval;
