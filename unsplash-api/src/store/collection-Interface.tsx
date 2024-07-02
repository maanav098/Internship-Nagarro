export interface UserProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
}

export interface User {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  portfolio_url: string;
  bio: string;
  location: string;
  total_likes: number;
  total_photos: number;
  total_collections: number;
  profile_image: UserProfileImage;
  links: UserLinks;
}

export interface CoverPhotoUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface CoverPhotoLinks {
  self: string;
  html: string;
  download: string;
}

export interface CoverPhoto {
  id: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  likes: number;
  liked_by_user: boolean;
  description: string | null;
  user: User;
  urls: CoverPhotoUrls;
  links: CoverPhotoLinks;
}

export interface CollectionLinks {
  self: string;
  html: string;
  photos: string;
  related: string;
}

export interface Collection {
  urls: any;
  id: number;
  title: string;
  description: string | null;
  published_at: string;
  last_collected_at: string;
  updated_at: string;
  total_photos: number;
  private: boolean;
  share_key: string;
  cover_photo: CoverPhoto;
  user: User;
  links: CollectionLinks;
  preview_photos: {
    id: string;
    urls: {
      raw: string;
      full: string;
      regular: string;
      small: string;
      thumb: string;
    };
    links: {
      self: string;
      html: string;
      download: string;
    };
  }[];
}
