
import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';



const ChatScreen = () => {
    return (
        <View style = {styles.carContainer}>
        <ImageBackground 
        source={require('../../../assets/images/icon.png')}   // 추가 배경 이미지가 있을 경우 고려
        style={styles.image}
        />

        <View style = {styles.titles}> 
          <Text style = {styles.title}>길동님, 상담 예약하세요!</Text>          
          <Text style = {styles.subtitle}>예정된 정기 상담이 없어요</Text>
        </View>
            <StyledButton 
            type="primary"
            content = {"+ 새 상담 예약"}
            onPress = {() => {
                console.warn("+ 새 상담 예약");
            }}
             />
        <View style = {styles.help}>
           <Text style = {styles.helptext}>상담 일정 확인 / 관리는 일정 탭에서 가능합니다.</Text>
        </View>
        <View style = {styles.bottomhelp}>
          <Text style = {styles.helptext}>정기 상담 말고 다른 문의사항이 있으신가요?</Text>
          <Text style = {styles.helptext}>비정기 상담을 요청하세요!</Text>
        </View>
        <View 
        style = {styles.buttonsContainer}>
          
            <StyledButton 
            image = "../../../assets/images/chat.png"
            type="Secondery"
            content={"  상담방 입장"} 
            onPress={() => {
                console.warn("비정기 상담방 입장");
            }} 
            
            />
          
        </View>

      </View>

    );
};

export default ChatScreen;