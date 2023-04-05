import { useContext } from "react";

import { PostsCtx } from "./PostsProvider";

export const usePostsContext = () => {
  const ctx = useContext(PostsCtx);

  if (!ctx) {
    throw new Error("usePostsContext must be used within the PostsProvider");
  }

  return ctx;
};
