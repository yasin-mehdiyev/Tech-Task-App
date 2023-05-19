import { FC, useState } from "react";
// React Icons
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
// Models
import { Review } from "../../../models/api/Reviews/Review";
// Custom Hooks
import useResources from "../../../hooks/useResources";
// Helpers
import { maxRate } from "../../../helpers/constants";
import { fillArray } from "../../../helpers/helperFunctions";

type ReviewItemProps = {
  item: Review;
  totalLength: number;
};

const ReviewItem: FC<ReviewItemProps> = ({ item, totalLength }) => {
  const { name, date, comment, email, phone, rate } = item;
  const { resources } = useResources();
  const [isReadMore, setIsReadMore] = useState<boolean>(false);

  const handleToggle = (): void => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="review__list mb-3">
      <h4>{name}</h4>
      <span>{date}</span>
      <div className="review__list__ratings">
        <>
          {
            fillArray(rate).map((_, index: number) => (
              <AiFillStar className={"rating__color"} key={index + 1} />
            ))
          }

          {rate < maxRate ? (
            fillArray(maxRate - rate).map((_, index: number) => (
              <AiOutlineStar key={index + 1} />
            ))
          ) : null}
        </>
      </div>
      <p className="review__list__comment">{comment}</p>
      {!isReadMore ? (
        <a
          href="javascript: void(0);"
          className="review__list__more"
          onClick={handleToggle}
        >
          {resources["readMore"]}
        </a>
      ) : null}

      {isReadMore ? (
        <div className={"mb-3"}>
          <span>{resources["email"]} {":"} {email}</span> <br />
          <span>
            {resources["phone"]} {":"} {phone !== "" ? phone : resources["notAvailablePhone"]}
          </span>
        </div>
      ) : null}

      {totalLength > 1 ? <hr className="review__list__hr__line" /> : null}
    </div>
  );
};

export default ReviewItem;
