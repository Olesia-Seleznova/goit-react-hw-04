import { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import PhotoGallery from "./PhotoGallery/PhotoGallery";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMore from "./LoadMore/LoadMore";
import ImageModal from "./ImageModal/ImageModal";
import { fetchPhotos } from "../photos-api";
import "./App.css";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setPhotos([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getPhotos() {
      try {
        setIsloading(true);
        const data = await fetchPhotos(query, page);
        setPhotos((prevPhotos) => {
          return [...prevPhotos, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsloading(false);
      }
    }
    getPhotos();
  }, [page, query]);

  return (
    <div>
      <h1>Photo Galery</h1>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {photos.length > 0 && (
        <PhotoGallery items={photos} onImageClick={openModal} />
      )}
      {photos.length > 0 && !isLoading && <LoadMore onClick={handleLoadMore} />}
      <ImageModal
        isOpen={selectedImage !== null}
        image={selectedImage}
        onRequestClose={closeModal}
      />
    </div>
  );
}
