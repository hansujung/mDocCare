import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

export default class LoginScreen extends Component{
    
    static navigationOptions = {
        header: null,
    };

    _doLogin(){
        // do something
        this.props.navigation.replace('ChatScreen')
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.navigator_bar}>
                    <TouchableOpacity 
                        style={styles.buttonPassword}
                        onPress={() => this.props.navigation.goBack()}>
                        <Icon name="chevron-back-outline" size={25} style={styles.back_icon} ></Icon>
                    </TouchableOpacity>
                </View>
                <View style={styles.title_area}>
                    <View style={styles.text_frame}>
                        <View style={styles.logo_frame}>
                            <Image
                                style={styles.mdoc_icon}
                                source={require('../../../assets/images/logo-m.png')}
                            />
                            <Text style={styles.info_text}>
                                환자•보호자{'\n'}
                            </Text>

                        </View>
                        <Text style={styles.login_main}>
                                환자•보호자 로그인{'\n'}
                            <Text style={styles.login_sub}>
                                의료진으로부터 전달받으신 안내문서에 기재되어있습니다.
                            </Text>
                        </Text>
                    </View>

                    <View style={styles.login_frame}>
                        <View style={styles.num_input}>
                            <Text style={styles.hint_txt}>
                                환자번호
                            </Text>
                            <TextInput 
                                style={styles.input_txt}
                                placeholder={"ex. 12345678"}/>
                        </View>
                        <View style={styles.num_input}>
                            <Text style={styles.hint_txt}>
                                비밀번호
                            </Text>
                            <TextInput 
                                style={styles.input_txt}
                                placeholder={"ex. ••••••••"}/>
                        </View>
                        <View style={styles.button_area}>
                            <Text style={styles.find_passward_text}>
                                비밀번호를 잊으셨나요?
                            </Text>
                            <TouchableOpacity 
                                style={styles.btn_login}
                                onPress={this._doLogin.bind(this)}>
                                <Text style={styles.button_text}>시작하기</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                
            </View>
        );
    }
}