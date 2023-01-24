import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

export default function ImageGallery(props) {
  const [index, setIndex] = useState(-1);

  return (  
    <div className="div">
      <div className="image-gallery three-cols-gallery">
        {props?.images?.map((img, index) => (
          <div
            className="gallery-item"
            data-see-more="Ver más +"
            onClick={() => setIndex(index)}
          >
            <img src={img.src} alt={img.title} className="gallery-item-image" />
          </div>
        ))}
      </div>
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        carousel={2}
        slides={props.images}
        slideshow={{delay: 3000 }}
        plugins={[Thumbnails, Zoom, Fullscreen, Slideshow, Captions]}
        zoom={{
          maxZoomPixelRatio: 3,
        }}
      />
    </div>
  );
}
