// import toast, { Toaster } from "react-hot-toast";
import { Formik, Form, Field } from "formik";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  // const notify = () => toast("Text must be entered");

  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values, actions) => {
        onSubmit(values.query);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <button className={css.btn} type="submit">
          Search
        </button>
        <Field
          className={css.input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />

        {/* <Toaster position="top-right" reverseOrder={false} /> */}
      </Form>
    </Formik>
  );
}
