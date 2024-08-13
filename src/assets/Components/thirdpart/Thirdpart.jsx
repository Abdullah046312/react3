import React from 'react'
import "./thirdpart.css"
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import images8 from "../../../../src/assets/images8.png" 
import images9 from "../../../../src/assets/images9.png" 
import images10 from "../../../../src/assets/images10.png" 

const Thirdpart = () => {
  return (
    <section id='third'>
        <div className="container">
            <Row>
                <Col lg={6}>
                <div className="eleven">
                    <h2>25 Years Of Experience We Provide Solutions</h2>
                </div>

                <div className="twelve">
                    <h4>Professional Agency</h4>
                    <p>If you'd like to know how we can tap into your brand's potential, contact us to learn more about our services.</p>
                    <div className="thirteen">
                        <img src={images8} alt="" />
                    </div>

                </div>
                <div className="twelve">
                    <h4>Professional Agency</h4>
                    <p>If you'd like to know how we can tap into your brand's potential, contact us to learn more about our services.</p>
                    <div className="thirteen">
                        <img src={images9} alt="" />
                    </div>

                </div>
                <div className="fiveteen">
                <button>More about us</button>
                </div>
                </Col>
                <Col lg={{span:5, offset:1}}>
                <div className="fourteen">
                    <img src={images10} alt="" />
                </div>
                </Col>
            </Row>
        </div>
    </section>
  )
}

export default Thirdpart
