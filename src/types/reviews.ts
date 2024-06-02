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

export type CommentFormDataType = {
  comment: string;
  rating: number;
};

export type ReviewData = {
  comment: string;
  rating: number;
  offerId: string;
};

