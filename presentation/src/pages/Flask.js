import React from "react"
import ImageGallery from 'react-image-gallery';
import { motion } from 'framer-motion';
import ListGroup from 'react-bootstrap/ListGroup';


const images = [
  {
    original: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/project01-01.jpg?raw=true",
    thumbnail: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/project01-01.jpg?raw=true",
  },
  {
    original: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/project01-02.jpg?raw=true",
    thumbnail: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/project01-02.jpg?raw=true",
  },
  {
    original: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/project01-03.jpg?raw=true",
    thumbnail: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/project01-03.jpg?raw=true",
  },
  {
    original: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/project01-04.jpg?raw=true",
    thumbnail: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/project01-04.jpg?raw=true",
  },
  {
    original: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/project01-05.jpg?raw=true",
    thumbnail: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/project01-05.jpg?raw=true",
  },
  {
    original: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/project01-09.jpg?raw=true",
    thumbnail: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/project01-09.jpg?raw=true",
  },
  {
    original: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/project01-08.jpg?raw=true",
    thumbnail: "https://github.com/Claire221/Presentation02/blob/main/presentation/src/images/project01-08.jpg?raw=true",
  },
];

export default function Flask() {

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
                            <h2 className="section-title">Flask</h2>
                            <div className="content-div">
                              <div className="section-col-1">
                                  <ImageGallery items={images}/>
                              </div>
                              <div className="section-col-2">
                                  <p className="section-sub-title">Features</p>
                                  <ListGroup>
                                    <ListGroup.Item>Flash Message</ListGroup.Item>
                                    <ListGroup.Item>Render Template</ListGroup.Item>
                                    <ListGroup.Item>Request</ListGroup.Item>
                                    <ListGroup.Item>session_user</ListGroup.Item>
                                    <ListGroup.Item>url_for</ListGroup.Item>
                                  </ListGroup>
                                  <div>
                                    <a href="https://bookmarked-app.herokuapp.com/" className="link">Live Site</a>
                                    <a href="https://github.com/Claire221/bookmarked" className="link">Github</a> 
                                  </div>
                              </div>
                            </div>
                </motion.div>
      
        
    );
}