import { Github, ExternalLink, ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Travel Planner",
        description: "Full-stack trip planning web app to sign in with GitHub account, create personalized travel itineraries, visualize destinations on Google Map, integrate a 3D rotating globe and a drag-and-drop itinerary planner.",
        image: "/projects/travel_planner.png",
        tags: ["NeonDB", "NextJS", "GoogleMap API", "React", "Lucide-React", "UploadThing API", "GitHub OAuth", "PostgreSQL"],
        demoUrl: "https://travel-planner-app-47mf-ieftmj3h7-excelyynxs-projects.vercel.app/",
        gitUrl: "https://github.com/excelyynxl-a11y/travel-planner-app",
    },
    {
        id: 2,
        title: "Weightlifting Management System",
        description: "WLMS that registers athletes, validates for registration of athletes, and determines barbell setup for a liftoff.",
        image: "/projects/wlms.png",
        tags: ["HTML", "CSS", "JS", "Selenium", "Hypothesis", "Unittest"],
        demoUrl: "#",
        gitUrl: "https://github.com/excelyynxl-a11y/WeightliftingManagementSystem/tree/main",
    },
    {
        id: 3,
        title: "About Me Quiz",
        description: "Simple 'About Me' quiz create using React framework, Users can answer multiple-choice questions, get instant feedback on correctness, get final score and restart the quiz.",
        image: "/projects/about_me.png",
        tags: ["React"],
        demoUrl: "https://about-me-quiz-iwxlw5gos-excelyynxs-projects.vercel.app/",
        gitUrl: "https://github.com/excelyynxl-a11y/about-me-quiz",
    },
    {
        id: 4,
        title: "Pomodoro Timer",
        description: "Pomodoro timer for short, medium and long breaks with sound effect.",
        image: "/projects/pomodoro_timer.png",
        tags: ["HTML", "CSS", "JS"],
        demoUrl: "https://excelyynxl-a11y.github.io/pomodoro/",
        gitUrl: "https://github.com/excelyynxl-a11y/pomodoro.git",
    },
    {
        id: 5,
        title: "Tic Tac Toe",
        description: "Classic tic tac toe game where players can play with computers..",
        image: "/projects/tic_tac_toe.png",
        tags: ["HTML", "CSS", "JS"],
        demoUrl: "https://excelyynxl-a11y.github.io/TicTacToeGame/",
        gitUrl: "https://github.com/excelyynxl-a11y/TicTacToeGame.git",
    },
    {
        id: 6,
        title: "Weather App",
        description: "Weather web that allows users to search a city and obtain a weather forecast.",
        image: "/projects/weather_app.png",
        tags: ["HTML", "CSS", "JS", "OpenWeatherAPI"],
        demoUrl: "https://excelyynxl-a11y.github.io/WeatherApp/",
        gitUrl: "https://github.com/excelyynxl-a11y/WeatherApp.git",
    },
    {
        id: 7,
        title: "Text to Voice Converter",
        description: "Text to voice converter where user can input their text, select a voice and hear an audible speech.",
        image: "/projects/text_to_voice_converter.png",
        tags: ["HTML", "CSS", "JS"],
        demoUrl: "https://excelyynxl-a11y.github.io/TextToVoiceConverter/",
        gitUrl: "https://github.com/excelyynxl-a11y/TextToVoiceConverter",
    },
    
]

export const ProjectsSection = () => {
    return (
        <section className="py-24 px-4 relative" id="projects">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Feature <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-foreground-muted text-center mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. 
                    Each project was carefully crafted with attention to detail, 
                    performance and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div 
                            key={key} 
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>   

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span 
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl fdont-semibold mb-1">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>

                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a 
                                            href={project.demoUrl} 
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        > 
                                            <ExternalLink size={20}/> 
                                        </a>
                                        <a 
                                            href={project.gitUrl} 
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        > 
                                            <Github size={20}/> 
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a 
                        className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                        href="https://github.com/excelyynxl-a11y"
                        target="_blank"
                    >
                        Check My Github <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    );
}