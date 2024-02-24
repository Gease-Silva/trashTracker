import { StyleSheet } from "react-native";

export default StyleSheet.create({
    content:{
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        width: '100vw',
        height: '90vh',
        padding: 10
    },
    container:{
        flex: 1,
        height: '100vh',
        width: '100vw',
    },
    menu:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10
    },
    containerMenu:{
        width: '100%',
        height: '10vh',
        alignItems: 'center',
        alignContent: 'center'
    },
    menuItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
