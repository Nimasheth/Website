
import React from 'react'
import { VStack, Text, Box, HStack} from '@chakra-ui/react'
import textStyles from '../themes/typography.ts';
import colors from '../themes/colors.js';
import Images from '../componets/images';

function Projects() {
  return (
    <div>
   
      <img src={Images.me} style={{ width: '30%', marginTop: "12%", marginRight: "50%"}} />
        <Text style={{...textStyles.header6, color: colors.grey[500], marginLeft: "30%", marginTop: "-31%"}}> I believe in developing to influence positive change.</Text>
        <div style={{marginLeft: "44.2%", marginTop: "-1.5%"}} className="orange2-bar"></div>
        <Box
       style={{marginLeft: "44%", width: "50%", height: "10%", textAlign: "left", marginTop: "3%", lineHeight: "1.5" }}>
        <Text>​I'm Nima, a digital product designer from Toronto, Canada. I’m currently in my final year of studies in Systems Design Engineering at the University of Waterloo. Throughout my journey,​I've designed products and experiences at a range of companies, startups, and agencies across North America and Europe. As a designer with an engineering background,​ I've found ways to apply design methods to a variety of problem spaces and take ownership in various parts of the design process, from research to implementing designs.</Text>
        <Text>Outside of school, you can also find me playing varsity tennis for UWaterloo, or fuelling my creativity through music, learning languages, and traveling!</Text>
        <Text>Feel free to reach out at nsheth@uwaterloo.ca and stay connected with me!</Text>
       </Box>
       <hr style={{marginTop: "15%", width: "84%", marginLeft: "9.6%"}} /> 
       <Text style={{...textStyles.header6, color: colors.grey[500], marginLeft: "-68%", marginTop: "5%"}}> Currently I'm... </Text>
       <div style={{marginLeft: "10.25%", marginTop: "-1.5%"}} className="orange3-bar"></div>
       <Box
       style={{marginLeft: "44%", width: "22%", height: "10%", textAlign: "left", marginTop: "-4%", lineHeight: "1.5" }}>
        <Text> Writing about my most recent trips and the places I've visited as someone who wants to travel the world when they're older!</Text>
        <img src={Images.travel} style={{ width: '90%', marginTop: "12%", marginRight: "50%"}} />
        </Box>
        <Box
       style={{marginLeft: "70%", width: "20%", height: "10%", textAlign: "left", marginTop: "-23.5%", lineHeight: "1.5" }}>
        <Text> Helping non-profit organizations through technology and getting as involved as I can with my community</Text>
        <img src={Images.community} style={{ width: '100%', marginTop: "12%", marginRight: "50%"}} />
        </Box>
        <hr style={{marginTop: "5%", width: "84%", marginLeft: "9.6%"}}  /> 
        <Box
       style={{width: "13%", height: "10%", textAlign: "left", marginLeft: "10%", marginTop: "5%"}}>
        <Text style={{...textStyles.header6, color: colors.grey[500]}}> Acheivements and Community </Text>
        </Box>
        <div style={{marginLeft: "9.95%", marginTop: "-1.5%"}} className="orange4-bar"></div>
        <Text style={{marginLeft: "5.4%", marginTop: "-7%", fontWeight: 700}}>President's Scholarship of Distinction </Text>
        <Text style={{marginLeft: "-0.2%", marginTop: "0%"}}>by the Univeristy of Waterloo </Text>
        <Text  style={{marginLeft: "50.3%", marginTop: "-4.7%", fontWeight: 700}}>Extracirricular Award</Text>
        <Text  style={{marginLeft: "57.2%", marginTop: "0%"}}> by Laurel Heights Secondary School</Text>
        <Text style={{marginLeft: "-6.8%", marginTop: "4%", fontWeight: 700}}>Top 10 Overall</Text>
        <Text style={{marginLeft: "-4.4%"}}>by DECA Regionals</Text>
        <Text style={{marginLeft: "52.4%", marginTop: "-4.7%", fontWeight: 700}}> Top 20 Oral Presentation </Text>
        <Text style={{marginLeft: "49.8%", marginTop: "0%"}}> by DECA Provincials </Text>
        <Text style={{marginLeft: "-8%", marginTop: "4%", fontWeight: 700}}> VP Internal </Text>
        <Text style={{marginLeft: "-7.2%"}}> UW Blueprint </Text>
        <Text style={{marginLeft: "45%", marginTop: "-4.5%", fontWeight: 700}}> Secretary </Text>
        <Text style={{marginLeft: "45.2%", marginTop: "0%"}}> SVP Teens </Text>
        <Text style={{marginLeft: "-4.7%", marginTop: "4%", fontWeight: 700}}> Camp Counsellor </Text>
        <Text style={{marginLeft: "2%"}}> LEAP - Wilfrid Laurier University </Text>
        <Text style={{marginLeft: "45.2%", marginTop: "-4.7%", fontWeight: 700}}> Volunteer </Text>
        <Text style={{marginLeft: "47.7%"}}> Hack the North </Text>
        <Text style={{marginLeft: "-8.7%", marginTop: "4%", fontWeight: 700}}> Organizer </Text>
        <Text style={{marginLeft: "-7.4%"}}> STEM Comp </Text>
        <Text style={{marginLeft: "46%", marginTop: "-4.7%", fontWeight: 700}}> Participant </Text>
        <Text style={{marginLeft: "62.3%"}}> Toyota ML and Computer Vision Competition  </Text>
        <hr style={{marginTop: "5%", width: "84%", marginLeft: "9.6%"}}  /> 
        <Text style={{...textStyles.header6, marginRight: "74.5%", color: colors.grey[500], marginTop: "5%"}}> Resume</Text>
        <div style={{marginLeft: "9.45%", marginTop: "-1.5%"}} className="orange5-bar"></div>
        <img src={Images.resume} style={{ width: '20%', marginTop: "5%", marginRight: "65%"}} />
        <Box
       style={{width: "45%", height: "10%", textAlign: "left", marginLeft: "43%", marginTop: "-20.5%", lineHeight: "1.5"}}>
        <Text>Please take a moment to review my resume, which highlights my diverse skill set and accomplishments. I am genuinely excited about the potential to connect and discuss future co-op opportunities or any other collaborative ventures. </Text>
        <Text> Throughout my career, I have had the privilege of gaining experience in various fields, including design, development, and management. This exposure has shaped me into a versatile professional with a keen eye for detail and a passion for delivering exceptional results. On my resume, you will find a comprehensive overview of my achievements, but I would love to share more details about specific projects, responsibilities, and notable milestones during a 1:1 conversation!.</Text>
        <Text style={{fontWeight: 700, color: "rgb(220, 100, 52)" }} > MY RESUME</Text>
        </Box>


     

   
 
      
      </div>
  )
}

export default Projects
