import { GridItem, Image, SimpleGrid, Text, useBreakpointValue, useColorModeValue, VStack } from '@chakra-ui/react';
import React from 'react';

import { colors } from '../../theme';
import SectionContainer from '../SectionContainer';

const Bio = ({ secondary }) => (
    <GridItem>
        <VStack m="auto" w="75%" spacing="12px" pt="5%">
            <Text>
                Hi, I&apos;m Ayush! I am a third year student pursuing my Bachelors from Punjab Engineering College.
            </Text>
            <Text>
                I enjoy developing{" "}
                <strong style={{ color: secondary }}>
                    efficient full stack web applications
                </strong>
                . My specialization is in {" "}
                <strong style={{ color: secondary }}>
                    MERN stack
                </strong>
                . My programming journey started back in 2018 when I built my first website for my 10th grade Project. Turns out a school project has taught me a lot about{" "}
                <strong style={{ color: secondary }}>
                    HTML & CSS
                </strong>{" "}
                Fast-Forward to today, I am currently working on a{" "}
                <strong style={{ color: secondary }}>
                    AI
                </strong>{" "}
                based app for recommending suggestions according to users history.
            </Text>
        </VStack>
    </GridItem>
);

const HeadShot = () => (
    <GridItem>
        <Image
            boxSize="320px"
            alt="Ayush Bhai Mehta"
            src="/me.jpg"
            m="auto"
            zIndex={1}
            className="image"
            onClick={() => {
                window.open("https://www.linkedin.com/in/ayush-mehta-6997a4235/");
            }}
        />
    </GridItem>
);

export default function About() {
    const shouldAlternate = useBreakpointValue({ base: false, md: true });
    const secondary = useColorModeValue(colors.secondary.light, colors.secondary.dark);

    return (
        <SectionContainer
            id="about"
            name="about"
            headerMt="-5%"
            headerText="About Me"
            useHeaderStyle
        >
            <SimpleGrid
                pl="10%"
                pt="5%"
                pr="10%"
                spacing={12}
                columns={[1, null, 2]}
                justifyContent="center"
            >
                {shouldAlternate ? <Bio secondary={secondary} /> : <HeadShot />}
                {shouldAlternate ? <HeadShot /> : <Bio secondary={secondary} />}
            </SimpleGrid>
        </SectionContainer>
    );
};