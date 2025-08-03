import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import Masonrya from "react-layout-masonry";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ProjectCard } from "./ProjectCard";

import { useState } from "react";
import { useTranslation } from "react-i18next";

import CloseIcon from "@mui/icons-material/Close";

import projImg4 from "../assets/Projects/MaterialSammlung.png";
import projImg2 from "../assets/Projects/Portfolio_Website.png";
import projImg1 from "../assets/Projects/TodoAppMain.png";

import gameImg1 from "../assets/Projects/MagicMaker.png";
import gameImg2 from "../assets/Projects/MergeKingdom.png";
import gameImg3 from "../assets/Projects/Stacklands_Mod.png";

// Artwork imports
import imageLowRes4 from "../assets/Artworks/Asterix_und_Obelix_LowRes.png";
import imageLowRes9 from "../assets/Artworks/DeckerBraumble_LowRes.png";
import imageLowRes2 from "../assets/Artworks/DuckCapWithBackground_LowRes.png";
import imageLowRes3 from "../assets/Artworks/EldenBling_V_Comp_Petal_LowRes.png";
import imageLowRes5 from "../assets/Artworks/Handy_Huellen_Design_LowRes.png";
import imageLowRes6 from "../assets/Artworks/Handy_Huellen_Design_Orange_LowRes.png";
import imageLowRes10 from "../assets/Artworks/Krakthul_V2_LowRes.png";
import imageLowRes7 from "../assets/Artworks/NiflerKing_LowRes.png";
import imageLowRes8 from "../assets/Artworks/Robot_Char_LowRes.png";
import imageLowRes1 from "../assets/Artworks/SeaTitan_LowRes.png";
import imageLowRes11 from "../assets/Artworks/Smowl_LowRes.png";

import imageHighRes4 from "../assets/Artworks/Asterix_und_Obelix.png";
import imageHighRes9 from "../assets/Artworks/DeckerBraumble.png";
import imageHighRes2 from "../assets/Artworks/DuckCapWithBackground.png";
import imageHighRes3 from "../assets/Artworks/EldenBling_V_Comp_Petal.png";
import imageHighRes5 from "../assets/Artworks/Handy_Huellen_Design.png";
import imageHighRes6 from "../assets/Artworks/Handy_Huellen_Design_Orange.png";
import imageHighRes10 from "../assets/Artworks/Krakthul_V2.png";
import imageHighRes7 from "../assets/Artworks/NiflerKing.png";
import imageHighRes8 from "../assets/Artworks/Robot_Char.png";
import imageHighRes1 from "../assets/Artworks/SeaTitan.png";
import imageHighRes11 from "../assets/Artworks/Smowl.png";

// Miniatures imports
import miniatureImageLowRes3 from "../assets/Miniatures/Angel.jpg";
import miniatureImageLowRes4 from "../assets/Miniatures/Captain_Dark (2).jpg";
import miniatureImageLowRes5 from "../assets/Miniatures/CatNinja_Dark.jpg";
import miniatureImageLowRes6 from "../assets/Miniatures/Dwarf_BearRider_Dark (2).jpg";
import miniatureImageLowRes7 from "../assets/Miniatures/Dwarf_Dark.jpg";
import miniatureImageLowRes8 from "../assets/Miniatures/FacelessQueen_Front.jpg";
import miniatureImageLowRes9 from "../assets/Miniatures/Halfling_Dark.jpg";
import miniatureImageLowRes10 from "../assets/Miniatures/MagmaWarrior.jpg";
import miniatureImageLowRes1 from "../assets/Miniatures/Malenia_Front_Dark.jpg";
import miniatureImageLowRes11 from "../assets/Miniatures/Owl_Dark.jpg";
import miniatureImageLowRes2 from "../assets/Miniatures/Paladin.jpg";
import miniatureImageLowRes12 from "../assets/Miniatures/Pirate_Dark.jpg";
import miniatureImageLowRes13 from "../assets/Miniatures/TurtleDruid_Dark.jpg";
import miniatureImageLowRes14 from "../assets/Miniatures/Wizard_Dark.jpg";
import miniatureImageLowRes15 from "../assets/Miniatures/Woelfe.jpg";

export const Projects = () => {
    const { t } = useTranslation();

    const projects = [
        {
            title: "Todo App",
            description: "todoDesc",
            imgUrl: projImg1,
            tags: ["Angular", "Spring-boot", "PostgreSQL"],
            reproUrl: "https://github.com/Jakhes/AngularFrontend_TodoApp",
            demoUrl: "https://todo-kraken.netlify.app/todo",
        },
        {
            title: t("portfolioTitle"),
            description: "portfolioDesc",
            imgUrl: projImg2,
            tags: ["React", "HTML", "CSS", "JS", "Bootstrap"],
            reproUrl: "https://github.com/Jakhes/personal-portfolio",
            demoUrl: "https://deanschmitz.com",
        },
        {
            title: t("materialTitle"),
            description: "materialDesc",
            imgUrl: projImg4,
            tags: ["Java", "Spring-boot", "MySQL", "Bootstrap", "Docker"],
            reproUrl:
                "https://github.com/hhu-propra2-2019/abschlussprojekt-team-git-gud",
            demoUrl: "",
        },
    ];

    const games = [
        {
            title: "Magic Maker",
            description: "magicDesc",
            imgUrl: gameImg1,
            tags: ["unity", "C#"],
            reproUrl: "",
            demoUrl: "",
        },
        {
            title: "Merge Kingdom",
            description: "mergeDesc",
            imgUrl: gameImg2,
            tags: ["unity", "C#"],
            reproUrl: "https://github.com/Jakhes/MergeKIngdom",
            demoUrl: "",
        },
        {
            title: "Stacklands Search Mod",
            description: "stackDesc",
            imgUrl: gameImg3,
            tags: ["modding kit", "C#", "python"],
            reproUrl: "https://github.com/Jakhes/extra_search_mod",
            demoUrl: "",
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
        {
            id: 10,
            lowResImgUrl: imageLowRes10,
            highResImgUrl: imageHighRes10,
        },
        {
            id: 11,
            lowResImgUrl: imageLowRes11,
            highResImgUrl: imageHighRes11,
        },
    ];

    const miniArray = [
        {
            id: 1,
            lowResImgUrl: miniatureImageLowRes1,
            highResImgUrl: miniatureImageLowRes1,
        },
        {
            id: 2,
            lowResImgUrl: miniatureImageLowRes2,
            highResImgUrl: miniatureImageLowRes2,
        },
        {
            id: 3,
            lowResImgUrl: miniatureImageLowRes3,
            highResImgUrl: miniatureImageLowRes3,
        },
        {
            id: 4,
            lowResImgUrl: miniatureImageLowRes4,
            highResImgUrl: miniatureImageLowRes4,
        },
        {
            id: 5,
            lowResImgUrl: miniatureImageLowRes5,
            highResImgUrl: miniatureImageLowRes5,
        },
        {
            id: 6,
            lowResImgUrl: miniatureImageLowRes6,
            highResImgUrl: miniatureImageLowRes6,
        },
        {
            id: 7,
            lowResImgUrl: miniatureImageLowRes7,
            highResImgUrl: miniatureImageLowRes7,
        },
        {
            id: 8,
            lowResImgUrl: miniatureImageLowRes8,
            highResImgUrl: miniatureImageLowRes8,
        },
        {
            id: 9,
            lowResImgUrl: miniatureImageLowRes9,
            highResImgUrl: miniatureImageLowRes9,
        },
        {
            id: 10,
            lowResImgUrl: miniatureImageLowRes10,
            highResImgUrl: miniatureImageLowRes10,
        },
        {
            id: 11,
            lowResImgUrl: miniatureImageLowRes11,
            highResImgUrl: miniatureImageLowRes11,
        },
        {
            id: 12,
            lowResImgUrl: miniatureImageLowRes12,
            highResImgUrl: miniatureImageLowRes12,
        },
        {
            id: 13,
            lowResImgUrl: miniatureImageLowRes13,
            highResImgUrl: miniatureImageLowRes13,
        },
        {
            id: 14,
            lowResImgUrl: miniatureImageLowRes14,
            highResImgUrl: miniatureImageLowRes14,
        },
        {
            id: 15,
            lowResImgUrl: miniatureImageLowRes15,
            highResImgUrl: miniatureImageLowRes15,
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
                                <Nav.Item>
                                    <Nav.Link eventKey="forth">
                                        {t("tab4")}
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
                                <Tab.Pane eventKey="forth">
                                    <ResponsiveMasonry
                                        columnsCountBreakPoints={{
                                            350: 1,
                                            750: 2,
                                            900: 3,
                                            1100: 4,
                                        }}
                                    >
                                        <Masonry gutter="20px">
                                            {miniArray.map((image, i) => (
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
