import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import csharp from "../assets/skills/pngegg.png";
import java from "../assets/skills/4519129_java_icon.svg";
import python from "../assets/skills/4518857_python_icon.png";
import html from "../assets/skills/317755_badge_html_html5_achievement_award_icon.png";
import css from "../assets/skills/317756_badge_css_css3_achievement_award_icon.png";
import react from "../assets/skills/1174949_js_react js_logo_react_react native_icon.png";
import sql from "../assets/skills/259317_copy_database_instance_ms_rds_icon.png";
import springboot from "../assets/skills/Spring_Boot.svg";
import softdev from "../assets/skills/software-development.png";
import fulldev from "../assets/skills/5355692_code_coding_development_programming_web_icon.png";
import gamedev from "../assets/skills/532728_configuration_development_game development_gamepad_gear_icon.png";

import vscode from "../assets/skills/1082429_code_editor_microsoft_programming_visual_icon.png";
import git from "../assets/skills/2993773_git_social media_icon.svg";
import docker from "../assets/skills/4519035_docker_icon.svg";
import unity from "../assets/skills/1082443_unity2d_unity_unity3d_logo_game engine_icon.png";
import unreal from "../assets/skills/1082433_engine_epic games_game engine_programming_unreal_icon.png";
import android from "../assets/skills/1082432_android_computer_mobile_operating system_os_icon.png";

export const Skills = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    };

    const skills = [
        {
            title: "C#",
            imageSrc: csharp,
        },
        {
            title: "Java",
            imageSrc: java,
        },
        {
            title: "Python",
            imageSrc: python,
        },
        {
            title: "Html",
            imageSrc: html,
        },
        {
            title: "CSS",
            imageSrc: css,
        },
        {
            title: "React",
            imageSrc: react,
        },
        {
            title: "SQL",
            imageSrc: sql,
        },
        {
            title: "Springboot",
            imageSrc: springboot,
        },
        {
            title: "Software Development",
            imageSrc: softdev,
        },
        {
            title: "Fullstack Development",
            imageSrc: fulldev,
        },
        {
            title: "Game Development",
            imageSrc: gamedev,
        },
    ];

    const tools = [
        {
            title: "VS Code",
            imageSrc: vscode,
        },
        {
            title: "Git/Github",
            imageSrc: git,
        },
        {
            title: "Docker",
            imageSrc: docker,
        },
        {
            title: "Unity",
            imageSrc: unity,
        },
        {
            title: "Unreal",
            imageSrc: unreal,
        },
        {
            title: "Android Studio",
            imageSrc: android,
        },
    ];

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>My software experiences</p>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                showDots={true}
                                dotListClass="custom-dot-list-style"
                                className="skill-slider"
                            >
                                {skills.map((skill, index) => {
                                    return (
                                        <div key={index} className="item">
                                            <img
                                                src={skill.imageSrc}
                                                alt="Image"
                                            />
                                            <h5>{skill.title}</h5>
                                        </div>
                                    );
                                })}
                            </Carousel>
                            <p>My tool experiences</p>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                showDots={true}
                                dotListClass="custom-dot-list-style"
                                className="skill-slider"
                            >
                                {tools.map((tool, index) => {
                                    return (
                                        <div key={index} className="item">
                                            <img
                                                src={tool.imageSrc}
                                                alt="Image"
                                            />
                                            <h5>{tool.title}</h5>
                                        </div>
                                    );
                                })}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
