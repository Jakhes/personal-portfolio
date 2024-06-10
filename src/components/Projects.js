import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { MasonryView } from "react-masonry-view";
import Masonry from "react-layout-masonry";
import "react-masonry-view/dist/index.css";

import { useTranslation } from "react-i18next";

import projImg1 from "../assets/Projects/TodoApp.png";
import projImg2 from "../assets/Projects/Portfolio_Website.png";
import projImg3 from "../assets/Projects/ItemBox.png";
import projImg4 from "../assets/Projects/MaterialSammlung.png";

import gameImg1 from "../assets/Projects/MagicMaker.png";
import gameImg2 from "../assets/Projects/MergeKingdom.png";
import gameImg3 from "../assets/Projects/Stacklands_Mod.png";

// Artwork imports
import image1 from "../assets/Artworks/SeaTitan.png";
import image2 from "../assets/Artworks/DuckCapWithBackground.png";
import image3 from "../assets/Artworks/EldenBling_V_Comp_Petal.png";
import image4 from "../assets/Artworks/Asterix_und_Obelix.png";
import image5 from "../assets/Artworks/Handy_Huellen_Design.png";
import image6 from "../assets/Artworks/Handy_Huellen_Design_Orange.png";
import image7 from "../assets/Artworks/NiflerKing.png";
import image8 from "../assets/Artworks/Robot_Char.png";
import image9 from "../assets/Artworks/DeckerBraumble.png";

export const Projects = () => {
    const { t } = useTranslation();

    const projects = [
        {
            title: "Todo App",
            description: "todoDesc",
            imgUrl: projImg1,
            tags: ["Kotlin", "Compose", "Local Database"],
            reproUrl: "https://github.com/Jakhes/TodoApp",
        },
        {
            title: t("portfolioTitle"),
            description: "portfolioDesc",
            imgUrl: projImg2,
            tags: ["React", "HTML", "CSS", "JS", "Bootstrap"],
            reproUrl: "https://github.com/Jakhes/personal-portfolio",
        },
        {
            title: t("materialTitle"),
            description: "materialDesc",
            imgUrl: projImg4,
            tags: ["Java", "Springboot", "MySQL", "Bootstrap", "Docker"],
            reproUrl:
                "https://github.com/hhu-propra2-2019/abschlussprojekt-team-git-gud",
        },
    ];

    const games = [
        {
            title: "Magic Maker",
            description: "magicDesc",
            imgUrl: gameImg1,
            tags: ["unity", "C#"],
            reproUrl: "https://github.com/Jakhes/TodoApp",
        },
        {
            title: "Merge Kingdom",
            description: "mergeDesc",
            imgUrl: gameImg2,
            tags: ["unity", "C#"],
            reproUrl: "https://github.com/Jakhes/MergeKIngdom",
        },
        {
            title: "Stacklands Search Mod",
            description: "stackDesc",
            imgUrl: gameImg3,
            tags: ["modding kit", "C#", "python"],
            reproUrl: "https://github.com/Jakhes/extra_search_mod",
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
        {
            id: 8,
            imgUrl: image8,
        },
        {
            id: 9,
            imgUrl: image9,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>{t("projectsTitle")}</h2>
                        <p>{t("projectsDesc")}</p>
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
                                    <Nav.Link eventKey="first">
                                        {t("tab1")}
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        {t("tab2")}
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        {t("tab3")}
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Masonry
                                        columns={{
                                            900: 1,
                                            1000: 2,
                                            1500: 3,
                                        }}
                                        gap={16}
                                    >
                                        {projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            );
                                        })}
                                    </Masonry>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Masonry
                                        columns={{
                                            900: 1,
                                            1000: 2,
                                            1500: 3,
                                        }}
                                        gap={16}
                                    >
                                        {games.map((game, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...game}
                                                />
                                            );
                                        })}
                                    </Masonry>
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
