import { Github, ExternalLink, ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "BuyUntilImBroke EComm Web",
        description: "A complete shopping flow including cart management and secure checkout using Stripe.",
        image: "/projects/ecommerce_web.png",
        tags: ["Stripe", "NextJS", "Zustand", "TailwindCSS"],
        demoUrl: "https://ecommerce-web-weld-one.vercel.app/",
        gitUrl: "https://github.com/excelyynxl-a11y/ecommerce-web",
    },
    {
        id: 2,
        title: "Habit Tracker Mobile App",
        description: "Mobile application allows users to track daily progress, visualizes streaks and inspect habit streak rankings.",
        image: "/projects/habit_tracker_app.png",
        tags: ["React Native", "Expo", "AppWrite"],
        demoUrl: "#",
        gitUrl: "https://github.com/excelyynxl-a11y/habit-tracker",
    },
    {
        id: 3,
        title: "KawanKawan Social Media App",
        description: "A SaaS social media platform that allows user authentication, image upload, dynamic voting and commenting system, community groups. The app is designed to be mobile responsive with modern glassmorphism aesthetic effects.",
        image: "/projects/kawan_kawan_social_media.png",
        tags: ["Supabase", "React", "TailwindCSS", "GitHub OAuth"],
        demoUrl: "https://social-media-kawan-kawan-git-main-excelyynxs-projects.vercel.app/",
        gitUrl: "https://github.com/excelyynxl-a11y/social-media-app",
    },
    {
        id: 4,
        title: "LikeItShort URL Shortener",
        description: "A simple and modern URL shortener that allows users to convert long URLs into short, shareable links and automatically redirects users to the original URL when accessed",
        image: "/projects/likeitshort_url_shortener.png",
        tags: ["NextJS", "MongoDB"],
        demoUrl: "https://url-shortener-te9k.vercel.app/",
        gitUrl: "https://github.com/excelyynxl-a11y/url-shortener",
    },
    {
        id: 5,
        title: "AI Newsletter",
        description: "A SaaS platform that allows users to receive AI-generated newsletters tailored to their interests and preferred frequency.",
        image: "/projects/ai_newsletter.png",
        tags: ["Supabase", "NextJS", "EmailJS API", "React", "Inngest", "OpenAI API"],
        demoUrl: "https://ai-newsletter-chi.vercel.app",
        gitUrl: "https://github.com/excelyynxl-a11y/ai-newsletter",
    },
    {
        id: 6,
        title: "Travel Planner",
        description: "Full-stack trip planning web app to sign in with GitHub account, create personalized travel itineraries, visualize destinations on Google Map, integrate a 3D rotating globe and a drag-and-drop itinerary planner.",
        image: "/projects/travel_planner.png",
        tags: ["NeonDB", "NextJS", "GoogleMap API", "React", "Lucide-React", "UploadThing API", "GitHub OAuth", "PostgreSQL"],
        demoUrl: "https://travel-planner-app-47mf-ieftmj3h7-excelyynxs-projects.vercel.app/",
        gitUrl: "https://github.com/excelyynxl-a11y/travel-planner-app",
    },
    {
        id: 7,
        title: "Gemini Clone",
        description: "Cloned Google Gemini webpage using React js and Gemini API integration.",
        image: "/projects/gemini_clone.png",
        tags: ["React", "Lucide-React", "GoogleGemini API"],
        demoUrl: "#",
        gitUrl: "https://github.com/excelyynxl-a11y/gemini-clone",
    },
    {
        id: 8,
        title: "Crypto Dashboard",
        description: "Crypto tracking web application that displays real-time cryptocurrency data, browse top cryptocurrencies, view detailed metrics, and explore a 7-day interactive chart powered by Recharts.",
        image: "/projects/crypto_dashboard.png",
        tags: ["React", "CoinGecko API"],
        demoUrl: "https://crypto-price-website-umber.vercel.app/",
        gitUrl: "https://github.com/excelyynxl-a11y/crypto-price-website",
    },
    {
        id: 10,
        title: "Finance Tracker",
        description: "Finance Tracker with Machine Learning Predictions using Regression, Recharts, Redux Toolkit and Material UI",
        image: "/projects/finance_tracker.png",
        tags: ["Redux Toolkit", "Material UI", "Recharts", "MongoDB", "Express JS", "Node JS"],
        demoUrl: "#",
        gitUrl: "https://github.com/excelyynxl-a11y/finance-tracker",
    },
    {
        id: 11,
        title: "Weightlifting Management System",
        description: "WLMS that registers athletes, validates for registration of athletes, and determines barbell setup for a liftoff.",
        image: "/projects/wlms.png",
        tags: ["HTML", "CSS", "JS", "Selenium", "Hypothesis", "Unittest"],
        demoUrl: "#",
        gitUrl: "https://github.com/excelyynxl-a11y/WeightliftingManagementSystem/tree/main",
    },
    // {
    //     id: 12,
    //     title: "About Me Quiz",
    //     description: "Simple 'About Me' quiz create using React framework, Users can answer multiple-choice questions, get instant feedback on correctness, get final score and restart the quiz.",
    //     image: "/projects/about_me.png",
    //     tags: ["React"],
    //     demoUrl: "https://about-me-quiz-iwxlw5gos-excelyynxs-projects.vercel.app/",
    //     gitUrl: "https://github.com/excelyynxl-a11y/about-me-quiz",
    // },
    // {
    //     id: 13,
    //     title: "Pomodoro Timer",
    //     description: "Pomodoro timer for short, medium and long breaks with sound effect.",
    //     image: "/projects/pomodoro_timer.png",
    //     tags: ["HTML", "CSS", "JS"],
    //     demoUrl: "https://excelyynxl-a11y.github.io/pomodoro/",
    //     gitUrl: "https://github.com/excelyynxl-a11y/pomodoro.git",
    // },
    // {
    //     id: 14,
    //     title: "Tic Tac Toe",
    //     description: "Classic tic tac toe game where players can play with computers..",
    //     image: "/projects/tic_tac_toe.png",
    //     tags: ["HTML", "CSS", "JS"],
    //     demoUrl: "https://excelyynxl-a11y.github.io/TicTacToeGame/",
    //     gitUrl: "https://github.com/excelyynxl-a11y/TicTacToeGame.git",
    // },
    {
        id: 15,
        title: "Weather App",
        description: "Weather web that allows users to search a city and obtain a weather forecast.",
        image: "/projects/weather_app.png",
        tags: ["HTML", "CSS", "JS", "OpenWeatherAPI"],
        demoUrl: "https://excelyynxl-a11y.github.io/WeatherApp/",
        gitUrl: "https://github.com/excelyynxl-a11y/WeatherApp.git",
    },
    // {
    //     id: 16,
    //     title: "Text to Voice Converter",
    //     description: "Text to voice converter where user can input their text, select a voice and hear an audible speech.",
    //     image: "/projects/text_to_voice_converter.png",
    //     tags: ["HTML", "CSS", "JS"],
    //     demoUrl: "https://excelyynxl-a11y.github.io/TextToVoiceConverter/",
    //     gitUrl: "https://github.com/excelyynxl-a11y/TextToVoiceConverter",
    // },
    
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
                                        {project.demoUrl !== "#" ? 
                                        <>
                                            <a 
                                                href={project.demoUrl} 
                                                target="_blank"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            > 
                                                <ExternalLink size={20}/> 
                                            </a>
                                        </>
                                        :
                                        <></>
                                        }

                                        {/* /* // <a 
                                        //     href={project.demoUrl} 
                                        //     target="_blank"
                                        //     className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        // > 
                                        //     <ExternalLink size={20}/> 
                                        // </a>
                                        // <a 
                                        //     href={project.gitUrl} 
                                        //     target="_blank"
                                        //     className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        // > 
                                        //     <Github size={20}/> 
                                        // </a> */ }

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