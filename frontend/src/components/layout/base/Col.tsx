import { FC } from "react";
// Models
import { IColProps } from "../../../models/interfaces/constants";

const Col: FC<IColProps> = ({ children, columnName }) => {
  return <div className={columnName}>{children}</div>;
};

export default Col;
