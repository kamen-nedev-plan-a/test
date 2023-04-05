type Media = {
  id: string;
  type: string;
  statistics: Statistics;
  urls: Urls;
  owner: Pick<User, "username" | "id">;
};

type Statistics = {
  views: number;
  downloads: number;
  likes: number;
  created: number;
};

type Urls = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
};
