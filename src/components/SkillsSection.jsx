const skills = [
    // frontend
    {name: "HTML/CSS", level: 95, category: "frontend"},
    {name: "JavaScript", level: 95, category: "frontend"},
    {name: "React", level: 95, category: "frontend"},
    {name: "Tailwind CSS", level: 95, category: "frontend"},

    // language
    {name: "Python", level: 95, category: "language"},
    {name: "Java", level: 95, category: "language"},

    // testing 
    {name: "Unittest", level: 95, category: "testing"},
    {name: "Hypothesis", level: 95, category: "testing"},
    {name: "Selenium", level: 95, category: "testing"},

    // tools
    {name: "VS Code", level: 95, category: "tools"},
    {name: "IntelliJ", level: 95, category: "tools"},
    {name: "GitHub", level: 95, category: "tools"},
    {name: "Postman", level: 95, category: "tools"},

];


export const SkillsSection = () => {
    return (
        <section 
            id="skills" 
            className="py-24 px-relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span> Skills</span>
                </h2>
                1:44:14 continue here!!!!!
            </div>
        </section>
    );
}