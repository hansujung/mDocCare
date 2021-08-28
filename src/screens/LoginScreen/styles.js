import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React, {Component} from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',

        paddingBottom: 48,
        paddingLeft: 16,
        paddingRight: 16,

        backgroundColor: '#FFFFFF'
    },
    navigator_bar:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        paddingTop: '10%'
    },
    logo_frame:{
        height: 40,
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 0,
        marginBottom: 12
    },
    mdoc_icon:{
        marginRight: 12,
    },
    info_text:{
        position: 'relative',
        
        fontFamily: 'SF Pro Text',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 20,
        lineHeight: 35,
        color: '#A0A0A0',
    },
    back_icon:{
        position: 'relative',
        width: 100,
        height: 24,
        left: 16,
        top: 13,
    },
    title_area: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // paddingVertical: 0,
        // paddingHorizontal: 16,

        position: 'relative',
        width: '100%',
        height: '100%',
        position: 'relative',
    },

    text_frame:{
        
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 0,

        position: 'relative',
        width: '100%',
    },

    login_main:{
        position: 'relative',

        fontFamily: 'SF Pro Text',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 25,
        lineHeight: 35,
        color: '#323232',

        alignSelf: 'stretch',
        flexGrow: 0,
    },
    login_sub:{
        position: 'relative',
        width: '100%',
        fontFamily: 'SF Pro Text',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 35,
        color: '#A0A0A0',

        alignSelf: 'stretch',
        flexGrow: 0,
    },
    login_frame:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        alignSelf: 'center',
        padding: 0,

        position: 'relative',
        width: wp('90%'),
        height: hp('40%'),
        top: hp('1%'),
        
        // flex: 'none',
        // order: 1,
        alignSelf: 'stretch',
        flexGrow: 0,
        marginVertical: 12,
        marginHorizontal: 0,

    },

    num_input:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 6,
        // spaddingHorizontal: 16,

        position: 'relative',
        width: '100%',
        height: 44,
        left: 0,
        top: 0,

        backgroundColor: '#F5F5F5',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#EBEBEB',
        // box-sizing: border-box (?)
        borderRadius: 22,

        // flex: 'none',
        // order: 0,
        alignSelf: 'stretch',
        flexGrow: 0,
        marginVertical: 6,
        marginHorizontal: 0
    },
    hint_txt:{
        position: 'relative',
        width: 70,
        // left: 16,
        // top: 10,
        
        fontFamily: 'SF Pro Text',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 25,
        color: '#969696',

        // flex: 'none',
        // order: 0,
        flexGrow: 0,
        marginVertical: 0,
        marginLeft: 12,
    },
    input_txt:{
        position: 'relative',
        height: 24,

        fontFamily: 'SF Pro Text',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 25,
        color: 'rgba(50, 50, 50, 0.3)',

        // flex: 'none',
        // order: 1,
        flexGrow: 1,
        marginVertical: 0,
        marginHorizontal: 12,
    },
    button_area:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 12,
        width: '100%',
        flex: 0,
    },
    btn_login:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 16,
        
        position: 'relative',
        height: 44,
        backgroundColor: '#3C64E6',
        opacity: 0.3,
        borderRadius: 22,
    },
    find_passward_text:{
        position: 'relative',
        fontFamily: 'Apple SD Gothic Neo',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 25,
        color: '#3C64E6',
        textDecorationLine: 'underline',
        flex: 1,
        
    },
    button_text:{
        position: 'relative',
        width: 80,
        height: 24,
        
        fontFamily: 'SF Pro Text',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 25,
        color: '#ffffff',
        textAlign: 'center',

        flexGrow: 0,
        marginVertical: 0,

    }

})


export default styles;