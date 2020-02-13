import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { Button, Input } from "../Components/Common/Index";
import { API, URL_API } from "../API/api"

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nameUser: "",
      password: "",
      usuarios: []
    }
  }

  componentDidMount() {
    this.loadDara()
  }

  loadDara() {
    API.GET(`${URL_API}/usuario`)
      .then(({ data }) => {
        if (data.ok) {
          this.setState({ usuarios: data.data })
        }
      })
  }

  async validar() {
    await this.loadDara()
    let { nameUser, password, usuarios } = this.state;
    let isValidate = false;
    let userCorrect = false;
    usuarios.forEach(e => {
      if (e.nameUser == nameUser && password == e.password) {
        isValidate = true;
        this.props.navigation.navigate("Inicio")
        return
      }
      if (e.nameUser == nameUser) {
        userCorrect = true;
      }
    })
    if (userCorrect) {
      alert("Contraseña incorrecta")
      return
    }
    if (!isValidate) {
      alert("Usuario ó contraseña incorrecto")
    }
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Image style={{ height: 120, width: 250 }} source={require("../Resources/img/logo1.png")} />
        </View>
        <View style={styles.viewInput}>
          <View style={{ marginVertical: 15, justifyContent: "flex-end" }}>
            <Input
              placeholder={"INGRESA TU USUARIO"}
              borderBottomColor={"#FFCB34"}
              onChangeText={(nameUser) => this.setState({ nameUser })}
            />
          </View>

          <View style={{}}>
            <Input
              placeholder={"INGRESA TU CONTRASEÑA"}
              borderBottomColor={"#FFCB34"}
              secureTextEntry
              onChangeText={(password) => this.setState({ password })}
            />
          </View>
        </View>
        <View style={styles.viewButton}>
          <Button
            title="Ingresar"
            onPress={() => this.validar()}
            colorText={"black"}
            bgColor={"#FFCC33"}
          />
          <Button
            title="Registrar"
            onPress={() => navigate("Registro")}
            colorText={"black"}
            bgColor={"#FFCC33"}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#000000",
  },
  inpu: {
    borderBottomWidth: 1,
    borderBottomColor: "orange",
    height: 50
  },
  viewInput: {
    flex: 1,
    marginVertical: 20,
    width: "60%",
  },
  text: {
    color: "black",

  },
  viewButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  }
});
