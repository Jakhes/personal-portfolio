import { Col, Container, Row } from "react-bootstrap";
import navIcon1 from "../assets/compass.png";
import navIcon2 from "../assets/ruby.png";
import navIcon3 from "../assets/treasure-chest.png";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={navIcon1} alt="Logo" />
                    </Col>
                    <Col sm={6}>
                        <div className="text-center text-sm-end">
                            <a href="">
                                <img src={navIcon1} />
                            </a>
                            <a href="">
                                <img src={navIcon2} />
                            </a>
                            <a href="">
                                <img src={navIcon3} />
                            </a>
                        </div>
                        <p>CopyRight 2022. All Right Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
