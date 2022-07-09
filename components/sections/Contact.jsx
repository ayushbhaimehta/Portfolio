import { EmailIcon } from "@chakra-ui/icons";
import { Button, Flex, Link, Text } from "@chakra-ui/react";
import { Grid } from "@material-ui/core";
import React from "react";

import SectionContainer from "../SectionContainer";

export default function Contact() {
    return (
        <SectionContainer
            id="contact"
            name="contact"
            headerText="Contact Me"
            useHeaderStyle
        >
            <Flex
                as={Grid}
                container
                item
                xs={9}
                sm={6}
                justify="center"
                textAlign="center"
                pl={4}
                pr={4}
            >
                <Text fontSize="xl" m="auto" mt={6}>
                    Whether it&apos;s a Internship/job opportunity or a deep conversation, my inbox is always open!
                </Text>
                <Button
                    as={Link}
                    leftIcon={<EmailIcon />}
                    href="mailto:ayushmehta0620@gmail.com
"
                    m="auto"
                    mt={6}
                >
                    Send Email
                </Button>
            </Flex>
        </SectionContainer>
    );
};