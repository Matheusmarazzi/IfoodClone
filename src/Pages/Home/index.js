import { StatusBar, Text, TouchableOpacity, View, Image } from "react-native"
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import styles from './style'
import CategoryButton from "../../Components/CategoryButton";



export default function Home() {
    return (
        <View style={{ backgroundColor: 'white', marginLeft: "2%", flex: 1 }}>
            <StatusBar backgroundColor='white' />
            <View style={styles.header}>
                <View style={styles.dropdown}>
                    <Text style={styles.local}>R. Timóteo Garcia Lamas</Text>
                    <TouchableOpacity>
                        <AntDesign name="down" size={12} color="red" />
                    </TouchableOpacity>
                </View>
                <SimpleLineIcons style={styles.bell} name="bell" size={24} color="#e63a63" />
            </View>
            <View style={styles.categories}>
                <CategoryButton size='46%' title='Restaurantes' icon={require('../../../assets/images/prato.png')} />
                <CategoryButton size='46%' title='Mercados' icon={require('../../../assets/images/compras.png')} />
            </View>
            <View style={styles.categories}>
                <CategoryButton size='46%' title='Farmácias' icon={require('../../../assets/images/primeirosS.png')} />
                <CategoryButton size='23%' title='Pet Shop' icon={require('../../../assets/images/pet.png')} />
                <CategoryButton size='23%' title='Bebidas' icon={require('../../../assets/images/cerveja.png')} />
            </View>
            <View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Taxa na faixa</Text>
                    <TouchableOpacity>
                        <Text style={styles.seeMore}>Ver mais</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.subtitle}>A taxa é cortesia para você</Text>
                <View style={styles.iconContainer}>
                    <Image style={styles.shopIcon} source={require('../../../assets/images/leon.png')} />
                    <Image style={styles.shopIcon} source={require('../../../assets/images/delicia.png')} />
                </View>
            </View>
            <View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Famosos no iFood</Text>
                    <TouchableOpacity>
                        <Text style={styles.seeMore}>Ver mais</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.subtitle}>Marcas famosas</Text>
                <View style={styles.iconContainer}>
                    <Image style={styles.shopIcon} source={require('../../../assets/images/habibs.png')} />
                    <Image style={styles.shopIcon} source={require('../../../assets/images/mc.png')} />
                </View>
            </View>

        </View>
    )
}