import { usePostsContext } from "context/PostsContext";

import { Backdrop, PostImage, Wrapper } from "./styles";

/**
 * Post image, which takes the whole width and height of the parent container.
 * The remaining white space is filled with the same blured image, but zoomed
 * enough to fill the remaining space.
 */

const FullScreenImage = () => {
  const { image } = usePostsContext();

  return (
    <Wrapper bg={image}>
      <Backdrop>
        <PostImage alt="" src={image} />
      </Backdrop>
    </Wrapper>
  );
};

export default FullScreenImage;
