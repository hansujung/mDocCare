import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import styles from './styles';


export default class LandingScreen extends Component{

        _navigate(){
            this.props.navigation.navigate('LoginScreen');
        }

        render(){
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.main_frame}>
                <View style={styles.onboarding_frame1}>
                    <Image
                        style={styles.mdoc_logo}
                        source={require('../../../assets/images/logo_hc.png')}
                    />
                    <Text style={styles.info_main}>
                        환자•보호자용
                    </Text>
                    <Text style={styles.info_sub}>
                        환자분의 건강관리를{"\n"}
                        더욱 효과적으로 도와드리겠습니다
                    </Text>
                </View>
                <View style={styles.onboarding_frame2}>
                    <TouchableOpacity 
                    style={styles.start_btn_frame}
                    onPress={this._navigate.bind(this)}>
                    <Text style={styles.start_text}>시작하기</Text>
                    </TouchableOpacity>
                </View>
            </View>    
        );
    }
}