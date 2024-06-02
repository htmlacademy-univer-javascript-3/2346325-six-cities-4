import { useState, ChangeEvent, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getIsReviewsStatusSubmitting, getReviewsHasError, postReviewAction, setReviewsErrorStatus } from '../../store';
import { LoadingStatus } from '../../const';

type ReviewFormProps = {
  id: string;
};

export function ReviewForm({ id }: ReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    text: '',
    rating: 0
  });

  const isLoading = useAppSelector(getIsReviewsStatusSubmitting);
  const reviewsStatus = useAppSelector(getReviewsHasError);

  const [valid, setValid] = useState(false);
  const disabledSubmitButton = !valid || isLoading;

  const validateForm = (comment: string, newRating: number) => {
    const isValid = (
      comment.length >= 50 &&
      newRating !== 0
    );
    setValid(isValid);
  };

  const resetForm = () => {
    setValid(false);
    setFormData({
      text: '',
      rating: 0
    });
  };

  useEffect(() => {
    if (reviewsStatus === LoadingStatus.Success) {
      resetForm();
      dispatch(setReviewsErrorStatus(LoadingStatus.Idle));
    }
  }, [reviewsStatus, dispatch]);

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const newRating = Number(evt.target.value);
    setFormData({...formData, rating: newRating});
    validateForm(formData.text, newRating);
  };
  const handleTextChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = evt.target.value;
    setFormData({...formData, text: newText});
    validateForm(newText, formData.rating);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      postReviewAction({
        offerId: id,
        comment: formData.text,
        rating: formData.rating,
      })
    );
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={5}
          id="5-stars"
          type="radio"
          onChange={handleRatingChange}
          checked={formData.rating === 5}
        />
        <label
          htmlFor="5-stars"
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={4}
          id="4-stars"
          type="radio"
          onChange={handleRatingChange}
          checked={formData.rating === 4}
        />
        <label
          htmlFor="4-stars"
          className="reviews__rating-label form__rating-label"
          title="good"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={3}
          id="3-stars"
          type="radio"
          onChange={handleRatingChange}
          checked={formData.rating === 3}
        />
        <label
          htmlFor="3-stars"
          className="reviews__rating-label form__rating-label"
          title="not bad"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={2}
          id="2-stars"
          type="radio"
          onChange={handleRatingChange}
          checked={formData.rating === 2}
        />
        <label
          htmlFor="2-stars"
          className="reviews__rating-label form__rating-label"
          title="badly"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={1}
          id="1-star"
          type="radio"
          onChange={handleRatingChange}
          checked={formData.rating === 1}
        />
        <label
          htmlFor="1-star"
          className="reviews__rating-label form__rating-label"
          title="terribly"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.text}
        onChange={handleTextChange}
        disabled={isLoading}
        required
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={disabledSubmitButton}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
