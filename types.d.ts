type Entry = {
  heading: string;
  id: number;
  date: string;
  writer: string;
  entry: string | null;
  links: Links | null;
  fav: 101;
  likes: 2869;
};

type Links = {
  type: string;
  linkText: string;
  url: string;
};

type Heading = {
  channel: string;
  name: string;
  entryCount: number;
  hot: boolean;
  id: number;
};

type User = {
  name: string;
  pp: string;
  id: number;
  entries: number;
  followers: number;
  followed: number;
};

type Problematic = {
  name: string;
  heading: string;
  replies: number;
  id: number;
};
