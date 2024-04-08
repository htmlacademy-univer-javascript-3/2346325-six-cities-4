type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
};

export type Review = {
  id: number;
  date: string;
  comment: string;
  rating: number;
  user: User;
};

export type Reviews = Review[];
