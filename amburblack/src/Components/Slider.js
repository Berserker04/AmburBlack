import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from "react-native"
import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    Slider = () => (
        this.props.imagenes.map((item, i) =>
            // <Slider uri={item} key={i} s />
            <Image key={i} style={styles.image,this.props.slider==2?{width:200,height:200,alignSelf:"center"}:{width:"90%",height:"90%",alignSelf:"center"}} source={item} />
        )
    );

    render() {
        return (
            <View style={{ flex: 1,justifyContent:"center",alignItems:"center" }}>
                <Swiper autoplay height={240} style={{justifyContent:"center",alignItems:"center"}}>
                    {this.Slider()}
                </Swiper>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    image: {
        flex: 1,
        width
    }
})