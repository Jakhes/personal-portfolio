import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, tags, reproUrl }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-container">
                <img src={imgUrl} />
                <h3>{title}</h3>
                <p>{description}</p>
                <ul>
                    {tags.map((tag, index) => {
                        return <li key={index}>{tag}</li>;
                    })}
                </ul>
                <div>
                    <a href={reproUrl}>Repro Source</a>
                </div>
            </div>
        </Col>
    );
};
