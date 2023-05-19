import { FC, useState } from "react";
// Custom Hooks
import useResources from "../../../../hooks/useResources";
// Components
import Col from "../../../layout/base/Col";
import Row from "../../../layout/base/Row";
import Button from "../../../layout/elements/Button";
import Input from "../../../layout/elements/Input";

type ReviewFormProps = {
  formik: any;
};

const ReviewForm: FC<ReviewFormProps> = ({ formik }) => {
  const { resources } = useResources();
  const [toggleSaveAs, setToggleSaveAs] = useState<boolean>(false);

  const onChange = (): void => {
    setToggleSaveAs(!toggleSaveAs);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Row>
        <Col columnName={"col-lg-12 mb-2"}>
          <Input
            name={"comment"}
            id={"comment"}
            className={"w-100 p-4 fs__17"}
            type={"textarea"}
            formik={formik}
            hasError={
              formik?.touched?.comment && Boolean(formik?.errors?.comment)
            }
            errorMessage={formik?.errors?.comment}
            placeholder={`${resources["comment"]} *`}
          />
        </Col>
        <Col columnName={"col-lg-6 mb-2"}>
          <Input
            name={"name"}
            id={"name"}
            className={"w-100 p-2 fs__17"}
            type={"text"}
            formik={formik}
            hasError={formik?.touched?.name && Boolean(formik?.errors?.name)}
            errorMessage={formik?.errors?.name}
            placeholder={`${resources["name"]} *`}
          />
        </Col>
        <Col columnName={"col-lg-6 mb-2"}>
          <Input
            name={"email"}
            id={"email"}
            className={"w-100 p-2 fs__17"}
            type={"email"}
            formik={formik}
            hasError={formik?.touched?.email && Boolean(formik?.errors?.email)}
            errorMessage={formik?.errors?.email}
            placeholder={`${resources["email"]} *`}
          />
        </Col>
        <Col columnName={"col-lg-12 mb-2"}>
          <Input
            name={"phone"}
            id={"phone"}
            className={"w-100 p-3 fs__17"}
            type={"text"}
            formik={formik}
            hasError={formik?.touched?.phone && Boolean(formik?.errors?.phone)}
            errorMessage={formik?.errors?.phone}
            placeholder={`${resources["phoneOptional"]}`}
          />
        </Col>
        <Col columnName={"col-lg-12 mb-2"}>
          <div className={"d-flex"}>
            <Input
              name={"saveAs"}
              id={"saveAs"}
              type={"checkbox"}
              checked={toggleSaveAs}
              handleChange={onChange}
            />
            <span className={"ms-2"}>{resources["saveAsContent"]}{"."}</span>
          </div>
        </Col>
        <Col columnName={"col-lg-12 mt-4"}>
          <Button
            isSubmit={true}
            className={
              "customize__button bgColor__00495ce0 border__radius p__10 text-uppercase"
            }
          >
            {resources["postReview"]}
          </Button>
        </Col>
      </Row>
    </form>
  );
};

export default ReviewForm;
