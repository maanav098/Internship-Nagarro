

export interface Photo {
  id: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  likes: number;
  liked_by_user: boolean; 

  description: string | null;
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
  user: {
    id: string;
    username: string;
    name: string;
    links: {
      html: string;
      self: string;
      photos: string;
      likes: string;
    };
  };
}

export interface SearchPhotosResponse {
  total: number;
  total_pages: number;
  results: Photo[];
}

