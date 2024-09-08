import React from 'react'
import heroImg from '../assets/hero2.svg';
import { FaGithubSquare, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Hero() {
    return (
        <div className='bg-emerald-100 py-24'>
            <div className="align-element grid md:grid-cols-2 items-center gap-8 ">
                <article>
                    <div className="typewriter">
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-wider ">I'm Subrat...</h1>
                    </div>
                    <marquee scrollAmount="5" className='mt-4 text-4xl text-slate-700 capitalize tracking-wide'>Full Stack Web-Developer</marquee>
                    <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide font-bold'>A full stack web developer is not just a coder but a creator of digital experiences. They weave together the frontend, backend, and everything in between to bring ideas to life on the web.”</p>
                    <div className="flex gap-x-4 md:gap-x-6 lg:gap-x-8 mt-4">
                        <a href="https://github.com/SuBroXz11" target='blank' className='bounce2'>
                            <FaGithubSquare className='h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12  text-slate-600 hover:text-black duration-700' />
                        </a>
                        <a href="https://np.linkedin.com/in/subrat-karmacharya-bbaa5626b" target='_blank' className='bounce2'>
                            <FaLinkedin className='h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12  text-slate-600 hover:text-black duration-700' />
                        </a>
                        <a href="https://www.instagram.com/subratkarmacharya/" target='_blank' className='bounce2'>
                            <FaInstagram className='h-8 w-8  md:h-10 md:w-10 lg:h-12 lg:w-12 text-slate-600 hover:text-black duration-700' />
                        </a>
                    </div>
                </article>
                <article>
                    <img src={heroImg} alt="Image..." class="h-60 lg:h-96 mt-4 mx-auto md:mx-0 lg:mx-0 ping" style={{ transform: 'scaleX(-1)' }} />
                </article>
            </div>
        </div>
    )
}
