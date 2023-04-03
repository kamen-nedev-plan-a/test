import DescriptionSection from "./components/DescriptionSection";
import DetailsSection from "./components/DetailsSection";
import UserSection from "./components/UserSection";

import { Wrapper } from "./styles";

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
