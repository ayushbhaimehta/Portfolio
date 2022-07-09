import { Box, Link, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { GoRepoForked, GoStar } from 'react-icons/go';
import { animateScroll as scroll } from 'react-scroll';

import links from '../data/footerLinks';
import LinkIconBar from './LinkIconBar';

const GITHUB_URL = 'https://github.com/ayushbhaimehta/Portfolio';

export default function Footer() {


	return (
		<Box
			as='footer'
			mt={12}
			height='100%'
			textAlign='center'
			className='app'>
			<Text fontSize='sm' mt={2} onClick={scroll.scrollToTop}>
				Go to Top
			</Text>
			<LinkIconBar links={links} />
		</Box>
	);
}
