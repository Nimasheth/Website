import React from 'react'
import {
  Text,
  VStack,
  Box,
  Link as ChakraLink,
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

<div>
<Text  style={{
   ...textStyles.subtitle2,
   marginBottom: '0.1%',
   marginLeft: "19%",
   textAlign: "left",
   marginTop: "25%",
   color: colors.grey[500],
 }} >
  Trip to Punta Cana
 </Text>
 <ChakraLink href="https://nimasheth.substack.com/p/trip-to-punta-cana" isExternal>
<img src={Images.punta} style={{ width: '30%', marginTop: "2%", marginRight: "50%"}} />
</ChakraLink>

<Text  style={{
   ...textStyles.subtitle2,
   marginBottom: '0.1%',
   marginLeft: "54%",
   textAlign: "left",
   marginTop: "-29.5%",
   color: colors.grey[500],
 }} >
  Taylor Swift Concert
 </Text>
<img src={Images.me} style={{ width: '30%', marginTop: "2%", marginRight: "-20%"}} />

</div>

<div>
<Text  style={{
   ...textStyles.subtitle2,
   marginBottom: '0.1%',
   marginLeft: "19%",
   textAlign: "left",
   color: colors.grey[500],
 }} >
  Wedding Season
 </Text>
<img src={Images.wedding} style={{ width: '30%', marginTop: "2%", marginRight: "50%"}} />
</div>

<div>
<Text  style={{
   ...textStyles.subtitle2,
   marginBottom: '0.1%',
   marginLeft: "60%",
   textAlign: "left",
   marginTop: "-30%",
   color: colors.grey[500],
 }} >
  Engineering Day
 </Text>
<img src={Images.eng} style={{ width: '40%', marginTop: "2%", marginRight: "-30%"}} />
</div>

<div>
<Text  style={{
   ...textStyles.subtitle2,
   marginBottom: '0.1%',
   marginLeft: "40%",
   marginTop: "5%",
   color: colors.grey[500],
 }} >
  Collision
 </Text>
<img src={Images.colli} style={{ width: '30%', marginTop: "2%", marginRight: "-41%"}} />
</div>


<div>
<Text  style={{
   ...textStyles.subtitle2,
   marginBottom: '0.1%',
   marginLeft: "23%",
   textAlign: "left",
   marginTop: "-35%",
   color: colors.grey[500],
 }} >
  Cottage Trip After 1B 
 </Text>
<img src={Images.cotty} style={{ width: '35%', marginTop: "2%", marginRight: "39%"}} />
</div>




    </>
  )
}

export default Blogs;