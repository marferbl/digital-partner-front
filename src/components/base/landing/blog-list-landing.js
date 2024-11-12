import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa";


const BlogListLanding = () => {

    const blogs = [
        { title: 'Este es el título del Post. Bueno, en realidad no. Pero… sí. Lo es.', description: 'Description 1', image: '/landing/rectangle-1.png', link: '/blog/1' },
        { title: 'Este es otro titulo para otro blog. A ver como queda.', description: 'Description 2', image: '/landing/rectangle-2.png', link: '/blog/2' },
        { title: 'Esto es otro título que no lo es. Creo… 3', description: 'Description 3', image: '/landing/rectangle-3.png', link: '/blog/3' },
        { title: 'Blog 3', description: 'Description 3', image: '/landing/rectangle-3.png', link: '/blog/3' },

    ]


    return (
        <div className="h-fit-content pb-10 md:pb-20 flex flex-col gap-10">
            <div className="flex gap-4 items-center justify-between pr-1">
                <span className="text-2xl md:text-7xl pl-10 pt-10 pb-6 text-white">
                    LAS ÚLTIMAS NOVEDADES
                </span>
                <div className=" w-40 md:w-80 border-2 border-gridyellow text-4xl md:text-8xl text-gridyellow flex pl-3 md:pl-14 items-center rounded-full h-14 md:h-32">
                    <FaArrowDown className="transform rotate-45" />
                </div>
            </div>
            <div className="flex items-center overflow-x-scroll gap-6 pl-8 pr-4 md:pl-20">
                {blogs.map((blog, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center p-4 w-1/3 max-w-xs bg-white min-h-60 md:min-h-4 relative rounded-xl bg-gradient-to-r from-slate-900 to-slate-700"
                        style={{ minWidth: "40.333%" }}
                    >
                        <span className="text-sm md:text-2xl h-20 md:h-56 pr-1 md:pr-20 uppercase text-white">{blog.title}</span>
                        <button class="bg-gridyellow text-black px-4 py-1 rounded-xl absolute bottom-2 right-2">
                            <IoIosArrowRoundForward size={20} />
                        </button>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default BlogListLanding