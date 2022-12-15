import React from "react"
import ImageGallery from 'react-image-gallery';
import { motion } from 'framer-motion';
import ListGroup from 'react-bootstrap/ListGroup';

const images = [
  {
    original: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/language02-01.jpg?raw=true",
    thumbnail: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/language02-01.jpg?raw=true",
  },
  {
    original: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/language02-03.jpg?raw=true",
    thumbnail: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/language02-03.jpg?raw=true",
  },
  {
    original: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/language02-02..jpg?raw=true",
    thumbnail: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/language02-02..jpg?raw=true",
  },
  {
    original: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/language02-04.jpg?raw=true",
    thumbnail: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/language02-04.jpg?raw=true",
  },
  {
    original: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/language02-05.jpg?raw=true",
    thumbnail: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/language02-05.jpg?raw=true",
  },
  {
    original: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/language02-06..jpg?raw=true",
    thumbnail: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/language02-06.jpg?raw=true",
  }
];

export default function Jinja() {

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
                            <h2 className="section-title">Jinja</h2>
                            <div className="content-div">
                                <div className="section-col-1">
                                    <ImageGallery items={images}/>
                                </div>
                                <div className="section-col-2">
                                    <p className="section-sub-title">Features</p>
                                        <ListGroup>
                                        <ListGroup.Item>url_for</ListGroup.Item>
                                        <ListGroup.Item>url_for parameters</ListGroup.Item>
                                        <ListGroup.Item>For loops</ListGroup.Item>
                                        <ListGroup.Item>Conditionals</ListGroup.Item>
                                        <ListGroup.Item>Messages</ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </div>
                </motion.div>

        
    );
}