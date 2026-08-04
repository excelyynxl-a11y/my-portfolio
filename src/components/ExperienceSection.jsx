import React from 'react'

const experiences = [
    {
        name: "FIT2099 Class Assistant", 
        duration: "Jul 2026 - Sept 2026", 
        description: "Class assistant in Object-Oriented Design and Implementation."
    },
    {
        name: "FIT1051 Class Assistant", 
        duration: "Feb 2026 - May 2026", 
        description: "Class assistant in Fundamental in Java."
    },
    {
        name: "Software Engineer @Leapseed", 
        duration: "Nov 2025 - Jan 2026", 
        description: "Develop SaaS platform - Schola Learning Management System. Task involves end-user tesing, UI/UX improvement, feature enhancement and webpage design. Worked with Figma, PHP, Laravel, GitHub."
    },
    {
        name: "Publicity Officer @Monash Atheletics Club", 
        duration: "Jul 2026 - present", 
        description: "Create visualising content for instagram, promotional booth, promote weekly track meets and manage social media content."
    },
    {
        name: "Head Publicity Officer @Engineers Australia Monash Malaysia Student Society", 
        duration: "Jan 2025 - Jun 2026", 
        description: "Manage and promote EAMMSS publicity, content creation, social media profile."
    },
]

const ExperienceSection = () => {
  return (
    <section 
        id="experience" 
        className="py-24 px-4 relative bg-secondary/30"
    >
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Experiences</span>
            </h2>

            <div className="grid grid-cols-1 gap-6">
                {experiences.map((exp, key) => (
                    <div key={key} className="gradient-border p-6 card-hover">
                        <div className="text-left">
                            <div className="flex items-center justify-between mb-1">
                                <h4 className="font-semibold text-lg">{exp.name}</h4>
                                <span className="text-sm text-muted-foreground">{exp.duration}</span>
                            </div>
                            <p className="text-muted-foreground text-sm">{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div> 
    </section>
  )
}

export default ExperienceSection