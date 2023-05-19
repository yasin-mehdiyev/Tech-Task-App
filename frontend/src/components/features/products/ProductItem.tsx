import { FC, useState } from "react";
// Models
import { Product } from "../../../models/api/Products/Product";
// Components
import Input from "../../layout/elements/Input";
import Button from "../../layout/elements/Button";
// Custom Hooks
import useResources from "../../../hooks/useResources";

const ProductItem: FC<Product> = ({
  name,
  photo,
  amount,
  desc,
  isOnline,
  onlineMessage,
  isCompared,
}) => {
  const { resources } = useResources();
  const [toggleCompare, isToggleCompare] = useState<boolean>(isCompared);

  const onChange = (): void => {
    isToggleCompare(!toggleCompare);
  };

  return (
    <div className="card product__card">
      <div className="product__card__image">
        <img
          src={`/assets/images/${photo !== "" ? photo : "404.gif"}`}
          className="card-img-top"
          alt={name}
        />
        <div className="hover__effect">
          <div className="hover__effect__up">
            <Button className="customize__button">{resources["shopMeal"]}</Button>
            <img src="/assets/images/favorite.svg" alt="Heart" />
          </div>
          <div className="hover__effect__bottom d-flex align-items-end">
            <span>{resources["productDetails"]}</span>
          </div>
        </div>
      </div>
      <div className="product__card__body">
        <div className="product__card__info d-flex justify-content-between align-items-center">
          <span className="title">{name}</span>
          <span className="amount">{`${amount} $`}</span>
        </div>
        <div className="product__card__desc">
          <span>{desc}</span>
        </div>
        <div className="product__card__more d-flex justify-content-between align-items-center">
          {isOnline ? (
            <div className="product__card__more__status">
              <span className="online"></span>
              <span className="status">{onlineMessage}</span>
            </div>
          ) : null}
          <div className="product__card__more__compare">
            <form className="d-inline-flex">
              <label htmlFor="compare">{resources["compare"]}</label>
              <Input
                id={"compare"}
                name={"compare"}
                className={"d-flex align-items-center"}
                type={"checkbox"}
                checked={toggleCompare}
                handleChange={() => onChange()}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
