import React from 'react';
import { View, TextInput, Text } from 'react-native';

export const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, multiline, numberOfLines, editable, borderBottomColor }) => {
    let styles = {
        labelStyle: {
            color: 'black',
            textAlign: 'left',
            margin: 0,
            padding: 2
        },
        inputStyle: {
            textAlign: 'left',

            backgroundColor: '#fff',
            paddingTop: 8,
            paddingBottom: 8,
            paddingRight:10,
            paddingLeft:10,

            borderRadius: 5,
            color: "black",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },
        containerStyle: {
            minWidth: '80%',
            marginTop: 20,
        }
    };

    const { inputStyle, labelStyle, containerStyle } = styles;

    return (
        <View style={containerStyle}>
            {/* <Text style={labelStyle}>{label}</Text> */}
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                autoCorrect={false}
                multiline={multiline}
                numberOfLines={numberOfLines}
                style={inputStyle}
                editable={editable}
            />
        </View>
    );


};