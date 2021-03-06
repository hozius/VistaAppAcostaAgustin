import React from 'react'
import { FlatList, View } from 'react-native'
import { styles } from './styles'
import { CATEGORIES } from '../../constants/categories'
import CategoryGrid from '../../components/molecules/category-grid/index'
import Header from '../../components/header';

const Home = ({ navigation  }) => {
    const handleSelectCategory = (category) => {
        navigation.navigate('Category', { id: category.id, name: category.name })
    }
    const renderItem = ({ item }) => <CategoryGrid item={item} onSelected={handleSelectCategory} />

    return (
        <View style={styles.container}>
            <Header title='App Panadería TP3' />
            <FlatList 
                data={CATEGORIES}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}

export default Home