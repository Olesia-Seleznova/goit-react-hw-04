import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import PhotoGallery from "./PhotoGallery/PhotoGallery";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import { fetchPhotos } from "../photos-api";
import "./App.css";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   async function getPhotos() {
  //     try {
  //       setIsloading(true);
  //       const data = await fetchPhotos();
  //       setPhotos(data);
  //     } catch (error) {
  //       setError(true);
  //     } finally {
  //       setIsloading(false);
  //     }
  //   }
  //   getPhotos();
  // }, []);

  const handleSubmit = async (newQuery) => {
    try {
      setIsloading(true);
      const data = await fetchPhotos(newQuery);
      setPhotos(data);
    } catch (error) {
      setError(true);
    } finally {
      setIsloading(false);
    }
  };

  return (
    <div>
      <h1>Photo Galery</h1>
      <SearchBar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}

      {photos.length > 0 && <PhotoGallery items={photos} />}
    </div>
  );
}
