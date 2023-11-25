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
          py={{ base: 20, md: 24 }}>
          <Heading
            fontWeight={'800'}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            Compara, implementa y triunfa. <br />
            <Text as={'span'} fontSize={{ base: 'xl', sm: '3xl', md: '5xl' }} fonts color={COLORS.secondary}>
              Conquista el futuro digital
            </Text>
          </Heading>
          <Center>
            <Text color={'gray.500'} maxW={'3xl'} >
              Desafiamos la norma ofreciendo soluciones digitales audaces y diversas. Transforma desafíos en oportunidades con innovación, excelencia y una revolución digital única.
            </Text>
          </Center>
          {/* <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={'blue'}
              bg={'blue.800'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'blue.700',
              }}>
              Get Started
            </Button>

          </Stack> */}
        </Stack>
      </Container>
    </>
  )
}