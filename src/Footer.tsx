import { Col, Row } from "react-bootstrap"
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className="footer py-3" id="footer">
          <Row className="justify-content-center">
            <Col className="">
                <Link target="blank" to="https:www.facebook.com/profile.php?id=61578566023548"><i className="fa-brands fa-facebook"></i></Link>
                <Link target="blank" to="https://www.instagram.com/babyclub.eg/"><i className="fa-brands fa-instagram"></i></Link>
                <Link target="blank" to="https://www.amazon.eg/-/en/stores/BabyClub/page/91974AFF-5314-4D59-8F35-81A8FA2E4CA5?lp_asin=B0FRXZ5TDW&ref_=ast_bln"><i className="fa-brands fa-amazon"></i></Link>
            </Col>
          </Row>
      </footer>
    </>
  )
}

export default Footer