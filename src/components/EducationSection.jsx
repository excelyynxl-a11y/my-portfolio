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
        id="skills" 
        className="py-24 px-relative bg-secondary/30"
    >
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Education</span>
            </h2>
        </div> 
    </section>
  )
}

export default EducationSection