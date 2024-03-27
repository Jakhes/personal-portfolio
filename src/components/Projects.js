import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { MasonryView } from "react-masonry-view";
import "react-masonry-view/dist/index.css";
import projImg1 from "../assets/Kilian Eng-159.jpg";

// Artwork imports
import image1 from "../assets/Artworks/DeckerBraumble.png";
import image2 from "../assets/Artworks/DuckCapWithBackground.png";
import image3 from "../assets/Artworks/EldenBling_V_Comp_Petal.png";
import image4 from "../assets/Artworks/Asterix_und_Obelix.png";
import image5 from "../assets/Artworks/Handy_Huellen_Design.png";
import image6 from "../assets/Artworks/Handy_Huellen_Design_Orange.png";
import image7 from "../assets/Artworks/NiflerKing.png";

export const Projects = () => {
    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
    ];

    const imgArray = [
        {
            id: 1,
            imgUrl: image1,
        },
        {
            id: 2,
            imgUrl: image2,
        },
        {
            id: 3,
            imgUrl: image3,
        },
        {
            id: 4,
            imgUrl: image4,
        },
        {
            id: 5,
            imgUrl: image5,
        },
        {
            id: 6,
            imgUrl: image6,
        },
        {
            id: 7,
            imgUrl: image7,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>
                            My various projects in programming and some from my
                            hobbies.
                        </p>
                        <Tab.Container
                            id="projects-tabs"
                            defaultActiveKey="first"
                        >
                            <Nav
                                variant="pills"
                                className="nav-pills mb-5 justify-content-center align-items-center"
                                id="pills-tab"
                            >
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Coding</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Games</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Art</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            );
                                        })}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {projects.map((project, index) => {
                                            return <p>{project.title}</p>;
                                        })}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <MasonryView imgDetails={imgArray} />
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
