import request from "../request";

type GetMediaRequest = RequestType<{
  media: Media;
}>;

type GetUserProps = {
  id: string;
};

export const getMedia = async ({ id }: GetUserProps) => {
  const posts = await request<GetMediaRequest>({
    url: `/medias/${id}`,
    append: "?",
  });

  return posts.response.media;
};
