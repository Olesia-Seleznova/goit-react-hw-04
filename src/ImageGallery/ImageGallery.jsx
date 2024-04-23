import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ onImageOpen, items }) {
  return (
    <ul className={css.ul}>
      {items.map((item) => (
        <li key={item.id} className={css.li}>
          <ImageCard className={css.img} item={item} onClick={onImageOpen} />
        </li>
      ))}
    </ul>
  );
}
