import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/Logo.png";
import navIcon1 from "../assets/1221585_github_logo_media_social_icon.svg";
import navIcon2 from "../assets/1221589_logo_media_social_xing_icon.svg";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    const { t } = useTranslation();

    const [selectedLang, setSelectedLang] = useState("EN");
    const lngs = {
        en: { nativeName: "EN" },
        de: { nativeName: "DE" },
    };

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            href="#home"
                            className={
                                activeLink === "home"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => onUpdateActiveLink("home")}
                        >
                            {t("home")}
                        </Nav.Link>
                        <Nav.Link
                            href="#skills"
                            className={
                                activeLink === "skills"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => onUpdateActiveLink("skills")}
                        >
                            {t("skills")}
                        </Nav.Link>
                        <Nav.Link
                            href="#projects"
                            className={
                                activeLink === "projects"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => onUpdateActiveLink("projects")}
                        >
                            {t("projects")}
                        </Nav.Link>
                    </Nav>

                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://github.com/Jakhes">
                                <img src={navIcon1} alt=""></img>
                            </a>
                            <a href="https://www.xing.com/profile/Dean_Schmitz">
                                <img src={navIcon2} alt=""></img>
                            </a>
                        </div>

                        <div class="lang-menu">
                            <div
                                className={
                                    i18n.resolvedLanguage === "en"
                                        ? "selected-lang-en"
                                        : "selected-lang-de"
                                }
                            >
                                {selectedLang}
                            </div>
                            <ul>
                                <li>
                                    <a
                                        class="de"
                                        onClick={() => {
                                            i18n.changeLanguage("de");
                                            setSelectedLang(
                                                lngs["de"].nativeName
                                            );
                                        }}
                                    >
                                        {lngs["de"].nativeName}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="en"
                                        onClick={() => {
                                            i18n.changeLanguage("en");
                                            setSelectedLang(
                                                lngs["en"].nativeName
                                            );
                                        }}
                                    >
                                        {lngs["en"].nativeName}
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="vvd">
                            <a href="mailto:dean.schmitz@schmitzbauer.de">
                                {t("connectNav")}
                            </a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
