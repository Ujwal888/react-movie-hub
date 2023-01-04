import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box, Container, Heading, Stack, Image, Text } from '@chakra-ui/react';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';
const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>
        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image
            src={img5}
            alt="image5"
            h={['40', '400']}
            filter={'hue-rotate(-130deg)'}
          />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190% '}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Asperiores, quibusdam laboriosam ipsum culpa sapiente ratione
            temporibus non sequi deserunt, tenetur sint laudantium ullam dolorum
            animi voluptate ipsam. Soluta, consequuntur animi eveniet ut
            laboriosam repudiandae vel illum ratione, repellat velit doloribus
            sit non. Adipisci perspiciatis sint tenetur! Vitae repellat tenetur
            officia iste nostrum sapiente quod dolorum tempore sunt excepturi
            inventore, quo debitis, hic totam, voluptatem libero labore nesciunt
            amet mollitia saepe ipsum. Veniam ab tenetur aliquid doloribus
            quisquam voluptates reiciendis minima eos excepturi, maxime
            reprehenderit dicta illo fugit assumenda autem pariatur quo
            quibusdam! Tenetur fuga id commodi quasi rem, dolor possimus!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};
const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={2000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image
        src={img1}
        alt="image4"
        h={'full'}
        w={'full'}
        objectFit={'cover'}
      />
    </Box>
    <Box w="full" h={'100vh'}>
      <Image
        src={img2}
        alt="image3"
        h={'full'}
        w={'full'}
        objectFit={'cover'}
      />
    </Box>
    <Box w="full" h={'100vh'}>
      <Image
        src={img3}
        alt="image1"
        h={'full'}
        w={'full'}
        objectFit={'cover'}
      />
    </Box>
    <Box w="full" h={'100vh'}>
      <Image
        src={img4}
        alt="image2"
        h={'full'}
        w={'full'}
        objectFit={'cover'}
      />
    </Box>
  </Carousel>
);

export default Home;
