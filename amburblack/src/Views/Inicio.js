import React, { Component } from 'react';

import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import Slider from "../Components/Slider"
import img1 from "../Resources/img/3.png"
import img2 from "../Resources/img/7.png"
import img3 from "../Resources/img/logo1.png"
import img4 from "../Resources/img/1.png"
import img5 from "../Resources/img/2.png"
import img6 from "../Resources/img/4.png"

class Inicio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: [
                img3,
                img1,
                img2,
            ],
            img2: [
                img4,
                img5,
                img6,
                img1,
                img2,
                img3,
            ]
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 0.5 }}></View>
                <Slider imagenes={this.state.img} slider={1} />
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text style={styles.text}>Promosiones del mes</Text>
                    {/* <Slider imagenes={this.state.img2} slider={2} /> */}
                    <FlatList
                        data={this.state.img2}
                        horizontal={true}
                        ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
                        renderItem={({ item }) => (
                            <View style={{flex:1,justifyContent:"center"}}>
                                <Image style={{width: 160, height: "55%"}} source={item}/>
                            </View>
                        )}
                        keyExtractor={item => item.key}
                    />
                </View>
                {/* <Image source={require("../Resources/img/7.png")} /> */}
            </View>
        );
    }
}
//hace esto para q quede mas automatico
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#282828",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 35,
        color: "orange"
    }
})

export default Inicio;