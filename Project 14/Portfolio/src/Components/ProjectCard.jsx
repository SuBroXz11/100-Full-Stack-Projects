import React from 'react'
import { TbWorldWww } from 'react-icons/tb'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function ProjectCard({ url, img, github, title, text }) {
    return (
        <aritcle className="bg-white rounded-lg shadow-md block hover:shadow-2xl duration-300 animate-pulse hover:animate-none cursor-pointer">
            <img src={img} alt={title} className='w-full object-cover rounded-t-lg h-64' />
            <div className="capitalize p-8">
                <h2>{title}</h2>
                <p className='mt-4 text-slate-700 leading-loose'>{text}</p>
                <div className="mt-4 flex gap-x-4">
                    <a href={url} title='View the Project' target='_blank' className='hover:animate-spin'>
                        <TbWorldWww className='h-10 w-10 text-slate-500 hover:text-black duration-500' />
                    </a>
                    <a href={github} title='View the Project' target='_blank' className='hover:animate-spin'>
                        <FaGithub className='h-10 w-10 text-slate-500 hover:text-black duration-500 cursor-pointer' />
                    </a>
                    <a href={url} title='View the Project' target='_blank' className='hover:animate-spin'>
                        <FaLinkedin className='h-10 w-10 text-slate-500 hover:text-black duration-500 cursor-pointer' />
                    </a>
                </div>
            </div>
        </aritcle>
    )
}
