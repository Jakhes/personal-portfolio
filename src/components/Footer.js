import { Col, Container, Row } from "react-bootstrap";
import navIcon1 from "../assets/1221585_github_logo_media_social_icon.svg";
import navIcon2 from "../assets/1221589_logo_media_social_xing_icon.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <h2>Dean Schmitz</h2>
                    </Col>
                    <Col sm={6}>
                        <div className="text-center text-sm-end">
                            <a href="https://github.com/Jakhes">
                                <img src={navIcon1} />
                            </a>
                            <a href="https://www.xing.com/profile/Dean_Schmitz">
                                <img src={navIcon2} />
                            </a>
                        </div>
                        <p>CopyRight 2022. All Right Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
