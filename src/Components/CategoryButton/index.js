import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function CategoryButton({size, title, icon}){
    const styles = StyleSheet.create({
        container:{
            margin: '2%',
            width: size,
            height: 90,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderRadius: 4,
            backgroundColor: 'rgba(245,245,245,160)',
        },
        image:{
            width: 90,
            height: 90,
            marginRight: 10,
            objectFit: 'contain'
        },
        miniContainer:{
            margin: '1%',
            width: size,
            height: 90,
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRadius: 4,
            backgroundColor: 'rgba(245,245,245,160)',
           
        },
        miniImage:{
            width: 90,
            height: 70,
            marginRight: 10,
            objectFit: 'contain'
        },
    });

    return (parseInt(size) > 30) ? (
        <TouchableOpacity style={styles.container}>
            <Text>{title}</Text>
            <Image style={styles.image} source={icon}/>
        </TouchableOpacity>
    ):(
        <TouchableOpacity style={styles.miniContainer}>
            <Image style={styles.miniImage} source={icon}/>
            <Text style={{ textAlign: 'center'}}>{title}</Text>
        </TouchableOpacity>
    )

    
}
