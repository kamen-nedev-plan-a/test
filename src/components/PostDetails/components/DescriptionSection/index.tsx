import { usePostsContext } from "context/PostsContext";
import { Wrapper, Title, Description } from "./styles";

const DescriptionSection = () => {
  const { title, description } = usePostsContext();

  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      {description && <Description>{description}</Description>}
    </Wrapper>
  );
};

export default DescriptionSection;
