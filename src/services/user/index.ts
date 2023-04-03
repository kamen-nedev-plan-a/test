import request from "../request";

type GetUserRequest = RequestType<{
  count: number;
  user: User;
}>;

type GetUserProps = {
  username: string;
};

export const getUser = async ({ username }: GetUserProps) => {
  const posts = await request<GetUserRequest>({
    url: `/users/${username}`,
    append: "?",
  });

  return posts.response.user;
};
