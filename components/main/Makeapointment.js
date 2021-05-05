import React, { useState, useEffect } from 'react';
import { Image, View, Platform, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Text, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';

import firebase from 'firebase'
require("firebase/firestore")
require("firebase/firebase-storage")

export default function ImagePickerExample() {

    const [image, setImage] = useState(null);
    const [ name , setName ] = useState(null);
    const [ title , setTitle ] = useState(null);
    const [ description , setDescription ] = useState(null);
    const [ time , setTime ] = useState(null);
    const [ address , setAddress ] = useState(null);


    const [ uploadding, setUploading ] = useState(false);
    const [ transferred, setTransferred ] = useState(null);
    useEffect(() => {
        (async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
        })();
    },  []);
    const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

        if (!result.cancelled) {
            setImage(result.uri)
        }
    };

    const handleSave = async () => {
        const imageUri = image;
        const response = await fetch(imageUri);
        const blob = await response.blob();

        const task = firebase
            .storage()
            .ref()
            .child(`${firebase.auth().currentUser.uid}/${Math.random().toString(36)}`)
            .put(blob);
        const taskProgess = snapshot => {
            console.log(`transferred: ${snapshot.bytesTransferred}`)
        }

        const taskCompleted = snapshot => {
                console.log(snapshot);
          
        }
        const taskError = snapshot => {
            console.log(snapshot)
        }
        task.on("state_changed", taskProgess, taskCompleted, taskError);
        
    }

        return (
            <SafeAreaView style={styles.container}>
                {/* Back and Post button */}
                <View style={styles.header}>

                    {/* <TouchableOpacity onPress={() => navigation.goBack()} >
                        <Ionicons
                            name= "md-arrow-back"
                            size={24}
                            color="#D8D9DB"
                        ></Ionicons>
                    </TouchableOpacity> */}

                    <TouchableOpacity 
                        onPress={handleSave}>

                        <Text style={{ fontWeight: "500 "}}>Save</Text>
                    </TouchableOpacity>

                </View>
                {/* Write description */}
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>WITH:</Text>
                    <TextInput 
                        autoFocus={true} 
                        multiline={true}
                        numberOfLines={4}
                        style={{flex:1}}
                        placeholder="Name..."
                        onChangeText={(name) => setName(name)}
                        value={name}
                    ></TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>TITLE:</Text>
                    <TextInput 
                        autoFocus={true} 
                        multiline={true}
                        numberOfLines={4}
                        style={{flex:1}}
                        placeholder="Write the TITLE..."
                        onChangeText={(title) => setTitle(title)}
                        value={title}
                    ></TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>TIME:</Text>
                    <TextInput 
                        autoFocus={true} 
                        multiline={true}
                        numberOfLines={4}
                        style={{flex:1}}
                        placeholder="Set time..."
                        onChangeText={(time) => setTime(time)}
                        value={time}
                    ></TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>Address:</Text>
                    <TextInput 
                        autoFocus={true} 
                        multiline={true}
                        numberOfLines={4}
                        style={{flex:1}}
                        placeholder="Address..."
                        onChangeText={(address) => setAddress(address)}
                        value={address}
                    ></TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>Write the DESCRIPTION about the article:</Text>
                    <TextInput 
                        autoFocus={true} 
                        multiline={true}
                        numberOfLines={4}
                        style={{flex:2}}
                        placeholder="Write the DESCRIPTION..."
                        onChangeText={(description) => setDescription(description)}
                        value={description}
                    ></TextInput>
                </View>

                
                {/* Pick image + image */}
                <TouchableOpacity style={styles.photo} onPress={pickImage} >
                    <Ionicons name="md-camera" size={32} color="#D8D9DB"> </Ionicons>
                </TouchableOpacity>

                <View style={styles.imageContainer}>
                    {image && <Image source={{ uri: image }} style={styles.image} />}
                </View>
                {/* Flatlist */}

            </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#D8D9DB"
    },
    inputContainer: {
        flexDirection:'column',
        margin: 32,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius:24,
        marginRight: 16
    },
    photo: {
        alignItems: "flex-end",
        marginHorizontal: 32,
    },
    imageContainer: {
        marginHorizontal: 32,
        marginTop: 32,
        height: 150
    },
    image: {
        width: "100%",
        height: 270
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase",
    },
})