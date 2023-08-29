import React from 'react'
import {
  Text,
  VStack,
  Box,
  Button,
  HStack
} from "@chakra-ui/react";
import textStyles from '../themes/typography.ts';
import TypingText from '../styling/TypingEffect';
import ButtonStyles from '../themes/buttons.ts';
import colors from '../themes/colors.js';
import Images from '../componets/images';

function Blogs() {
  return (
    <>
    <div>
     <VStack marginRight="50%" marginTop="12%">
  <Text style={{...textStyles.header1, marginBottom: '0.1%', marginLeft: "-8.5%", color: colors.grey[500]}}> Blogs. </Text>
  <Box width="110%">
  <Text  style={{
   ...textStyles.subtitle1,
   marginBottom: '0.1%',
   marginLeft: "35.8%",
   textAlign: "left",
   color: colors.grey[500],
 }} > Check out some of the posts I've made about the various trips and events I've been apart of these past few years!</Text>
  </Box>
</VStack>
</div>

    </>
  )
}

export default Blogs;