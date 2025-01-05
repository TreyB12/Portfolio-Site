const Card = ({ image, title, text }) => (
    <div className="card">
        <img className="card-image "src={image} alt={title} />
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{text}</p>
    </div>
)

export default function Projects () {
const projectsData = [
    {
        image: "https://via.placeholder.com/200",
        title: "Investment Calculator",
        text: "Description of Project 1"
    },
    {
        image: "https://via.placeholder.com/200",
        title: "Timer",
        text: "Description of Project 2"
    },
    {
        image: "https://via.placeholder.com/200",
        title: "Chef Claude",
        text: "Description of project 3",
    },
    {
        image: "https://via.placeholder.com/200",
        title: "Insurance Home Page",
        text: "Description of project 4"
    },
    {
        image: "https://via.placeholder.com/200",
        title: "Portfolio Website",
        text: "Description of project 5"
    }

]



    return (
        <>
        <header className="project-header">
            <h1 id="project-header-text">Projects</h1>
        </header>

        <div className="projects-container">
            {projectsData.map((project, index) => (
                <Card
                key={index}
                image={project.image}
                title={project.title}
                text={project.text}
                />
            ))}
           
        </div>

        
        
        </>
    )
}