import React, { useState } from 'react'
import { Text, Flex, Button } from '@chakra-ui/react'
import { FcLike } from 'react-icons/fc'
import { addFavorite } from '../../services/favorite';

function AddFavoriteButton({ entity }) {

    const [isFavorite, setIsFavorite] = useState(false)

    const addFavoriteAction = async () => {
        const entityType = entity.lineType === 'solutions' ? 'Solution' : 'Service';
        await addFavorite(entity)
        setIsFavorite(true)
    }



    return (

        <Flex gap={2} as={Button} variant={'ghost'} onClick={addFavoriteAction}>
            <Text>{isFavorite ? 'Añadido a favoritos' : 'Añadir a favoritos'}</Text>
            <FcLike size={20} />
        </Flex>


    )
}

export default AddFavoriteButton