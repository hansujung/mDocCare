import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React, {Component} from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: wp('100%'),
        height: hp('100%'),

        backgroundColor: '#FFFFFF'
    },
    navigator_bar:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 13,
        paddingHorizontal: 16,

        position: 'relative',
        width: wp('100%'),
        height: hp('10%'),
        left: 0,
        top: 40,
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
        alignItems: 'flex-start',
        paddingVertical: 10,
        paddingHorizontal: 16,

        position: 'relative',
        width: wp('100%'),
        height: hp('45%'),
        left: 0,
        top: hp('20%'),
        marginHorizontal: wp('2%'),
    },

    text_frame:{

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 0,

        position: 'relative',
        width: wp('90%'),
        height: hp('10%'),
        // left: 0,
        top: 0,
    },

    login_main:{
        position: 'relative',
        width: wp('90%'),
        height: hp('10%'),
        // left: 0,
        top: 0,
        
        fontFamily: 'SF Pro Text',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 25,
        lineHeight: 35,
        color: '#323232',

        // flex: 'none',
        // order: 0,
        alignSelf: 'stretch',
        flexGrow: 0,
        // marginVertical: 8,
        // marginHorizontal: 0

    },
    login_sub:{
        position: 'relative',
        width: wp('90%'),
        height: hp('10%'),
        left: 0,
        top: 0,
        
        fontFamily: 'SF Pro Text',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 35,
        color: '#A0A0A0',

        // flex: 'none',
        // order: 2,
        alignSelf: 'stretch',
        flexGrow: 0,
        // marginVertical: 8,
        // marginHorizontal: 0
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
        marginVertical: 24,
        marginHorizontal: 0,

    },

    num_input:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 16,

        position: 'relative',
        width: wp('90%'),
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
        width: wp('20%'),
        height: 24,
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
        marginHorizontal: 12,
    },
    input_txt:{
        position: 'relative',
        width: wp('20%'),
        height: 24,
        // left: 16,
        // top: 10,
        
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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 16,
        
        position: 'relative',
        width: 91,
        height: 44,
        top: 10,

        backgroundColor: '#3C64E6',
        opacity: 0.3,
        borderRadius: 22,
        
        // flex: 'none',
        // order: 1,
        flexGrow: 0,
        marginVertical: 12,
        marginHorizontal: 0,
    },
    button_text:{
        position: 'relative',
        width: 80,
        height: 24,
        // left: 16,
        // top: 10,
        
        fontFamily: 'SF Pro Text',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 25,
        color: '#ffffff',
        textAlign: 'center',

        // flex: 'none',
        // order: 0,
        flexGrow: 0,
        marginVertical: 0,
        marginHorizontal: 10,

    }

})


export default styles;