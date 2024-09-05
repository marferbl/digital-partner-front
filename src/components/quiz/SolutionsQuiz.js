import React, { useState, useEffect } from 'react'
import { Box, Center, Text, Checkbox, Flex } from '@chakra-ui/react'
import { COLORS } from '../../colors/colors'
import SearchSelectSpecifyFeatures from '../base/search-select-specify-features'
import SearchSelectFeatures from '../base/search-select-features'
import GradientButton from '../base/GradientButton'
import { useTranslation } from 'react-i18next'; // Import useTranslation

const SolutionsQuiz = ({ order, setOrder, updateConfig }) => {
    const { t } = useTranslation('global'); // Use useTranslation hook

    const [config, setConfig] = useState({})

    useEffect(() => {
        updateConfig(config)
    }, [config])

    const handleToggle = (value, key) => {
        setConfig({ ...config, [value]: key })
    }

    const nextQuestion = () => {
        setOrder(order + 1)
    }

    return (
        <Box>
            {order === 1 &&
                <Box>
                    <Center>
                        <Text fontSize={'3xl'} color={COLORS.primary} fontWeight={'bold'} px={5}>
                            {t('solutionTargetQuestion')} {/* Translated title */}
                        </Text>
                    </Center>
                    <SearchSelectFeatures
                        showLabel
                        width={'100%'}
                        isMulti={config.isErp}
                        onChange={(value) => {
                            const featureArray = typeof value === 'string' ? value.split(',') : value
                            handleToggle('features', featureArray)
                        }}
                    />
                    <Checkbox
                        mt={2}
                        onChange={(e) => handleToggle('isErp', e.target.checked)}
                    >
                        <Text fontSize={16}>{t('erpQuestion')}</Text> {/* Translated text */}
                    </Checkbox>
                </Box>
            }
            {order === 2 &&
                <Box>
                    <Center>
                        <Text fontSize={'3xl'} color={COLORS.primary} fontWeight={'bold'} px={5}>
                            {t('specificFeaturesQuestion')} {/* Translated title */}
                        </Text>
                    </Center>
                    <SearchSelectSpecifyFeatures
                        feature={config.features}
                        onChange={(value) => handleToggle('specifyFeatures', value)}
                    />
                </Box>
            }
            <Flex justify={'end'} mt={10} cursor='pointer'>
                <GradientButton
                    label={t('nextButton')}
                    type='green'
                    size={'md'}
                    onClick={nextQuestion}
                />
            </Flex>
        </Box>
    )
}

export default SolutionsQuiz
