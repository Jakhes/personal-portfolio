import { Col, Container, Row } from "react-bootstrap";
import navIcon1 from "../assets/1221585_github_logo_media_social_icon.svg";
import navIcon2 from "../assets/1221589_logo_media_social_xing_icon.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <h5>Created by Dean Schmitz 2024</h5>
                        <h5>
                            Based on the{" "}
                            <a href="https://youtu.be/hYv6BM2fWd8?si=_il1mbu-kqW6ftoU">
                                Project
                            </a>{" "}
                            by webdecoded
                        </h5>
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
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
