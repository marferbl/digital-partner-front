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

export default function Hero() {
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
            Compara, implementa y triunfa. <br />
            <Text as={'span'} fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }} fonts color={COLORS.secondary}>
              Conquista el futuro digital
            </Text>
          </Heading>
        </Stack>
      </Container>
    </>
  )
}