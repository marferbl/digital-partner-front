import { Box, Text, Center } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { ButtonCreateCorporate } from "../../../components/corporate/button-create-corporate";
import { FiDatabase } from "react-icons/fi";
import { COLORS } from "../../../colors/colors";
import { useTranslation } from "react-i18next";

export const EmptyCorporateState = ({ refreshCorporate }) => {
    const { t } = useTranslation("global");

    return (
        <Center flexDir={'column'} minH={'300'}>
            <FiDatabase size={70} color={'white'} />
            <Text mt={8} mb={4} fontSize={24} color='white'>
                {t('profileUser.emptyStateTitle')}
            </Text>
            <Text mb={8} fontSize={16} color='white'>
                {t('profileUser.emptyStateDescription')}
            </Text>
            <ButtonCreateCorporate refreshCorporate={refreshCorporate} />
        </Center>
    );
};
