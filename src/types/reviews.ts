type User = {
  name: string;
  photo: string;
};

export type Review = {
  date: string;
  text: string;
  rating: number;
  user: User;
};
