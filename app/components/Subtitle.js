import React from 'react'
import { Text} from 'react-native'

const Subtitle = ({children, numberOfLines = 2, size=15}) => {
    return (
        <Text numberOfLines={numberOfLines} style={{ fontSize: size,color:'#fff', fontFamily:'SofiaProRegular'}}>
            {children}
        </Text>
    )
}

export default Subtitle;
