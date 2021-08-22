import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import styles from './styles';


const StyledButton = (props) => {

    // const type = props.type;
    // const content = props.content;
    // const onPress = props.onPress;

    const { type, content, onPress} = props;
    
    const backgroundColor = type ==='primary' ? 'grey' : 'black';
    const textColor = type === 'primary' ? 'black' : 'white';
    const iconcolor = type === 'primary' ? 'grey' : 'white';
    
    
    
    return(
        <View style={styles.container}>
            <Pressable
            style={[styles.button, {backgroundColor}]}
            onPress={() => onPress()}
        >
            <View style={{
                flexDirection: 'row',
                justifycontent:'space-between',
                
            }}>
            <Image 
                source = {require('../../../assets/images/chat.png')}
                resizeMode = 'contain'
                
                style = {{
                    tintColor: iconcolor
                    
                }} 
            />
            
            <Text style = {[styles.text, {color: textColor} ]}>{content}</Text>
            </View>

            </Pressable>
            
        </View>

    );
};

export default StyledButton;