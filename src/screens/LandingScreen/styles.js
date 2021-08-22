
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
        position: 'absolute',
        width: wp('100%'),
        height: hp('100%'),

        backgroundColor: '#FFFFFF'
    },

    main_frame:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // paddingVertical: 0,
        // paddingHorizontal: 16,

        position: 'relative',
        width: wp('100%'),
        height: hp('90%'),
        left: 0,
        bottom: 48
    },

    onboarding_frame1:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,

        position: 'relative',
        width: wp('100%'),
        height: hp('80%'),
        // left: 0,
        // top: 0,

        // flex: 'none',
        // order: 0,
        alignSelf: 'stretch',
        flexGrow: 1,
        marginVertical: 24,
        marginHorizontal: 0,
        
    },

    mdoc_logo:{
        position: 'relative',
        width: 200,
        height: 96,
        // left: 71.5,
        // top: 156,

        // flex: 'none',
        // order: 0,
        flexGrow: 0,
        marginVertical: 24,
        marginHorizontal: 0

    },

    info_main:{
        position: 'relative',
        width: wp('100%'),
        height: 27,
        // left: 0,
        // top: 276,
        
        fontFamily: 'SF Pro Text',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 25,
        color: '#323232',

        textAlign: 'center',

        opacity: 0.3,

        // flex: 'none',
        // order: 0,
        alignSelf: 'stretch',
        flexGrow: 0,
        marginVertical: hp('2%'),
        marginHorizontal: 0

    },

    info_sub:{
        position: 'relative',
        width: wp('100%'),
        height: 48,
        // left: 0,
        // top: 327,
        
        fontFamily: 'SF Pro Text',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 25,
        color: '#323232',

        textAlign: 'center',

        // flex: 'none',
        // order: 2,
        alignSelf: 'stretch',
        flexGrow: 0,
        marginVertical: hp('2%'),
        marginHorizontal: 0

    },

    onboarding_frame2:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,

        position: 'relative',
        width: wp('100%'),
        height: 44,
        // left: 16,
        // top: hp('80%'),

        // flex: 'none',
        // order: 1,
        alignSelf: 'stretch',
        flexGrow: 0,
        // marginVertical: 24,
        marginHorizontal: 0,

    },

    start_btn_frame:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // paddingVertical: 6,
        // paddingHorizontal: 16,

        // position: 'relative',
        width: wp('90%'),
        height: 44,
        // left: 0,
        // top: 0,

        backgroundColor: '#3C64E6',
        borderRadius: 22,

        // flex: 'none',
        // order: 0,
        // alignSelf: 'stretch',
        // flexGrow: 1,
        // marginVertical: 12,
        // marginHorizontal: 0

    },

    start_text:{
        position: 'relative',
        // width: 59,
        // height: 24,
        // left: 142,
        // top: 10,

        fontFamily: 'SF Pro Text',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 25,
        color: '#ffffff',

        // flex: 'none',
        // order: 0,
        flexGrow: 0,
        marginVertical: 0,
        marginHorizontal: 10,

    },
})


export default styles;