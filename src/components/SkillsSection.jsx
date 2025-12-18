import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const skills = [
    // frontend
    {name: "HTML/CSS", level: 69, category: "frontend"},
    {name: "JavaScript", level: 75, category: "frontend"},
    {name: "React", level: 35, category: "frontend"},
    {name: "NextJS", level: 30, category: "frontend"},
    {name: "Tailwind CSS", level: 30, category: "frontend"},

    // language
    {name: "Python", level: 85, category: "language"},
    {name: "Java", level: 75, category: "language"},
    {name: "JavaScript", level: 75, category: "language"},

    // testing 
    {name: "Unittest", level: 85, category: "testing"},
    {name: "Hypothesis", level: 45, category: "testing"},
    {name: "Selenium", level: 55, category: "testing"},

    // tools
    {name: "VS Code", level: 95, category: "tools"},
    {name: "IntelliJ", level: 95, category: "tools"},
    {name: "GitHub", level: 95, category: "tools"},
    {name: "GitLab", level: 95, category: "tools"},
    {name: "Postman", level: 45, category: "tools"},

    // db 
    {name: "NeonDB", level: 15, category: "database"},
    {name: "MongoDB", level: 15, category: "database"},

    // api 
    {name: "GoogleMap API", level: 15, category: "api"},
    {name: "GoogleGemini API", level: 15, category: "api"},
    {name: "EmailJS API", level: 15, category: "api"},
    {name: "UploadThing API", level: 15, category: "api"},
    {name: "CoinGecko API", level: 15, category: "api"},
    {name: "Stripe API", level: 10, category: "api"}
];

const categories = ["all", "frontend", "language", "testing", "tools", "database", "api"]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );
    return (
        <section 
            id="skills" 
            className="py-24 px-relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                            key={key} 
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div 
                            key={key} 
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> {skill.name}</h3>
                            </div>

                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div 
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s ease-out"
                                    style={{ width: skill.level + "%" }}    
                                />
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}