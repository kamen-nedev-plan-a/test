import request from "../request";

type GetMediaRequest = RequestType<{
  media: Media;
}>;

type GetMediaProps = {
  id: string;
};

export const getMedia = async ({ id }: GetMediaProps) => {
  const posts = await request<GetMediaRequest>({
    url: `/medias/${id}`,
    append: "?",
  });

  return posts.response.media;
};
