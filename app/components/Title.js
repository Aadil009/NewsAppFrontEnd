import React from 'react'
import { Text} from 'react-native'

const Title = ({children, numberOfLines = 2, size=20}) => {
    return (
        <Text numberOfLines={numberOfLines} style={{color:'#fff', fontFamily:'SofiaProMedium' , fontSize: size}}>
            {children}
        </Text>
    )
}

export default Title;
