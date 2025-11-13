import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Passionate Web Developer and Tech Learner
                        </h3>

                        <p className="text-muted-foreground">
                            I'm Excelyynx from Malaysia, currently a Year 2 student pursuing Software Engineering at Monash University Malaysia.
                            I have great ethusiasm in crafting responsive, interactive web applications using modern development tools,
                            exploring APIs, testing automation frameworks and clean UI design.
                        </p>

                        <h3 className="text-2xl font-semibold">
                            Fun <span className="text-primary"> Facts</span>
                        </h3>

                        <p className="text-muted-foreground">
                            💭 MBTI: INTJ <br></br>
                            🎂 Birth victim on 8 March 2005 <br></br>
                            ☕ ZUS Iced Shaken Double Expresso, <br></br>
                            🍉 watermelon, <br></br>
                            🐰 cony bunny, <br></br>
                            🏋️‍♀️ Crossfit are things I love. <br></br>
                            💬 QOTD "what a priviledge to outgrow things you once settled for"
                        </p>

                        <a 
                            href="https://about-me-quiz-iwxlw5gos-excelyynxs-projects.vercel.app/"
                            target="_blank"
                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                        >
                            More fun facts
                        </a>

                        <div className="flex flex-col sm: flex-row gap-4 pt-4 justify-center">
                            <a 
                                href="#contact" 
                                className="cosmic-button"
                            >
                                Contact Me
                            </a>

                            <a 
                                href="/excelyynx_resume.pdf"
                                target="_blank"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                View My CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Web Development </h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive websites and web application with modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> UI/UX Design </h4>
                                    <p className="text-muted-foreground">
                                        Designing intuitive user interfaces and seamless user experience.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Project Management </h4>
                                    <p className="text-muted-foreground">
                                        Conducting projects from inception to completion with agile methodologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}