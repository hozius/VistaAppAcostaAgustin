import React from 'react'

import { View, Text, Button, Image } from 'react-native'
import { colors } from '../../constants/themes';
import { styles } from './styles'

const Products = ({ navigation, route }) => {
    const { product } = route.params;
    const { name, description, price, weight, image } = product;
    return (
        <View style={styles.container}>
            <Image resizeMode='contain' style={styles.image} source={image}/>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.description}>Unidad: {weight}</Text>
            <Text style={styles.price}>${price}</Text>
            <Button title="Comprar" onPress={() => null} color={colors.primaryColor}/>
        </View>
    )
}

export default Products