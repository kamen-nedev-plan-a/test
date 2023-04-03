import { Avatar, Username, Wrapper } from "./styles";

type Props = {
  avatar: ProfileImages["medium"];
  name: string;
};

const UserAvatar = ({ avatar, name }: Props) => {
  return (
    <Wrapper>
      <Username>{name}</Username>
      <Avatar alt="Avatar" src={avatar} />
    </Wrapper>
  );
};

export default UserAvatar;
