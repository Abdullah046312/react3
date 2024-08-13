import React from 'react'
import "./fourthpart.css"
import { Row, Col } from 'react-bootstrap'
import images11 from "../../../../src/assets/images11.png"
import images12 from "../../../../src/assets/images12.png"
import images13 from "../../../../src/assets/images13.png"
import images14 from "../../../../src/assets/images14.png"
import images15 from "../../../../src/assets/images15.png"
import images16 from "../../../../src/assets/images16.png"

const Fourthpart = () => {
  return (
   <section id='fourth'>
    <div className="container">
        <Row>
            <Col lg={12}>
            <div className="sixteen">
                <h2>Services We Offer For Agency</h2>
                <p>Best Creative digital Agency</p>
            </div>
            </Col>
        </Row>

        <Row>
            <Col lg={4}>
            <div className="seventeen">
                <img src={images11} alt="" />
                <h4>Business Planning</h4>
                <h3>Email Marketing</h3>

            </div>
            </Col>
            <Col lg={4}>
            <div className="seventeen">
                <img src={images12} alt="" />
                <h4>Market Research</h4>
                <h3>Data Analysis</h3>

            </div>
            </Col>
            <Col lg={4}>
            <div className="seventeen">
                <img src={images13} alt="" />
                <h4>Marketing Strategy</h4>
                <h3>Optimization</h3>

            </div>
            </Col>
            <Col lg={4}>
            <div className="seventeen">
                <img src={images14} alt="" />
                <h4>SEO Optimizations</h4>
                <h3>Pay-par Click</h3>

            </div>
            </Col>
            <Col lg={4}>
            <div className="seventeen">
                <img src={images15} alt="" />
                <h4>Marketing Strategy</h4>
                <h3>Content Writting</h3>

            </div>
            </Col>
            <Col lg={4}>
            <div className="seventeen">
                <img src={images16} alt="" />
                <h4>Market Research</h4>
                <h3>Marketing</h3>

            </div>
            </Col>
        </Row>
    </div>
   </section>
  )
}

export default Fourthpart
