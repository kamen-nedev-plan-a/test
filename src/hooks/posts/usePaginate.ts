import { INITIAL_OFFSET } from "config/posts";
import { useState } from "react";

const usePaginate = () => {
  const [offset, setOffset] = useState(INITIAL_OFFSET);

  const paginate = () => {
    setOffset(offset + 1);
  };

  return { paginate, offset };
};

export default usePaginate;
