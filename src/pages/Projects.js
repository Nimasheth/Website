
import React from 'react'
import { VStack, Text} from '@chakra-ui/react'
import textStyles from '../themes/typography.ts';
import colors from '../themes/colors.js';

function Projects() {
  return (
    <div>
      <VStack>
        <Text style={{color: colors.grey[50], fontSize: "14px"}}> Projects</Text>
        <Text style={{...textStyles.subtitle2, marginTop: '-0.3%', color: colors.grey[50],}}> My Projects</Text>
   
      </VStack>
      
      </div>
  )
}

export default Projects
