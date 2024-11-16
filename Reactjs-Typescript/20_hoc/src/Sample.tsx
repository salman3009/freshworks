import { useEffect } from "react";

const Sample = ({
  count,
  startTimer,
  endTimer
}: {
  count: number;
  startTimer: () => void;
  endTimer: () => void;
}) => {
  useEffect(() => {
    startTimer();
  }, [startTimer]);

  useEffect(() => {
    if (count === 10) {
      endTimer();
    }
  }, [count, endTimer]);

  return <p>{count}</p>;
};

export default Sample;
