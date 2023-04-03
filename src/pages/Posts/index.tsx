import PostDetails from "components/PostDetails";
import FullScreenImage from "components/FullScreenImage";
import Wrapper from "./styles";

const Posts = () => {
  return (
    <Wrapper>
      <FullScreenImage />
      <PostDetails />
    </Wrapper>
  );
};

export default Posts;
