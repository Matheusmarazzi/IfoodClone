import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    header:{
        width: '100%',
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    dropdown:{
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    local:{
        textAlign: 'center',
        fontSize: 16
    },
    bell:{
        width: '10%',
        alignSelf: 'flex-end'
    },
    categories:{
        width: '100%',
        flexDirection: 'row',
    },
    titleContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title:{
        fontSize: 22,
        fontWeight: 'bold'
    },
    seeMore:{
        color:'#e63a63',
        fontSize: 17,
    },
    subtitle:{
        marginVertical: 5,
        fontSize: 15,
        color:'#686868'
    },
    iconContainer:{
        maxWidth: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10
    },
    shopIcon:{
        width: '40%',
        height: 150,
        borderRadius: 100
    }
}) 