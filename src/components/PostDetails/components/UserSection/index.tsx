import { usePostsContext } from "context/PostsContext";

import UserAvatar from "components/UserAvatar";
import Wrapper from "./styles";

const UserSection = () => {
  const { avatar, name } = usePostsContext();

  return (
    <Wrapper>
      <UserAvatar avatar={avatar} name={name} />
    </Wrapper>
  );
};

export default UserSection;
