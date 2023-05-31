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



function Home() {
  return (
    <>
    
    <div>
     <VStack marginRight="50%" marginTop="12%">
  <TypingText style={{...textStyles.header1, marginBottom: '0.1%', marginLeft: "14%", color: colors.grey[50]}}> Hi, I'm Nima. </TypingText>
  <Box width="110%">
  <Text  style={{
   ...textStyles.subtitle1,
   marginBottom: '0.1%',
   marginLeft: "35.8%",
   textAlign: "left",
   color: colors.grey[50],
 }} > A systems design engineering student looking to use her skills to make a difference within her community</Text>
  </Box>
</VStack>
<Button style={{...ButtonStyles.ovalButton, marginTop: "2.75%", marginRight: "54.5%"}}> Most Recent Blog </Button>
</div>
<HStack style={{marginLeft:"17%", marginTop: "-25%" }}>
<Button style={{...ButtonStyles.circleButton,  marginRight: "1%"}}> 
<img src={Images.linkedin} style={{ width: '70%', height: '50%' }}  /> </Button>
<Button style={{...ButtonStyles.circleButton,  marginRight: "1%"}}>  </Button>
<Button style={{...ButtonStyles.circleButton,  marginRight: "1%"}}> </Button>
<Button style={{...ButtonStyles.circleButton,  marginRight: "1%"}}> </Button>
<Button style={{...ButtonStyles.circleButton,  marginRight: "1%"}}> </Button>
</HStack>
</>
  
  );
}

export default Home