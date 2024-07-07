import React, { useState, useEffect } from 'react'
import { Text, Flex, Button } from '@chakra-ui/react'
import { FcLike, FcDislike } from 'react-icons/fc'
import { addFavorite, getIsFavorite, removeFavorite } from '../../services/favorite';


function AddFavoriteButton({ entity }) {

    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        entity?._id && getFavoriteBoolean(entity._id)
    }, [entity])

    const getFavoriteBoolean = async (id) => {
        const response = await getIsFavorite(id)
        setIsFavorite(response.data.isFavorite)
    }

    console.log(entity)
    const addFavoriteAction = async () => {
        const entityType = entity.lineType === 'solutions' ? 'Solution' : 'Service';
        if (isFavorite) {
            await removeFavorite(entity._id, entityType)
            setIsFavorite(false)

        } else {
            await addFavorite(entity)
            setIsFavorite(true)
        }
    }



    return (

        <Flex gap={2} as={Button} variant={'ghost'} onClick={addFavoriteAction}>
            <Text>{isFavorite ? 'Eliminar de favoritos' : 'Añadir a favoritos'}</Text>
            {!isFavorite ? <FcLike size={20} /> : <FcDislike size={20} />}
        </Flex>


    )
}

export default AddFavoriteButton