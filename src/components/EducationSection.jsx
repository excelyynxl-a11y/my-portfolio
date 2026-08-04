import React from 'react'

const educations = [
    {
        name: "Monash University Malaysia",
        description: "Bachelor of Software Engineering",
        duration: "Jul 2024 - Jul 2028",
        grade: "Current CGPA: 3.87",
    },
    {
        name: "Sunway College",
        description: "Monash University Foundation Year, MUFY",
        duration: "Jul 2023 - Jul 2024",
        grade: "Score: 97.63",
    },
    {
        name: "SMK Tinggi St David",
        description: "Science stream. JPA Scholar.",
        duration: "2018 - 2022",
        grade: "SPM straight A+",
    },

]

const EducationSection = () => {
  return (
    <section 
        id="education" 
        className="py-24 px-4 relative bg-secondary/30"
    >
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Education</span>
            </h2>

            <div className="grid grid-cols-1 gap-6">
                {educations.map((edu, key) => (
                    <div key={key} className="gradient-border p-6 card-hover">
                        <div className="text-left">
                            <div className="flex items-center justify-between mb-1">
                                <h4 className="font-semibold text-lg">{edu.name}</h4>
                                <span className="text-sm text-muted-foreground">{edu.duration}</span>
                            </div>
                            <p className="text-primary font-medium mb-1">{edu.description}</p>
                            <p className="text-muted-foreground text-sm">{edu.grade}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div> 
    </section>
  )
}

export default EducationSection