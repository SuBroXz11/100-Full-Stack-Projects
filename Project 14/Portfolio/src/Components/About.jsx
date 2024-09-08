import React from 'react'
import Aboutsvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'

export default function About() {
    return (
        <section className="py-20 bg-slate-100" id='about'>
            <div className="align-element grid md:grid-cols-2 items-center gap-16">
                <img src={Aboutsvg} alt="img" className='w-full h-64' />
                <article>
                    <SectionTitle text="About Me" />
                    <p className="mt-8 text-slate-600 leading-loose">
                        Passionate about crafting engaging and user-centric web experiences, I am a frontend developer with a strong foundation in HTML, CSS, and JavaScript. My skills extend to harnessing the power of React to build dynamic and interactive interfaces. With a keen eye for design and a commitment to writing clean and efficient code, I strive to create seamless and visually appealing websites. Whether it's implementing responsive layouts, optimizing performance, or solving complex challenges, I enjoy the creative process of turning ideas into intuitive and functional digital solutions. Constantly exploring new technologies and industry best practices, I am dedicated to staying at the forefront of frontend development to deliver cutting-edge and impactful projects.
                    </p>
                </article>
            </div>
        </section>
    )
}
