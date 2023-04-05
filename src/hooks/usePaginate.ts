import { useState } from "react";

import { INITIAL_OFFSET } from "config/posts";

const usePaginate = () => {
  const [offset, setOffset] = useState(INITIAL_OFFSET);

  const paginate = () => {
    setOffset(offset + 1);
  };

  return { paginate, offset };
};

export default usePaginate;
