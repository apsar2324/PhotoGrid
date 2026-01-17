export default function ImageContainer({ photos = [] }) {
  return (
    <section className="image">
      <div className="images">
        {photos.map((photo) => (
          <img
            className="img"
            loading="lazy"
            src={photo.src.small}
            alt={photo.alt}
            key={photo.id}
          />
        ))}{" "}
      </div>{" "}
      <p>Made with Love</p>
    </section>
  );
}
