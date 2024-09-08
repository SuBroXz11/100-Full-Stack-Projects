import React from 'react'
import SectionTitle from './SectionTitle'
import { projects } from '../data'
import ProjectCard from './ProjectCard'

export default function Projects() {
    return (
        <section className='py-20 align-element' id='projects'>
            <SectionTitle text={'Creations'} />
            <div className="py-16 grid lg:grid-cols-3 xl:grid:cols-3 gap-8">
                {projects.map((project) => {
                    return <ProjectCard key={project.id} {...project} />
                })}
            </div>
        </section>
    )
}
