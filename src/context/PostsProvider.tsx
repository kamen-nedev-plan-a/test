import useGetPost from "hooks/posts/useGetPost";
import useInterval, { IntervalDelay } from "hooks/useInterval";
import { createContext, useState, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

type ContextState = PostCombinedDataType;

export const PostsCtx = createContext({} as ContextState);

export const PostsProvider = ({ children }: Props) => {
  const [state, setState] = useState<ContextState>();
  const [delay, setDelay] = useState<IntervalDelay>(6000);

  const getCurrentPost = useGetPost();

  useInterval(async () => {
    try {
      // const postData = undefined;
      const postData = await getCurrentPost();
      setState(postData);

      // Pause on last post - TBD
      if (!postData.canLoadMore) {
        setDelay(null);
      }
    } catch (error) {
      // Pause if there is an error - TBD
      setDelay(null);
      console.log("Something went wrong", error);
    }
  }, delay);

  const value = { ...state } as PostCombinedDataType;

  return <PostsCtx.Provider value={value}>{children}</PostsCtx.Provider>;
};
