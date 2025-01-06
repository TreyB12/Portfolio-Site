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
        text: "Track your wealth's exponential growth with this investment calculator. Input your initial investment, contribution frequency, additional deposits, expected returns, and time horizon to see your future portfolio value calculated to the penny."
    },
    {
        image: "https://via.placeholder.com/200",
        title: "Timer",
        text: "A functional timer that lets users start, stop, and reset with precision, supporting hours, minutes, and seconds. It features a dark/light mode toggle and a clean design, showcasing practical JavaScript and CSS skills."
    },
    {
        image: "https://via.placeholder.com/200",
        title: "Chef Claude",
        text: "Description of project 3",
    },
    {
        image: "https://via.placeholder.com/200",
        title: "Insurance Home Page",
        text: "A professionally designed homepage tailored to meet the needs of an insurance agency. This project prioritizes simplicity, elegance, and effectiveness, ensuring a user-friendly experience. The client was highly satisfied with the final product."
    },
    {
        image: "https://via.placeholder.com/200",
        title: "Portfolio Website",
        text: "A minimalist and elegant design showcasing my web development skills. It features tasteful animations, strong color contrast, and effectively communicates all key information about me and my contact details."
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