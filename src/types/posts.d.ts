type Post = {
  created: Date;
  description: string | null;
  id: string;
  likes: number;
  mediaId: string;
  title: string | null;
  user: Pick<User, "username" | "id">;
};

type PostCombinedDataType = {
  image: string;
  name: string;
  avatar: string;
  likes: number;
  views: number;
  title: string | null;
  description: string | null;
};
