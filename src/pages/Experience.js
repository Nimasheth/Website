import React from 'react';
import { VStack, Text, Box, Button, HStack, Image} from '@chakra-ui/react';
import textStyles from '../themes/typography.ts';
import colors from '../themes/colors.js';
import ButtonStyles from '../themes/buttons.ts';
import Images from '../componets/images';




function Experience() {
  return (
    <body class="experience-page">
    <div id="experience">
      <VStack>
        <Text style={{ ...textStyles.subtitle4, marginRight: "59%", marginBottom: "-1%", color: "#c9af98" }}>
          MY SKILLSET
        </Text>
        <Box 
        style={{marginRight: "36.3%", width: "30%", height: "10%"}}>
       <Text style={{ ...textStyles.header4, marginRight: "20%", textAlign: "left", color: colors.grey[50] }}>
        Full Stack, <br /> Web Development, Systems Design
      </Text>
        </Box>
        <Box 
        style={{marginLeft: "40%", width: "37%", height: "30%", marginTop: "-16.5%"}}>
        <Text style={{ ...textStyles.paragraph, marginRight: "10%", textAlign: "left",  color: colors.grey[50] }}>
        I specialize in building complex web applications, leading front-end teams, digital product design and developing visual design systems. I enjoy creating effortless user experience and designing delightful digital products. The entire process of going from a concept to release and gathering user’s feedback on either client’s or my own products is what makes me wake up everyday!
I worked with numerous clients from all around the world from early startups to well-established companies. I always seek new opportunities for cooperation on projects around interesting dashboards, design systems or landing pages. Let’s create something awesome together!
        </Text>
        </Box>  
        <Text style={{...textStyles.caption, marginRight: "54.2%", width: "37%", height: "30%", marginTop: "-4%", color: colors.grey[50], letterSpacing: 8}}>
  MY PROCESS 
  <Box style={{ marginLeft: "33.7%", width: "30%", height: "2%"}}>
  <Text style={{ bottom: "-5px", left: 0, right: 0, borderBottom: "1px solid #c9af98" }}></Text>
  </Box>
</Text>
      </VStack>
      <Text style={{ ...textStyles.header3, marginRight: "50.5%", marginTop: "12%", color: colors.grey[50] }}>
       Experience
      </Text>
   
     
     <Text style={{ ...textStyles.header5, color: "#202020", marginRight: "80%" }}>
       01
       <Text style={{ ...textStyles.header6, marginTop: "-22%", marginRight: "-100%", color: colors.grey[50] }}>
       Mappedin
      </Text>
      <Text style={{ ...textStyles.paragraphBold, marginTop: "-10%", marginRight: "-100%", color: colors.grey[50] }}>
       Software Developer
      </Text>
      <Image src={Images.mappedin} style={{ width: '100%', height: '100%', marginLeft: "18%", marginTop: "10%", filter: 'brightness(85%)', }} />
      <Box
      style={{marginRight: "36.3%", width: "200%", height: "2%", marginTop: "-47%", marginLeft: "100%"}}>
      <Text  style={{ ...textStyles.paragraph, color: colors.grey[50] }}> Improved and enhanced their indoor mapping software, focusing on their Web SDK functionality, debugged and troubleshooted issues, and implemented new features that included improved navigation, enhanced search, and real-time location tracking.
</Text>
      </Box>
      <Button style={{...ButtonStyles.ovalButton, marginTop: "2.75%", marginLeft: "35%"}}> Read More </Button>
      </Text> 

      <Text style={{ ...textStyles.header5, color: "#202020", marginTop: "-5%", marginRight: "-65%", }}>
      02
      <Text style={{ ...textStyles.header6, color: colors.grey[50], marginTop: "-2.8%", marginRight: "13%", }}>
      UW Blueprint
     </Text>
     <Text style={{ ...textStyles.paragraphBold, color: colors.grey[50], marginTop: "-1.3%", marginRight: "13%",}}>
       Software Developer
      </Text>
      <Image src={Images.blueprint} style={{ width: '6%', height: '6%', marginLeft: "-5%", marginTop: "2%", filter: 'brightness(85%)', }} />
      <Box
      style={{marginRight: "36.3%", width: "25%", height: "2%", marginTop: "-5%", marginLeft: "17%"}}>
      <Text  style={{ ...textStyles.paragraph, color: colors.grey[50] }}> Developing new assessment pages for JumpMath's online assessment tool, as well as fixing frontend bugs, to improve its effectiveness for teachers to evaluate student academic levels and create customized tests.
</Text>
      </Box>
      <Button style={{...ButtonStyles.ovalButton, marginTop: "2.75%", marginLeft: "-5.3%"}}> Read More </Button>
     </Text>


     <Text style={{ ...textStyles.header5, color: "#202020", marginRight: "80%", marginTop: "-5%" }}>
       03
       <Text style={{ ...textStyles.header6, marginTop: "-22%", marginRight: "-100%", color: colors.grey[50] }}>
       MSAM Labs
      </Text>
      <Text style={{ ...textStyles.paragraphBold, marginTop: "-10%", marginRight: "-100%", color: colors.grey[50] }}>
       Student Researcher
      </Text>
      <Image src={Images.MSAM} style={{ width: '80%', height: '80%', marginLeft: "40%", marginTop: "2%" }} />
      <Box
      style={{marginRight: "36.3%", width: "200%", height: "2%", marginTop: "-55%", marginLeft: "120%"}}>
      <Text  style={{ ...textStyles.paragraph, color: colors.grey[50] }}> Collaborating with a team to research post-processing techniques for 3D-printed copper components.
Will be designing parts on Onshape to test printing characteristics of metal 3D printers.
</Text>
      </Box>
      <Button style={{...ButtonStyles.ovalButton, marginTop: "23%", marginLeft: "47%"}}> Read More </Button>
      </Text> 



      <Text style={{ ...textStyles.header5, color: "#202020", marginTop: "-5%", marginRight: "-65%", }}>
      04
      <Text style={{ ...textStyles.header6, color: colors.grey[50], marginTop: "-2.8%", marginRight: "23.5%", }}>
      Royal Canadian Legion Air Cadets
     </Text>
     <Text style={{ ...textStyles.paragraphBold, color: colors.grey[50], marginTop: "-1.3%", marginRight: "23.5%",}}>
     Aerospace Engineering Instructor
      </Text>
      <Image src={Images.cadets} style={{ width: '8%', height: '8%', marginLeft: "-5%", marginTop: "2%", filter: 'brightness(85%)', }} />
      <Box
      style={{marginRight: "36.3%", width: "25%", height: "2%", marginTop: "-5.7%", marginLeft: "17%"}}>
      <Text  style={{ ...textStyles.paragraph, color: colors.grey[50] }}> Created various aerospace engineering lesson plans (aerodynamics, aircraft engines, history of aircrafts. etc) and engaging activities to educate junior Cadets. Led multiple groups in squadron-wide initiatives during parade nights and survival training camps. 
</Text>
      </Box>
      <Button style={{...ButtonStyles.ovalButton, marginTop: "2.75%", marginLeft: "-5.3%"}}> Read More </Button>
     </Text>



     
 

      
      
  
    
 




     
      
    </div>
    </body>
  );
}

export default Experience;
