import React from 'react'
import "./seventhpart.css"
import { Col, Row } from 'react-bootstrap'
import images18 from "../../../../src/assets/images18.png"
import images19 from "../../../../src/assets/images19.png"

const Seventhpart = () => {
  return (
    <section id='seventh'>
        <div className="container">
            <Row>
                <Col lg={3}>
                <div className="twenty_three">
                    <h4>Lets talk</h4>
                    <h2>Got a project?</h2>
                </div>
                </Col>
                <Col lg={{span:2, offset:7}}>
                <div className="twenty_four">
                    <button>Contact us</button>
                </div>
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
                <div className="twenty_five">
                    <img src={images18} alt="" />
                    <p>As a leading digital platform in Paris, we look to engage with our clients beyond the conventional design and development agency relationship, becoming a partner to the people and companies we work with.</p>
                    <div className="twenty_six">
                        <img src={images19} alt="" />
                    </div>

                </div>
                </Col>
            </Row>
        </div>

    </section>
  )
}

export default Seventhpart
