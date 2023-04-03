import { usePostsContext } from "context/PostsContext";
import { Icon } from "design-system";
import { Likes, Views, Wrapper } from "./styles";

const DetailsSection = () => {
  const { likes, views } = usePostsContext();

  return (
    <Wrapper>
      <Likes>
        <Icon name="like" />
        {likes} likes
      </Likes>
      <Views>{views} views</Views>
    </Wrapper>
  );
};

export default DetailsSection;
