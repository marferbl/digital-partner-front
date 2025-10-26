import { Box, Text, Center } from "@chakra-ui/react";
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../../context/userContext";
import { EmptyCorporateState } from "./empty-state";
import axios from "axios";
import { CorporateProfile } from "../../../components/corporate/corporate-profile";
import { getCorporate } from "../../../services/corporate";

import AlertDigi from '../../../components/base/AlertDigi'
import { useTranslation } from 'react-i18next'
import { ButtonCreateCorporate } from '../../../components/corporate/button-create-corporate'

export const ProfileCorporatePage = () => {
    const { getToken, changeUserView } = useContext(UserContext);
    const [me, setMe] = useState(null);
    const [showEdit, setShowEdit] = useState(false)

    const { t } = useTranslation()
    const [corporate, setCorporate] = useState(null);
    const [hideTag, setHideTag] = useState(false)

    useEffect(() => {
        getMyCorporate();
    }, []);

    const getMyCorporate = async () => {
        getCorporate().then((res) => {
            setCorporate(res.data.corporate);
        }).catch((err) => {
            console.log(err);
        });
    };

    const hasCorporate = () => {
        return !!(corporate && corporate._id);
    }

    return (
        <Box mt={6} p={5} rounded={"xl"}  w={"100%"} minH={400}>
            {(!hasCorporate() && !hideTag) && 
            <AlertDigi text='¿Empresa? Crea ahora tu cuenta Corporate y descubre por qué la gente adora Digitalando'>
                <div className="flex items-center gap-4">
                    <ButtonCreateCorporate refreshCorporate={getMyCorporate} />
                    <span onClick={() => setHideTag(true)} className="font-semibold py-2 px-6 rounded-lg bg-light cursor-pointer hover:bg-[#2c5282]">Más tarde</span>
                </div>
            </AlertDigi>}
            {!corporate ? <EmptyCorporateState refreshCorporate={getMyCorporate} /> : <CorporateProfile corporate={corporate} />}
        </Box>
    )
};
