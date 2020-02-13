import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export const Button = ({ onPress, title, bgColor, colorText, colorBorder, fontSize }) => {
  console.log(title);

  return (
    // <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          flex: 1,
          maxWidth:'40%',
          backgroundColor: bgColor || "black",
          borderRadius: 5,
          paddingTop: 5,
          paddingBottom: 5,
          justifyContent: "center",
          alignItems: "center",
          borderColor: colorBorder || 'transparent',
          borderWidth: 1,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          height:50,
        }}
      >
        <Text
          style={{
            color: colorText || "black",
            fontSize: fontSize || 19,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    // </View>
  );
};