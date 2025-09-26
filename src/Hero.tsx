// import Banner from "./assets/Screenshot 2025-08-28 124209.png"
import { Row } from "react-bootstrap"
import Banner from "./assets/1.png"


function Hero() {

  return (
    <Row className="gutter">

       <img src={Banner} className="banner-img"/>

    </Row>
  )
}

export default Hero
