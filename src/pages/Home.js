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
  <TypingText style={{...textStyles.header1, marginBottom: '0.1%', marginLeft: "14%", color: colors.grey[500]}}> Hi, I'm Nima. </TypingText>
  <Box width="110%">
  <Text  style={{
   ...textStyles.subtitle1,
   marginBottom: '0.1%',
   marginLeft: "35.8%",
   textAlign: "left",
   color: colors.grey[500],
 }} > A systems design engineering student looking to use her skills to make a difference within her community</Text>
  </Box>
</VStack>
<Button style={{...ButtonStyles.ovalButton, marginTop: "2.75%", marginRight: "54.5%", color: colors.grey[500], borderColor: colors.grey[500] }}> Most Recent Blog </Button>
</div>
<HStack style={{marginLeft:"17%", marginTop: "-25%" }}>
<Button style={{...ButtonStyles.circleButton, marginRight: "1%"}}> 
<img src={Images.linkedin} style={{ width: '1000%', height: '80%' }}  /> </Button>
<Button style={{...ButtonStyles.circleButton,  marginRight: "1%"}}> 
<img src={Images.gmail} style={{ width: '140%', height: '70%' }}  /> </Button>
<Button style={{...ButtonStyles.circleButton,  marginRight: "1%"}}> 
<img src={Images.github} style={{ width: '140%', height: '70%' }}  /> </Button>
<Button style={{...ButtonStyles.circleButton,  marginRight: "1%"}}> </Button>
<Button style={{...ButtonStyles.circleButton,  marginRight: "1%"}}> </Button>
</HStack>
<div>
<div style={{marginTop: "40%"}} className="orange-bar"></div>
        <Text style={{ ...textStyles.paragraph2, color: colors.grey[100], marginTop: "4%", marginRight: "50%",}}>
          SOFTWARE DEVELOPER INTERNSHIP
        </Text>
        <Text style={{ ...textStyles.header6, color: colors.grey[500], marginTop: "1.5%", marginRight: "59%",}}>
        Mappedin
        </Text>
        <Box
       style={{marginLeft: "16.4%", width: "28%", height: "10%", textAlign: "left", marginTop: "1%"}}>
        <Text style={{ ...textStyles.paragraph, color: colors.grey[100]}}>
          Improved and enhanced their indoor mapping software, focusing on their Web SDK functionality.
        </Text>
        </Box>
        <Button style={{...ButtonStyles.ovalButton, marginTop: "1.3%", marginLeft: "-55.4%", borderColor: "#d68848"}}> Read More </Button>       
      </div>
      <Button style={{...ButtonStyles.experienceButton, marginTop: "-16.5%", marginLeft: "40%", backgroundColor: "rgb(220, 100, 52)"}}> 
      <img src={Images.mappedin} style={{ width: '55%', height: '100%', marginTop: "0%"}} />  </Button>
     
      <div>
      <div style={{ marginTop: "15%"}} className="blue-bar"></div>
      <Text style={{ ...textStyles.paragraph2, color: colors.grey[100], marginTop: "4%", marginRight: "56%",}}>
          SOFTWARE DEVELOPER 
        </Text>
        <Text style={{ ...textStyles.header6, color: colors.grey[500], marginTop: "1.5%", marginRight: "56.5%",}}>
        UW Blueprint
        </Text>
        <Box
       style={{marginLeft: "16.4%", width: "28%", height: "10%", textAlign: "left", marginTop: "1%"}}>
        <Text style={{ ...textStyles.paragraph, color: colors.grey[100]}}>
        Developing new assessment pages for JumpMath's online assessment tool, as well as fixing frontend bugs, to improve its effectiveness for teachers.
        </Text>
        </Box>
        <Button style={{...ButtonStyles.ovalButton, marginTop: "1.3%", marginLeft: "-55.4%", borderColor: "rgb(31, 95, 234)"}}> Read More </Button>   
        </div>    
      <Button style={{...ButtonStyles.experienceButton, marginTop: "-16.5%", marginLeft: "40%", backgroundColor: "rgb(31, 95, 234)"}}> 
      <img src={Images.blueprint} style={{ width: '70%', height: '80%', marginTop: "-5%"}}  /> </Button>

      <div>
      <div style={{ marginTop: "15%"}} className="purple-bar"></div>
      <Text style={{ ...textStyles.paragraph2, color: colors.grey[100], marginTop: "4%", marginRight: "61.5%",}}>
          MSAM LABS
        </Text>
        <Text style={{ ...textStyles.header6, color: colors.grey[500], marginTop: "1.5%", marginRight: "51.5%",}}>
        Student Researcher
        </Text>
        <Box
       style={{marginLeft: "16.4%", width: "28%", height: "10%", textAlign: "left", marginTop: "1%"}}>
        <Text style={{ ...textStyles.paragraph, color: colors.grey[100]}}>
        Incoming research student on MSAM Lab’s team to research post-processing techniques for 3D-printed copper components.
        </Text>
        </Box>
        <Button style={{...ButtonStyles.ovalButton, marginTop: "1.3%", marginLeft: "-55.4%", borderColor: "rgb(148, 75, 194)"}}> Read More </Button>   
        </div>    
      <Button style={{...ButtonStyles.experienceButton, marginTop: "-16.5%", marginLeft: "40%", backgroundColor: "rgb(148, 75, 194)"}}> 
      <img src={Images.MSAM} style={{ width: '50%', height: '63%', marginTop: "2%"}} /> </Button>
      
      
      
</>
  
  );
}

export default Home