import React, { useEffect } from 'react'
import { useTranslation } from "react-i18next";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text,
    Heading
} from '@chakra-ui/react'
import Navbar from '../../components/base/navbar'
import FooterLanding from '../../components/base/landing/footer'

const FaqsPage = () => {
    const { t } = useTranslation("global");

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const SEARCH_QUESTIONS = [
        {
            title: t('faqs.search.howToSearch.title'),
            paragraph: <div>
                {t('faqs.search.howToSearch.content')}
            </div>
        },
        {
            title: t('faqs.search.whyAI.title'),
            paragraph:
                <div>
                    {t('faqs.search.whyAI.content')}
                </div>
        },
        {
            title: t('faqs.search.howOrdered.title'),
            paragraph:
                <div>
                    {t('faqs.search.howOrdered.content')}
                </div>
        },
    ]

    const REFERENCES_QUESTIONS = [
        {
            title: t('faqs.references.whatIs.title'),
            paragraph: <div>
                {t('faqs.references.whatIs.content')}
            </div>
        },
        {
            title: t('faqs.references.howToGive.title'),
            paragraph: <div>
                {t('faqs.references.howToGive.content')}
            </div>
        },
        {
            title: t('faqs.references.howToRequest.title'),
            paragraph: <div>
                {t('faqs.references.howToRequest.content')}
            </div>
        },
        {
            title: t('faqs.references.relationshipWithNPS.title'),
            paragraph: <div>
                {t('faqs.references.relationshipWithNPS.content')}
            </div>
        },
        {
            title: t('faqs.references.benefits.title'),
            paragraph: <div>
                {t('faqs.references.benefits.content')}
            </div>
        },
        {
            title: t('faqs.references.whyPaid.title'),
            paragraph: <div>
                {t('faqs.references.whyPaid.content')}
            </div>
        }
    ];

    const CORPORATE_QUESTIONS = [
        {
            title: t('faqs.corporate.whatInside.title'),
            paragraph: <div>
                {t('faqs.corporate.whatInside.content')}
            </div>
        },
        {
            title: t('faqs.corporate.whyPaid.title'),
            paragraph: <div>
                {t('faqs.corporate.whyPaid.content')}
            </div>
        },
        {
            title: t('faqs.corporate.whenToCreate.title'),
            paragraph: <div>
                {t('faqs.corporate.whenToCreate.content')}
            </div>
        },
        {
            title: t('faqs.corporate.licenseManagement.title'),
            paragraph: <div>
                {t('faqs.corporate.licenseManagement.content')}
            </div>
        },
        {
            title: t('faqs.corporate.myTeam.title'),
            paragraph: <div>
                {t('faqs.corporate.myTeam.content')}
            </div>
        },
        {
            title: t('faqs.corporate.whoHasAccess.title'),
            paragraph: <div>
                {t('faqs.corporate.whoHasAccess.content')}
            </div>
        }
    ];

    return (
        <Box>
            <Heading textAlign={'center'} fontFamily='Roobert' fontWeight={'bold'} mt={10}>
                {t('frequentlyAskedQuestions')}
            </Heading>
            <Box p={10}>
                <Text fontSize={20} fontWeight='bold'>
                    {t('faqs.search.title')}
                </Text>
                <Accordion>
                    {SEARCH_QUESTIONS.map((e, index) => (
                        <AccordionItem key={`search-${index}`}>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left'>
                                    {e.title}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                {e.paragraph}
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Box>
            <Box px={10} pb={10}>

                <Text fontSize={20} fontWeight='bold'>
                    {t('faqs.references.title')}
                </Text>
                <Accordion>
                    {REFERENCES_QUESTIONS.map((e, index) => (
                        <AccordionItem key={`reference-${index}`}>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left'>
                                    {e.title}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                {e.paragraph}
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Box>
            <Box px={10} pb={10}>

                <Text fontSize={20} fontWeight='bold'>
                    {t('faqs.corporate.title')}
                </Text>
                <Accordion>
                    {CORPORATE_QUESTIONS.map((e, index) => (
                        <AccordionItem key={`corporate-${index}`}>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left'>
                                    {e.title}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                {e.paragraph}
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Box>
            <FooterLanding />
        </Box>
    )
}

export default FaqsPage