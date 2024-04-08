import { Review as ReviewType } from '../../types/reviews';
import Review from '../review/review';

type ReviewListProps = {
  reviews: ReviewType[];
};

export default function ReviewList({ reviews }: ReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </ul>
  );
}
