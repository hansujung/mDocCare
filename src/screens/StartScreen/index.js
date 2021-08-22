import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    Image
} from 'react-native';
import styles from './styles';
import RoundButton from './custombutton'

export default class StartScreen extends Component{
    render(){
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Image
                    style={styles.backgroundImage}
                    source={require('../../../assets/images/startscreen_img.png')}
                />
                <View style={styles.contentArea}>
                    <Image
                        style={styles.logomDoc}
                        source={require('../../../assets/images/logo-m.png')}
                    />
                    <Text style={styles.contentText}>
                        <Text style={styles.introText}>
                            안녕하세요 mDoc입니다.{"\n"}
                            환자분의 건강관리를{"\n"}
                            더욱 효과적으로 도와드리겠습니다.{"\n"}
                        </Text>
                        <Text style={styles.selectText}>
                            사용자 그룹을 선택해주세요
                        </Text>
                    </Text>
                </View>
                
                <View style={styles.buttonArea}>
                    <RoundButton
                        title='환자•보호자 입니다'
                        onPress={() => navigate('LoginScreen')} />

                    <RoundButton
                        title='의료진 입니다'
                        onPress={() => navigate('LoginScreen')} />

                </View>

            </View>    
        );
    }
}

