import { FC, useEffect } from "react";
// Formik and Yup
import { useFormik } from "formik";
import * as Yup from "yup";
// UUID
import { v4 as uuidv4 } from "uuid";
// Moment.js
import moment from "moment";
// Components
import Col from "../../components/layout/base/Col";
import Row from "../../components/layout/base/Row";
import ReviewList from "../../components/features/reviews/ReviewList";
import ReviewForm from "../../components/features/reviews/form/ReviewForm";
// Custom Hooks
import useReviews from "../../hooks/useReviews";
import useResources from "../../hooks/useResources";
// Models
import { Review } from "../../models/api/Reviews/Review";
// Helpers
import { phoneRegExp } from "../../helpers/constants";
import { randomIntFromInterval } from "../../helpers/helperFunctions";

const Reviews: FC = () => {
  // Custom Hooks
  const { reviews, hasSendRequest, addReviews, getReviews } = useReviews();
  const { resources } = useResources();

  const validationSchema = Yup.object({
    comment: Yup.string()
      .min(5, "Too small")
      .max(600, "Too large")
      .required("Please the enter your comment"),
    name: Yup.string()
      .min(5, "Too small")
      .max(20, "Too large")
      .required("Please the enter your name"),
    email: Yup.string().email().required("Please the enter your email"),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .optional(),
  });

  const formik = useFormik({
    initialValues: {
      comment: "",
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values: any) => {
      try {
        const payload: Review = { id: uuidv4(), ...values, date: moment().format('MMMM DD,yyyy'), rate: randomIntFromInterval(1, 5) };
        addReviews(payload);
        formik.resetForm();
      } catch (error: any) {
        console.log(error);
      }
    },
  });

  useEffect(() => {
    document.body.setAttribute("style", "background: #ededed !important;");
  }, []);
  
  useEffect(() => {
    try {
      getReviews();
    } catch (error) {
      console.log(error);
    }
  }, [hasSendRequest]);

  return (
    <div className={"reviews"}>
      <Row>
        <ReviewList data={reviews} />
      </Row>
      <Row>
        <Col columnName={"col-lg-12"}>
          <div className="add__reviews">
            <div className="add__reviews_up">
              <h4>{resources["leaveReview"]}</h4>
              <span>{resources["reviewFormTitle"]} *</span>
            </div>
            <div className="add__reviews_body">
              <ReviewForm formik={formik} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Reviews;
