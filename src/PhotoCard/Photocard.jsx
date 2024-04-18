export default function PhotoCard({ item }) {
  return (
    <div>
      <img src={item.urls.small} alt={item.description} />
    </div>
  );
}
