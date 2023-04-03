import request from "../request";

type GetPostsRequest = RequestType<{
  count: number;
  posts: Post[];
}>;

type GetPostsProps = {
  offset: number;
  limit: number;
};

export const getPosts = async ({ offset, limit }: GetPostsProps) => {
  const posts = await request<GetPostsRequest>({
    url: `/posts?offset=${offset}&limit=${limit}`,
  });

  return posts.response;
};
