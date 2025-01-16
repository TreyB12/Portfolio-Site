const Card = ({ image, title, text, buttonText, onButtonClick }) => (
    <div className="card">
        <img className="card-image "src={image} alt={title} />
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{text}</p>
        <button className="card-button" onClick={onButtonClick}>
            {buttonText}
        </button>
    </div>
)

export default function Projects () {

    
    
const projectsData = [
    {
        image: "/images/Investment.png",
        title: "Investment Calculator",
        text: "Track your wealth's exponential growth with this investment calculator. Input your initial investment, contribution frequency, additional deposits, expected returns, and time horizon to see your future portfolio value calculated to the penny.",
        buttonText: "GitHub",
        onButtonClick: () => window.open("https://github.com/TreyB12/Investment-Calculator")
    
    },
    {
        image: "/images/Timer.png",
        title: "Timer",
        text: "A functional timer that lets users start, stop, and reset with precision, supporting hours, minutes, and seconds. It features a dark/light mode toggle and a clean design, showcasing practical JavaScript and CSS skills.",
        buttonText: "GitHub",
        onButtonClick: () => window.open("https://github.com/TreyB12/Interactive-Timer")
    },
    {
        image: "/images/chef-claude.png",
        title: "Chef Claude",
        text: "Chef Claude is a React-based recipe generator that transforms a list of ingredients into creative culinary possibilities through AI-powered suggestions, developed as a Scrimba tutorial project. The project showcases responsive design principles and modern React practices while solving the common problem of figuring out what to cook with available ingredients.",
        buttonText: "GitHub",
        onButtonClick: () => window.open("https://github.com/TreyB12/Chef-Claude-Repo")
    },
    {
        image: "/images/insurance.png",
        title: "Insurance Homepage",
        text: "A sleek, user-friendly homepage designed for an insurance agency, focusing on simplicity, elegance, and functionality. The client was highly satisfied with the final result.",
        buttonText: "GitHub",
        onButtonClick: () => window.open("https://github.com/TreyB12/Insurance-Homepage")
    },
    {
        image: "/images/site.png",
        title: "Portfolio Website",
        text: "A minimalist and elegant design showcasing my web development skills. It features tasteful animations, strong color contrast, and effectively communicates all key information about me and my contact details.",
        buttonText: "GitHub",
        onButtonClick: () => window.open("https://github.com/TreyB12/Portfolio-Site")
    },
    {
        image: "",
        title: "ToDo App",
        text: "",
        buttonText: "GitHub",
        onButtonClick: () => window.open("")

    },

]



    return (
        <>
        
        <header id="project-header">
            <h1 id="project-header-text">Projects</h1>
        </header>

        <div className="projects-container">
            {projectsData.map((project, index) => (
                <Card
                key={index}
                image={project.image}
                title={project.title}
                text={project.text}
                buttonText={project.buttonText}
                onButtonClick={project.onButtonClick}
                />
            ))}
           
        </div>

        
        
        </>
    )
}