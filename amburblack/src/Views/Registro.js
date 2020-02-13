import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Image, Keyboard } from 'react-native';
import { Button, Input } from "../Components/Common/Index"
import { API, URL_API } from '../API/api';

export default class Registro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nameUser: "",
            email: "",
            password1: "",
            password2: "",

        }
    }

    async validar() {// recorda q bos tenes variables con nombre diferentes creo
        const { push } = this.props.navigation;
        let { nameUser, email, password1, password2 } = this.state;

        let usuarios = []
        usuarios = await API.GET(`${URL_API}/usuario`).then(({ data }) => data.data)

        for(let i = 0; i < usuarios.length; i++){
            if (usuarios[i].email == email) {
                alert("Este correo ya existe")
                return
            }
        }

        if (nameUser == "" || email == "" || password1 == "" || password2 == "") {
            alert("Todos los campos deben ser llenados")
            return
        }
        let isEmail = false;
        for (let i = 0; i < email.length; i++) {
            if (email[i] == "@") {
                isEmail = true;
                break;
            }
        }

        if (!isEmail) {
            alert("Correo invalido")
            return
        }

        if (password1 != password2) {
            alert("Las contraseñas no coinciden")
            return
        }

        if (password1.length < 8) {
            alert("Debe ingresar minimo 8 caracteres")
            return
        }

        let usuario = {
            nameUser,
            email,
            password: password1
        }

        API.POST(`${URL_API}/usuario`, usuario)
            .then(({ data }) => {
                if (data.ok) {
                    alert("Registro éxito.")
                    push("Login")
                }
            })

    }

    render() {
        const { push } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, justifyContent: "flex-end" }}>
                    {Keyboard ? <Image style={{ height: 120, width: 250 }} source={require("../Resources/img/logo1.png")} /> : <View />}
                </View>
                <View style={styles.viewInput}>
                    <View style={{ justifyContent: "flex-end" }}>
                        <Input
                            placeholder={"USUARIO"}
                            borderBottomColor={"#FFCB34"}
                            onChangeText={(nameUser) => this.setState({ nameUser })}
                        />
                    </View>

                    <View style={{ justifyContent: "flex-end" }}>
                        <Input
                            placeholder={"E-MAIL"}
                            borderBottomColor={"#FFCB34"}
                            onChangeText={(email) => this.setState({ email })}
                        />
                    </View>
                    <View style={{ justifyContent: "flex-end" }}>
                        <Input
                            placeholder={"CONTRASEÑA"}
                            borderBottomColor={"#FFCB34"}
                            secureTextEntry
                            onChangeText={(password1) => this.setState({ password1 })}
                        />
                    </View>

                    <View style={{ justifyContent: "flex-end" }}>
                        <Input
                            placeholder={"REPITA CONTRASEÑA"}
                            borderBottomColor={"#FFCB34"}
                            secureTextEntry
                            onChangeText={(password2) => this.setState({ password2 })}
                        />
                    </View>
                </View>
                <View style={styles.viewButton}>
                    <Button
                        title="Ingresar"
                        onPress={() => push("Login")}//solo copia esto
                        colorText={"black"}
                        bgColor={"#FFCC33"}
                    />
                    <Button
                        title="Registrar"
                        onPress={() => this.validar()}
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
        height: 50,
    },
    viewInput: {
        flex: 1.8,
        marginVertical: 20,
        width: "60%",
        justifyContent: "center"
    },
    text: {
        color: "black",

    },
    viewButton: {
        flex: 0.5,
        flexDirection: "row",
        justifyContent: "center",
        // marginTop:40,
    }
});
