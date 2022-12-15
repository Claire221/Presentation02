import React from "react"
import ImageGallery from 'react-image-gallery';

import project2Image1 from "../images/project01-01.jpg"
import Image2 from "../images/02.jpg"
import Image3 from "../images/03.jpg"

const images = [
  {
    original: {project2Image1},
    thumbnail: {project2Image1},
  },
  {
    original: {Image2},
    thumbnail: {Image2},
  },
  {
    original: {Image3},
    thumbnail: {Image3},
  },
];

export default function MyGallery() {

    return (
        <section className="image-section">
        <div className="image-col-1">
            <ImageGallery items={images}/>
        </div>
        <div className="image-col-2">
            <h1>Test</h1>
        </div>
        </section>
    );
}