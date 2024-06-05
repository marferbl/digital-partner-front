'use client'

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Center,
} from '@chakra-ui/react'
import { COLORS } from '../../../colors/colors'
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t, i18n } = useTranslation("global")


  return (
    <>
      <Container maxW={'5xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          pt={{ base: 20, md: 24 }}
          pb={{ base: 8, md: 10 }}>
          <Heading
            fontWeight={'800'}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            {t('discoverCompareTransform')} <br />
            <Text as={'span'} fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }} fonts color={COLORS.secondary}>
              {t('welcomeToDigitalCommunity')}
            </Text>
          </Heading>
        </Stack>
      </Container>
    </>
  )
}