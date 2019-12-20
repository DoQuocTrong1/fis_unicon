import { Dimensions, StyleSheet } from 'react-native';
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    bg_primary: {
        backgroundColor: '#22252A',
        color:'#fff',
        alignItems:'center',
        flex:1,
    },
    login_logo: {
        marginTop: 150,
        alignItems:'center',
    },
    logo:{
        width: 200,
        height: 105,
        marginBottom:10
    },
    txt_logo:{
        fontSize:20,
        color:'#fff',
        marginBottom:30,
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#22252A',
        borderColor:'#fff',
        borderWidth:1,
        margin:5,
        borderRadius:10,
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor:'#22252A',
        color: '#fff',
        width: '80%',
    },
    btn_login:{
        backgroundColor:'#F17128',
        alignItems: 'center',
        borderColor:'#F17128',
        width:'90%',
        height:60,
        paddingTop: 15,
        margin:10,
        borderRadius:5,
    },
    txt_btnLogin:{
        color:'#fff',
        textAlign:'center',
        fontSize:16,
    },
    btn_gotpass:{  
        alignItems: 'center',
        backgroundColor: '#22252A',
        marginTop: 20,
    },
    txt_forgotpass:{
        color:'#F17128',
        fontSize:16,
    },
    alert_success:{
        width:'90%',
        height:80,
        backgroundColor:'rgba(4,164,33,0.2)',
        borderRadius: 10,
        margin:5,
    },
    txt_alert:{
        color:'#41c300',
        fontSize:16,
        margin:5,
        textAlign:'center',
    },
});
export default styles;