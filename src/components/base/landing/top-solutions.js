import React, { useContext } from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../context/userContext'

const TopSolutions = () => {

    const { isLoggedIn } = useContext(UserContext)

    const products = [
        {
            id: 1,
            title: "Product 1",
            category: "Category 1",
            image: "https://via.placeholder.com/150"
        },
        {
            id: 2,
            title: "Product 2",
            category: "Category 2",
            image: "https://via.placeholder.com/150"
        },
        {
            id: 3,
            title: "Product 1",
            category: "Category 1",
            image: "https://via.placeholder.com/150"
        },
        {
            id: 4,
            title: "Product 2",
            category: "Category 2",
            image: "https://via.placeholder.com/150"
        },
        {
            id: 5,
            title: "Product 1",
            category: "Category 1",
            image: "https://via.placeholder.com/150"
        },
        {
            id: 6,
            title: "Product 2",
            category: "Category 2",
            image: "https://via.placeholder.com/150"
        },
    ]

    return (
        <div>
            <span className="text-lg md:text-2xl pl-8 md:pl-14 pt-10 pb-6 text-white">
                TOP SOLUCIONES DEL MES
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:px-60">
                {products.map((product, index) => (
                    <div key={index} className="flex items-center p-4 rounded-lg shadow-sm">
                        {/* Product Image */}
                        <img src={product.image} alt={product.title} className="w-20 h-20 object-cover rounded-md mr-4" />

                        {/* Product Info */}
                        <div className="flex flex-col flex-grow">
                            <span className="text-lg text-white font-light">{product.title}</span>
                            <span className="text-neutral">{product.category}</span>
                        </div>

                        <Link to={isLoggedIn ? `/private/solution/${product?._id}` : `/solution/${product?._id}`}>
                            <button class="bg-white text-black px-6 py-1 rounded-xl">
                                <IoIosArrowRoundForward size={20} />
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default TopSolutions