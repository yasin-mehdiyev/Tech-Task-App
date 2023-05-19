import { FC } from "react";
import ClipLoader from "react-spinners/ClipLoader";

type LoaderProps = {
    isLoad?: boolean;
};

const Loader : FC<LoaderProps> = ({ isLoad = false }) => {
  return (
    <div className="loader__wrapper">
      <ClipLoader color={"#fff"} loading={isLoad} size={200} />
    </div>
  );
};

export default Loader;
