import { INITIAL_LIMIT } from "config/posts";
import { usePaginate } from "hooks";
import { getPosts, getUser, getMedia } from "services";

type Props = {
  shouldPaginate?: boolean;
};

const useGetPost = ({ shouldPaginate = true }: Props = {}) => {
  const { paginate, offset } = usePaginate();

  const getCurrentPost = async () => {
    const { posts, count } = await getPosts({
      offset: offset,
      limit: INITIAL_LIMIT,
    });

    const post = posts[0];

    const user = await getUser({ username: post.user.username });

    const media = await getMedia({ id: post.mediaId });

    const canLoadMore = count > 1;

    if (shouldPaginate && canLoadMore) {
      paginate();
    }

    return {
      image: media.urls.regular,
      name: `${user.first_name} ${user.last_name ?? ""}`,
      avatar: user.profile_images.medium,
      likes: media.statistics.likes,
      views: media.statistics.views,
      title: post.title,
      description: post.description,
      canLoadMore,
    };
  };

  return getCurrentPost;
};

export default useGetPost;
