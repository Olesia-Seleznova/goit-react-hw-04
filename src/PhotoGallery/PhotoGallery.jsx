import css from "./PhotoGallery.module.css";
import PhotoCard from "../PhotoCard/Photocard";

export default function PhotoGallery({ items }) {
  return (
    <ul className={css.ul}>
      {items.map((item) => (
        <li key={item.id}>
          <PhotoCard item={item} />
        </li>
      ))}
    </ul>
  );
}
