import { FC, useState } from "react";
// Custom Hooks
import useResources from "../../../hooks/useResources";
// Models
import { Review } from "../../../models/api/Reviews/Review";
// Components
import Col from "../../layout/base/Col";
import ReviewItem from "./ReviewItem";

type ReviewListProps = {
  data: Review[];
};

const ReviewList: FC<ReviewListProps> = ({ data }) => {
  const { resources } = useResources();
  const [stateReadReviews, setStateReadReviews] = useState<boolean>(false);

  const handleReadReviews = (): void => {
    setStateReadReviews(!stateReadReviews);
  };

  return (
    <>
      {data.length > 0
        ? data
            .slice(0, stateReadReviews ? data.length : 1)
            .map((item: Review, index: number) => (
              <Col columnName={"col-lg-12"} key={item.id}>
                <ReviewItem
                  item={item}
                  totalLength={data.length}
                />
              </Col>
            ))
        : null}

      {data.length > 1 ? (
        <Col columnName={"col-lg-12"}>
          <a
            href="javascript: void(0);"
            className="review__list__more"
            onClick={handleReadReviews}
          >
            {!stateReadReviews ? resources["readAllReviews"] : resources["hideReviews"]}
          </a>
        </Col>
      ) : null}
    </>
  );
};

export default ReviewList;
