import React from "react"
import ImageGallery from 'react-image-gallery';
import { motion } from 'framer-motion';


const images = [
  {
    original: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/language03-01.jpg?raw=true",
    thumbnail: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/language03-01.jpg?raw=true",
  },
  {
    original: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/language03-02.jpg?raw=true",
    thumbnail: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/language03-02.jpg?raw=true",
  },
  {
    original: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/language03-03.jpg?raw=true",
    thumbnail: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/language03-03.jpg?raw=true",
  },
  {
    original: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/language03-04.jpg?raw=true",
    thumbnail: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/language03-04.jpg?raw=true",
  },
  {
    original: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/language03-05.jpg?raw=true",
    thumbnail: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/language03-05.jpg?raw=true",
  },
  {
    original: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/language03-06.jpg?raw=true",
    thumbnail: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/language03-06.jpg?raw=true",
  }
];

export default function Django() {

    return (
        <section className="image-section">
            <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ ease: "easeOut", duration: 0.6 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 } }}
                        className="">
                        <div className="image-col-1">
                            <h1>Flask</h1>
                        </div>
                        <div className="image-col-2">
                            <ImageGallery items={images}/>
                        </div>
                </motion.div>
        </section>
        
    );
}