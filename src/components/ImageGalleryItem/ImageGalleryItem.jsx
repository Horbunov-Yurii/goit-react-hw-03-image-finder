export const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,
  tags,
  openModal,
}) => {
  return (
    <li key={id}>
      <img
        loading="lazy"
        src={webformatURL}
        alt={tags}
        width="250px"
        onClick={() => {
          openModal({ src: largeImageURL, alt: tags });
        }}
      />
    </li>
  );
};

