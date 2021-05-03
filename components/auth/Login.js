import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Image } from 'react-native';


import firebase from 'firebase'

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            errorMessage: null
        }
        this.onSignIn = this.onSignIn.bind(this)
    }

    onSignIn() {
        const { email, password } = this.state
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            console.log(result)
        })
        .catch((error => this.setState({errorMessage: error.message})))
    }

    render() {
        return (
            <View style={styles.container}>
                <Image 
                    style={styles.imgLanding}  
                    source={require("../assets/logo.png")}></Image>
                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>}
                </View>


                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Username</Text>
                        <TextInput style={styles.input} 
                            autoCapitalize="none"
                            placeholder="Enter your email"
                            onChangeText={(email) => this.setState({ email })}
                        />
                    </View>

                    <View style={{marginTop: 32}}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput style={styles.input}
                            autoCapitalize="none"
                            placeholder="Enter your password"
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({ password })}
                        />
                    </View>

                    <View style={{marginTop: 32}} >
                        <TouchableOpacity style={styles.button}
                            title="Sign In"
                            onPress={() => this.onSignIn()}
                        >
                        <Text style={{ color: "#FFF"}}>Sign In</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <TouchableOpacity style={styles.signup}
                    onPress={() => this.props.navigation.navigate("Register")}>
                    <Text>Create new account? <Text style={styles.signup}>Sign up</Text>
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    errorMessage: {
        justifyContent: "center",
        alignItems:"center"
    },
    error: {
        color: "#E9446A",
        fontSize: 12,
        fontWeight: "600",
        textAlign: "center"
    },
    form: {
        marginTop: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color:"#161F3D"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        justifyContent: "center",
        alignItems: "center"
    },
    imgLanding: {
        width: "100%",
        height: 200,
        marginTop: 50
    },
    signup: {
        marginTop: 10,
        fontWeight: "500",
        alignItems:'center'
    }

});

export default Login

