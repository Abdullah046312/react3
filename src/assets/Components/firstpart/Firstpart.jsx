import React from 'react'
import "./firstpart.css"
import { Row, Col } from 'react-bootstrap'
import images from "../../../../src/assets/images.png"
import images1 from "../../../../src/assets/images1.png"
import images2 from "../../../../src/assets/images2.png"
import images3 from "../../../../src/assets/images3.png"

const Firstpart = () => {
  return (
    <section id='one'>
      <div className="container">
        <Row>
          <Col lg={{span:6, offset:3}}>
          <div className="one_main">
            <h4><a href="#">Home <i class="fa-solid fa-chevron-right"></i> Service</a></h4>
            <h2>What service we provide</h2>
            <p>With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand, connect, represent and dominate your market.</p>
            <div className="two">
            <img src={images} alt="" />
            </div>
            <div className="three">
              <img src={images1} alt="" />
            </div>
            <div className="four">
              <img src={images2} alt="" />
            </div>
            
            <div className="five">
              <img src={images3} alt="" />
            </div>
            

          </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Firstpart
