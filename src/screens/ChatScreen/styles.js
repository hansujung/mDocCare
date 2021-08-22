import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    carContainer : { 
        width: '100%',
        height: '100%',
    
      },
      titles: {
        marginTop: '25%',
        width: '100%',
        alignItems: 'center',
    
      },
      title: {
        fontSize: 30,
        fontWeight: 'bold',
      },
      subtitle: { 
        marginTop: '2%',
        fontSize: 20,
      },
      image: { 
        width:'100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
      },
      help: { 
        marginTop: '-2%',
        width: '100%',
        alignItems: 'center',
      },
      helptext: {
        color: 'rgb(160,160,160)',
      },
      buttonsContainer: {
        position: 'absolute',
        bottom: -10,
        width: '100%',
      },
      bottomhelp:{
        position: 'absolute',
        width: '100%',
        alignItems: 'center',
        bottom: 90,

      },
});

export default styles;