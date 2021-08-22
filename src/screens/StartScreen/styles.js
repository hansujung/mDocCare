
import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: 16,
        paddingRight: wp('10%'),
        justifyContent: 'center',
    },
    contentArea: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'flex-start',
        paddingHorizontal: 0,
        paddingVertical: 16,
        
        position: 'absolute',
        width: wp('100%'),
        height: hp('45%'),
        left: 0,
        bottom: hp('8%'),
    },
    backgroundImage: {
        position: 'absolute',
        width: wp('100%'),
        height: hp('53%'),
        top: 0,
        // opacity: 0.3,
    },
    logomDoc: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        position: 'relative',
        width: 40,
        height: 40,
        left: 0,
        top: 0,
        backgroundColor: '#3C64E6',
        borderRadius: 8,
        // flex: 'none',
        // order: 0,
        flexGrow: 0,
        marginVertical: 0,
        marginHorizontal: 12,
    },
    contentText:{
        width: wp('90%'),
        height: hp('90%'),
        marginVertical: 12,
        marginHorizontal: 12,
    },
    introText: {
        position: 'relative',
        width: wp('90%'),
        height: hp('13%'),
        left: 0,
        fontFamily: 'SF Pro Text',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 20,
        lineHeight: 30,
        color: '#323232',
        alignSelf: 'stretch',
    },
    selectText:{
        position: 'relative',
        width: wp('90%'),
        height: hp('3%'),
        left: 0,
        top: hp('1.5%'),
        fontFamily: 'SF Pro Text',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 30,
        color: '#A0A0A0',
        alignSelf: 'stretch',
    },
    buttonArea: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 0,

        position: 'absolute',
        width: wp('90%'),
        height: 100,
        left: 16,
        // top: 195,
        bottom: 40,

        // flex: 'none'
        // order: 1,
        alignSelf: 'stretch',
        flexGrow: 0,
        marginVertical: 24,
        marginHorizontal: 0
    },
})


export default styles;