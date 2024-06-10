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

    const lngs = {
        en: { nativeName: "English" },
        de: { nativeName: "Deutsch" },
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
                    <div className="social-icon">
                        {Object.keys(lngs).map((lng) => (
                            <button
                                type="submit"
                                key={lng}
                                onClick={() => i18n.changeLanguage(lng)}
                                disabled={i18n.resolvedLanguage === lng}
                            >
                                {lngs[lng].nativeName}
                            </button>
                        ))}
                    </div>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://github.com/Jakhes">
                                <img src={navIcon1} alt=""></img>
                            </a>
                            <a href="https://www.xing.com/profile/Dean_Schmitz">
                                <img src={navIcon2} alt=""></img>
                            </a>
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
