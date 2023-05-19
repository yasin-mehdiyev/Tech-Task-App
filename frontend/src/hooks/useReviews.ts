import { useState } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Model
import { Review } from "../models/api/Reviews/Review";
// Services
import * as reviewServices from "../services/Review/ReviewService";
// Redux
import { selectReviewSlice, setAllReviews } from "../store/features/Review/ReviewSlice";

const useReviews = () => {
  const dispatch = useDispatch<any>();
  const reviews: any = useSelector(selectReviewSlice);

  const [hasSendRequest, setHasSendRequest] = useState<boolean>(false);

  return {
    reviews,
    hasSendRequest,
    addReviews: async (payload: Review) => {
      try {
        await reviewServices.createReview(payload);
        setHasSendRequest(!hasSendRequest);
      } catch (error) {
        console.log(error);
      }
    },
    getReviews: async () => {
        try {
          const { data } = await reviewServices.getAllReviews();
          if (data && data.length > 0) {
            const reviewData: Review = data.map((item: Review) => new Review(item));
            dispatch(setAllReviews(reviewData));
          }
        } catch (error) {
          console.log(error);
        }
      },
  };
};

export default useReviews;
