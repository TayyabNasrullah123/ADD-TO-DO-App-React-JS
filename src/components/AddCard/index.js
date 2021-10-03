import React from "react";
import { v4 as uuidv4 } from "uuid";
import { cardSchema } from "./schema";
import { Formik, Form, Field } from "formik";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardInput,
  CardButton,
} from "./addCard.style";
const AddCard = (props) => {
  const handleCard = (values) => {
    const id = uuidv4();
    const { name } = values;

    const cardObj = {
      id,
      name,
    };
    const cardArray = JSON.parse(localStorage.getItem("cards") || "[]");
    if (cardArray.length === 0) {
      cardArray.push(cardObj);
      localStorage.setItem("cards", JSON.stringify(cardArray));
      props.history.push("/");
    } else {
      cardArray.push(cardObj);
      localStorage.setItem("cards", JSON.stringify(cardArray));
      props.history.push("/");
    }
  };
  return (
    <CardWrapper directionForm>
      <CardHeader>
        <CardHeading>Add Card</CardHeading>
      </CardHeader>

      <Formik
        initialValues={{
          name: "",
        }}
        validationSchema={cardSchema}
        onSubmit={(values) => {
          handleCard(values);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form disabled={isSubmitting}>
            <CardBody>
              <CardFieldset displayForm>
                <CardInput>
                  <Field
                    className="input"
                    type="text"
                    name="name"
                    placeholder="Enter Card Name"
                  />
                </CardInput>
                {errors.name && touched.name ? (
                  <div style={{ color: "red" }}>{errors.name}</div>
                ) : null}
              </CardFieldset>
              <CardFieldset>
                <CardButton type="submit">Save</CardButton>
              </CardFieldset>
            </CardBody>
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};

export default AddCard;
