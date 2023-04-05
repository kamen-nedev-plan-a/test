import { UserSection, DescriptionSection, DetailsSection } from "./components";
import Wrapper from "./styles";

const PostDetails = () => {
  return (
    <Wrapper>
      <UserSection />
      <DescriptionSection />
      <DetailsSection />
    </Wrapper>
  );
};

export default PostDetails;
