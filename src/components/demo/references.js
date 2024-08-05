import {
    Container,
    Heading,
    Flex,
    Text,
    Stack,
    HStack,
    Avatar,
} from '@chakra-ui/react';

const reviewData = [
    {
        avatarSrc: 'https://s.gravatar.com/avatar/4f9135f54df98fe894a9f9979d600a87?s=80',
        review: `Una herramienta fantástica que superó nuestras expectativas. Facilitó enormemente nuestra búsqueda de soluciones digitales.`,
        stars: 3,
        userName: 'Marcos - CEO de Solución de prueba',
        dateTime: 'hace 2 meses'
    },
    {
        avatarSrc: '',
        review: `Excelente plataforma para encontrar soluciones digitales. Muy intuitiva y fácil de usar, nos sentimos muy apoyados.`,
        stars: 4,
        userName: 'Ali - Administrador de sistemas en Demo',
        dateTime: 'hace 1 mes'
    },
    {
        avatarSrc: '',
        review: `Buena herramienta, pero podría mejorar en algunas áreas. Aun así, nos ayudó a encontrar varias opciones útiles.`,
        stars: 2,
        userName: 'Carlos - CTO de Demo 1',
        dateTime: 'hace 4 meses'
    }
];



const SimpleReview = () => {
    return (
        <Container maxW="5xl" p={{ base: 5, md: 10 }}>

            <Stack direction="column" spacing={5} my={4}>
                {reviewData.map((review, index) => {
                    return (
                        <Stack key={index} direction="column" maxW="2xl">
                            <HStack spacing={3}>
                                <Avatar size="md" name={review.userName} src={review.avatarSrc} />
                                <Flex direction="column">
                                    <Text fontWeight="bold" fontSize="md">
                                        {review.userName}
                                    </Text>
                                    <Text fontWeight="light" fontSize="xs">
                                        {review.dateTime}
                                    </Text>
                                </Flex>
                            </HStack>
                            <Flex my={3} alignItems="center" justifyContent="start">
                                {Array.from(Array(review.stars).keys()).map((id) => {
                                    return <Star key={id} fillColor="#EACA4E" />;
                                })}
                                {Array.from(Array(5 - review.stars).keys()).map((id) => {
                                    return <Star key={id} fillColor="#e2e8f0" />;
                                })}
                            </Flex>
                            <Text
                                color={'gray.400'}
                                fontSize="0.87rem"
                                textAlign="left"
                                lineHeight="1.375"
                                fontWeight="300"
                            >
                                {review.review}
                            </Text>
                        </Stack>
                    );
                })}
            </Stack>
        </Container>
    );
};

const Star = ({ fillColor }: { fillColor: string }) => {
    return (
        <svg
            style={{
                width: '1rem',
                height: '1rem',
                fill: fillColor,
                marginRight: '0.25rem'
            }}
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
        </svg>
    );
};

export default SimpleReview;