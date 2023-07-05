type Entry = {
  heading: string;
  entry_no: number;
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
};

type User = {
  name: string;
  pp: string;
};
