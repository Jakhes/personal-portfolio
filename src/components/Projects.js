import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Masonrya from "react-layout-masonry";

import { useTranslation } from "react-i18next";
import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";

import projImg1 from "../assets/Projects/TodoApp.png";
import projImg2 from "../assets/Projects/Portfolio_Website.png";
import projImg3 from "../assets/Projects/ItemBox.png";
import projImg4 from "../assets/Projects/MaterialSammlung.png";

import gameImg1 from "../assets/Projects/MagicMaker.png";
import gameImg2 from "../assets/Projects/MergeKingdom.png";
import gameImg3 from "../assets/Projects/Stacklands_Mod.png";

// Artwork imports
import imageLowRes1 from "../assets/Artworks/SeaTitan_LowRes.png";
import imageLowRes2 from "../assets/Artworks/DuckCapWithBackground_LowRes.png";
import imageLowRes3 from "../assets/Artworks/EldenBling_V_Comp_Petal_LowRes.png";
import imageLowRes4 from "../assets/Artworks/Asterix_und_Obelix_LowRes.png";
import imageLowRes5 from "../assets/Artworks/Handy_Huellen_Design_LowRes.png";
import imageLowRes6 from "../assets/Artworks/Handy_Huellen_Design_Orange_LowRes.png";
import imageLowRes7 from "../assets/Artworks/NiflerKing_LowRes.png";
import imageLowRes8 from "../assets/Artworks/Robot_Char_LowRes.png";
import imageLowRes9 from "../assets/Artworks/DeckerBraumble_LowRes.png";

import imageHighRes1 from "../assets/Artworks/SeaTitan.png";
import imageHighRes2 from "../assets/Artworks/DuckCapWithBackground.png";
import imageHighRes3 from "../assets/Artworks/EldenBling_V_Comp_Petal.png";
import imageHighRes4 from "../assets/Artworks/Asterix_und_Obelix.png";
import imageHighRes5 from "../assets/Artworks/Handy_Huellen_Design.png";
import imageHighRes6 from "../assets/Artworks/Handy_Huellen_Design_Orange.png";
import imageHighRes7 from "../assets/Artworks/NiflerKing.png";
import imageHighRes8 from "../assets/Artworks/Robot_Char.png";
import imageHighRes9 from "../assets/Artworks/DeckerBraumble.png";

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
            lowResImgUrl: imageLowRes1,
            highResImgUrl: imageHighRes1,
        },
        {
            id: 2,
            lowResImgUrl: imageLowRes2,
            highResImgUrl: imageHighRes2,
        },
        {
            id: 3,
            lowResImgUrl: imageLowRes3,
            highResImgUrl: imageHighRes3,
        },
        {
            id: 4,
            lowResImgUrl: imageLowRes4,
            highResImgUrl: imageHighRes4,
        },
        {
            id: 5,
            lowResImgUrl: imageLowRes5,
            highResImgUrl: imageHighRes5,
        },
        {
            id: 6,
            lowResImgUrl: imageLowRes6,
            highResImgUrl: imageHighRes6,
        },
        {
            id: 7,
            lowResImgUrl: imageLowRes7,
            highResImgUrl: imageHighRes7,
        },
        {
            id: 8,
            lowResImgUrl: imageLowRes8,
            highResImgUrl: imageHighRes8,
        },
        {
            id: 9,
            lowResImgUrl: imageLowRes9,
            highResImgUrl: imageHighRes9,
        },
    ];

    const [imgData, setImgData] = useState({ img: "", i: 0 });

    const viewImage = (img, i) => {
        setImgData({ img, i });
    };

    return (
        <section className="project" id="projects">
            {imgData.img && (
                <div className="img-viewer">
                    <button
                        onClick={() => {
                            viewImage("", 0);
                        }}
                    >
                        <CloseIcon />
                    </button>
                    <img loading="lazy" onLoadEnd="" src={imgData.img} />
                </div>
            )}
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
                                    <Masonrya
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
                                    </Masonrya>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Masonrya
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
                                    </Masonrya>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <ResponsiveMasonry
                                        columnsCountBreakPoints={{
                                            350: 1,
                                            750: 2,
                                            900: 3,
                                            1100: 4,
                                        }}
                                    >
                                        <Masonry gutter="20px">
                                            {imgArray.map((image, i) => (
                                                <img
                                                    className="mason-img"
                                                    key={i}
                                                    src={image.lowResImgUrl}
                                                    loading="lazy"
                                                    alt=""
                                                    onClick={() =>
                                                        viewImage(
                                                            image.highResImgUrl,
                                                            i
                                                        )
                                                    }
                                                />
                                            ))}
                                        </Masonry>
                                    </ResponsiveMasonry>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
