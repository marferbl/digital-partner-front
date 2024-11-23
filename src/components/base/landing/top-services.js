import React, { useEffect, useState } from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getTopServices } from '../../../services/service'

const TopServices = () => {

    const { t } = useTranslation('global')

    const [products, setProducts] = useState([])

    useEffect(() => {
        getTopServices().then((res) => {
            setProducts(res.data.services)
        }).catch((error) => {
            console.log(error)
        })
    }, [])



    return (
        <div>
            <span className="text-lg md:text-2xl pl-8 md:pl-14 pt-10 pb-6 text-white">
                SERVICIOS IMPRESCINDIBLES PARA START UPS
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 lg:px-60">
                {products?.map((product, index) => (
                    <div key={index} className="flex items-center p-4 rounded-lg shadow-sm">
                        {/* Product Image */}
                        <img src={product.logo} alt={product.title} className="w-20 h-20 object-cover rounded-md mr-4" />

                        {/* Product Info */}
                        <div className="flex flex-col flex-grow">
                            <span className="text-lg text-white font-light">{product.title}</span>
                            <div class='flex items-center'>
                                <span key={index} className="text-neutral text-xs">{t(product.serviceType)}</span>
                            </div>
                        </div>

                        <Link to={`/service/${product?._id}`}>
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

export default TopServices