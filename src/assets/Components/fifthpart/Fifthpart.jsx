import React from 'react'
import "./fifthpart.css"
import { Col,Row } from 'react-bootstrap'
import images17 from "../../../../src/assets/images17.png"
const Fifthpart = () => {
  return (
    <section id='Fifth'>
        <div className="container">
            <Row>
                <Col lg={6}>
                <Row>
                    <Col lg={6}>
                    <div className="eightten">
                    <h2>19+</h2>
                    <p>Total top service</p>
                    </div>
                    
                    </Col>
                    <Col lg={6}>
                    <div className="eightten">
                    <h2>27+</h2>
                    <p>Total top service</p>
                    </div>
                    
                    </Col>
                    <Col lg={6}>
                    <div className="eightten">
                    <h2>98%</h2>
                    <p>Total top service</p>
                    </div>
                    
                    </Col>
                    <Col lg={6}>
                    <div className="eightten">
                    <h2>1,458+</h2>
                    <p>Usual users</p>
                    </div>
                    
                    </Col>
                </Row>
              
                </Col>

                <Col lg={{span:5, offset:1}}>
                <div className="nineteen">
                    <h2>The hundred of completed works still counting</h2>
                    <p>Through strategy, design, and planning we build brand identities that connect with your Nesi. We then fine-tune a marketing plan that allows us to laser focus and target your audience through the right channels.</p>
                    <button>More about us</button>
                    <div className="twenty">
                        <img src={images17} alt="" />
                    </div>
                </div>
                </Col>
            </Row>
        </div>
    </section>
  )
}

export default Fifthpart
