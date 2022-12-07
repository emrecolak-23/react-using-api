import './ImageList.css';
import ImageShow from './ImageShow';

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow image={image} key={image.id} />;
  });

  return (
    <div>
      Image List: {images.length}
      <div className="image-list">{renderedImages}</div>
    </div>
  );
}

export default ImageList;
