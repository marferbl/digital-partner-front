import React, { useContext, useEffect, useState } from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../context/userContext'
import { getTopSolutions } from '../../../services/solution'
import { useTranslation } from 'react-i18next'

const TopSolutions = () => {

    const { isLoggedIn } = useContext(UserContext)
    const { t } = useTranslation('global')

    const [products, setSolutions] = useState([])

    useEffect(() => {
        getTopSolutions().then((res) => {
            setSolutions(res.data.solutions)
        }).catch((error) => {
            console.log(error)
        })
    }, [])


    return (
        <div className='py-20'>
            <span className="text-lg md:text-2xl pl-8 md:pl-14 text-white ">
                TOP SOLUCIONES DEL MES
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 lg:px-60">
                {products.map((product, index) => (
                    <div key={index} className="flex items-center p-4 rounded-lg shadow-sm">
                        {/* Product Image */}
                        <img src={product.logo} alt={product.name} className="w-20 h-20 object-cover rounded-md mr-4" />

                        {/* Product Info */}
                        <div className="flex flex-col flex-grow">
                            <span className="text-lg text-white font-light">{product.name}</span>
                            <div class='flex items-center'>
                                {product.features.map((feature, index) => (
                                    <span key={index} className="text-neutral text-xs">{t(feature)}{index < product.features.length - 1 ? ', ' : ''}</span>
                                ))}
                            </div>
                        </div>

                        <Link to={`/solution/${product?._id}`}>
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