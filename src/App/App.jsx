import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { fetchPhotos } from "../photos-api";
import "./App.css";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [modalUrl, setModalUrl] = useState("");
  const [modalAlt, setModalAlt] = useState("");

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setPhotos([]);
    setShowBtn(false);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleModalOpen = (imgUrl, imgAlt) => {
    setModalUrl(imgUrl);
    setModalAlt(imgAlt);
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getPhotos() {
      try {
        setError(false);
        setIsloading(true);
        const data = await fetchPhotos(query, page);
        setShowBtn(data.total_pages && data.total_pages !== page);
        setPhotos((prevPhotos) => {
          return [...prevPhotos, ...data.results];
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
        <ImageGallery items={photos} onImageOpen={handleModalOpen} />
      )}

      {!isLoading && showBtn && photos.length > 0 && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}

      <ImageModal
        isOpen={modalIsOpen}
        onClose={handleModalClose}
        url={modalUrl}
        alt={modalAlt}
      />
    </div>
  );
}
