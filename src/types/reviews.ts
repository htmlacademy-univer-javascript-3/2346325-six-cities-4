type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: String;
  token: String;
};

export type Review = {
  id: number;
  date: string;
  comment: string;
  rating: number;
  user: User;
};

export type Reviews = Review[];
