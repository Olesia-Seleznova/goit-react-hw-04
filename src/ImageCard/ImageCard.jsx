export default function ImageCard({
  item: {
    alt_description: alt,
    urls: { small, regular },
  },
  onClick,
}) {
  return (
    <div>
      <img
        src={small}
        alt={alt}
        onClick={() => {
          onClick(regular, alt);
        }}
      />
    </div>
  );
}
