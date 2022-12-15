import React from "react"
import ImageGallery from 'react-image-gallery';
import { motion } from 'framer-motion';
import ListGroup from 'react-bootstrap/ListGroup';

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

            <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ ease: "easeOut", duration: 0.6 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 } }}
                        className="section-div">
                        <h2 className="section-title">Django</h2>
                        <div className="content-div">
                            <div className="section-col-1">
                                <ImageGallery items={images}/>
                            </div>
                            <div className="section-col-2">
                                <p className="section-sub-title">Features</p>
                                <ListGroup>
                                    <ListGroup.Item>Render</ListGroup.Item>
                                    <ListGroup.Item>Redirect</ListGroup.Item>
                                    <ListGroup.Item>Reverse</ListGroup.Item>
                                    <ListGroup.Item>get_object_or_404</ListGroup.Item>
                                    <ListGroup.Item>HttpResponse</ListGroup.Item>
                                    <ListGroup.Item>form</ListGroup.Item>
                                </ListGroup>
                            </div>
                        </div>
                </motion.div>

    );
}