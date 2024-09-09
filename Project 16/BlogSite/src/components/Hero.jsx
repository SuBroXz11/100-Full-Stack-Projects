import React from 'react'

const Hero = () => {
    const handleScroll = () => {
        window.scrollTo({
            top: window.innerHeight * 0.9,
            behavior: 'smooth'
        });
    };
    return (
        <div
            className="hero min-h-[50vh]"
            style={{
                backgroundImage: "url('https://st2.depositphotos.com/4107269/7705/i/450/depositphotos_77053627-stock-photo-journalist-working-on-his-new.jpg')",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text-white font-bold animate-bounce">Welcome to our Blog</h1>
                    <p className="mb-5 text-white animate-pulse">
                        Discover insightful articles, tips, and stories that inspire and inform. Let's explore together and dive into exciting topics that matter.
                    </p>
                    <button onClick={handleScroll} className="btn btn-secondary text-white">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
