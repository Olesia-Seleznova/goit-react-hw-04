import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <p className={css.p}>Oops...Something went wrong...Reload the page! </p>
  );
}
