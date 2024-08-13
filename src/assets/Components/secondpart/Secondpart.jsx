import React from 'react'
import "./secondpart.css"
import { Row, Col } from 'react-bootstrap'
import images4 from "../../../../src/assets/images4.png"
import images5 from "../../../../src/assets/images5.png"
import images6 from "../../../../src/assets/images6.png"
import images7 from "../../../../src/assets/images7.png"

const Secondpart = () => {
  return (
    <section id='second'>
        <div className="container">
            <Row>
                <Col lg={12}>
                <div className="six_main">
                    <h2>Working Process</h2>
                    <p>Best Creative digital Agency</p>
                </div>
                </Col>
            </Row>

            <Row>
                <Col lg={4}>
                <div className="seven">
                   <img src={images4} alt="" /> 
                   <h2>Welcome To Innovate</h2>
                   <div className="eight">
                    <img src={images5} alt="" />
                   </div>
                </div>
                </Col>
                <Col lg={4}>
                <div className="seven">
                   <img src={images4} alt="" /> 
                   <h2>Choose Your Services</h2>
                   <div className="nine">
                    <img src={images6} alt="" />
                   </div>
                </div>
                </Col>
                <Col lg={4}>
                <div className="seven">
                   <img src={images4} alt="" /> 
                   <h2>Choose Final Results</h2>
                   <div className="ten">
                    <img src={images7} alt="" />
                   </div>
                </div>
                </Col>
            </Row>
        </div>
    </section>
  )
}

export default Secondpart
