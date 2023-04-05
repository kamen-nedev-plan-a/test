type User = {
  id: string;
  username: string;
  first_name: string;
  last_name: string;
  profile_images: ProfileImages;
};

type ProfileImages = {
  small: string;
  medium: string;
  large: string;
};
