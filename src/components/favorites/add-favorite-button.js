import React, { useState, useEffect } from 'react'
import { Text, Flex, Button } from '@chakra-ui/react'
import { FcLike, FcDislike } from 'react-icons/fc'
import { addFavorite, getIsFavorite, removeFavorite } from '../../services/favorite';
import { useTranslation } from 'react-i18next';


function AddFavoriteButton({ entity }) {

    const [isFavorite, setIsFavorite] = useState(false)
    const { t } = useTranslation("global");

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

        <Flex gap={2} as={Button} variant={'ghost'} bg={'gray.200'} onClick={addFavoriteAction}>
            <Text>{isFavorite ? t("favorites.remove") : t("favorites.add")}</Text>
            {!isFavorite ? <FcLike size={20} /> : <FcDislike size={20} />}
        </Flex>


    )
}

export default AddFavoriteButton