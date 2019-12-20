import { Dimensions, StyleSheet } from 'react-native';
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    bg_primary: {
        backgroundColor: '#22252A',
        color:'#fff',
        alignItems:'center',
        flex:1,
    },

});
export default styles;