import { View, Image, Pressable, Text, StyleSheet } from "react-native"
import {useState} from 'react'
import {recipes} from '../data/recipes'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center'
    },
    image: {
      width: 200,
      height: 200,
      borderRadius:10
    },
    button: {
        width: 200,
        height: 50,
        justifyContent:'center',
        alignItems: 'center',
        borderWidth:2,
        marginTop: 5,
    },
    buttons: {
        width: 200,
        height: 200,
    },
    centeredText: {
        justifyContent: 'center'
    }
  });
export const Gallery = () => {
    const [recipeIndex, setRecipeIndex] = useState(0);
    const handleNext = () => {
        const updateValue = recipeIndex >= recipes.length - 1 ? 0 : recipeIndex + 1;
        setRecipeIndex(updateValue);
    }
    const handlePrev = () => {
        const updateValue = recipeIndex <= 0 ? recipes.length - 1 : recipeIndex - 1;
        setRecipeIndex(updateValue)
    }
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: recipes[recipeIndex].image}} />
            <View style={styles.buttons}>
                <Pressable style={styles.button} onPress={() => handlePrev()}>
                    <Text style={styles.centeredText}>Next</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => handleNext()}>
                    <Text style={styles.centeredText}>Prev</Text>
                </Pressable>
            </View>
        </View>
    );
}