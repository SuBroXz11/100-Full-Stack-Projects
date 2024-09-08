import React from 'react'
import { links } from '../data'
import { useGlobalContext } from '../Context/Context'

export default function Navbar() {
    const { toggleModal } = useGlobalContext();
    return (
        <nav className='bg-emerald-100'>
            <div className='mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
                <h2 className="text-3xl font-bold">
                    SuB<span className='text-emerald-600'>RoXz</span>
                </h2>
                <div className="flex gap-x-3">
                    {links.map((link) => {
                        const { id, href, text } = link
                        return (
                            <>
                                <a href={href} key={id} className='capitalize text-lg font-bold tracking-wider hover:text-emerald-600 hover:underline duration-700'>{text}</a>
                            </>
                        )
                    })}
                </div>


            </div>
        </nav>
    )
}
