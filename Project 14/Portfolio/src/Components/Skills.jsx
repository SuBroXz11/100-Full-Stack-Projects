import React from 'react'
import SectionTitle from './SectionTitle'
import { skills } from '../data'
import SkillsCard from './SkillsCard'

export default function Skills() {
    return (
        <section className='py-20 align-element' id='skills'>
            <SectionTitle text={'Tech Stack'} />
            <div className="py-16 grid gap-8 md:grid-cols-2">
                {skills.map((skill) => {
                    return <SkillsCard key={skill.id}  {...skill} />
                })}
            </div>
        </section>
    )
}
