
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
        width: '100%',
        height: '100%',

        paddingBottom: 48,
        paddingLeft: 16,
        paddingRight: 16,

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
        width: '100%',
        height: '100%',
        bottom: 48,
    },

    onboarding_frame1:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,

        position: 'relative',
        width: '100%',
        height: '100%',

        flex: 0,
        alignSelf: 'stretch',
        flexGrow: 1,
        
    },

    mdoc_logo:{
        position: 'relative',
        width: 200,
        height: 96,
        flex: 0,
        flexGrow: 0,
        marginBottom: 24,
    },

    info_main:{
        position: 'relative',
        width: '100%',
        height: 27,

        fontFamily: 'SF Pro Text',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 25,
        color: '#323232',

        textAlign: 'center',

        opacity: 0.3,

        flex: 0,
        alignSelf: 'stretch',
        marginBottom: 24,
    },

    info_sub:{
        position: 'relative',
        width: '100%',
        height: 48,
        
        fontFamily: 'SF Pro Text',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 25,
        color: '#323232',

        textAlign: 'center',

        flex: 0,
        alignSelf: 'stretch',

    },

    onboarding_frame2:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,

        position: 'relative',
        width: '100%',
        height: 44,
        flex: 0,
        alignSelf: 'stretch',
    },

    start_btn_frame:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
        backgroundColor: '#3C64E6',
        borderRadius: 22,
        flex: 0,
        alignSelf: 'stretch',
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 48,
    },

    start_text:{
        position: 'relative',

        fontFamily: 'SF Pro Text',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 25,
        color: '#ffffff',
    },
})


export default styles;