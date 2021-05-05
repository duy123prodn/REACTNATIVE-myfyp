import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { MaterialIcons } from '@expo/vector-icons'; 
import { Link } from '@react-navigation/native';
import { AntDesign , Feather } from '@expo/vector-icons'; 

const list = [
    {
        id: "1",
        name: "John Henry",
        title: "For Treatment",
        description:"To date, there is no evidence or information that the virus that causes COVID-19 is transmitted by flies, mosquitoes. The virus that causes COVID-19 is spread mainly through droplets when an infected person coughs, sneezes, or speaks. You can also become infected by touching a contaminated surface and then touching your eyes, nose, or mouth. To protect yourself, perform social distancing, disinfect frequently touched surfaces, clean your hands thoroughly and often, avoid touching your eyes, mouth, and nose.",
        time:"10/5/2021",
        address:"21 Tran Hung Dao Street",
        image: require("../assets/imglanding.jpg")
    },
    
    
];

export default class Apointment extends Component {

    renderPost = list => {
        return (
            <View style={styles.feedItem}>
                {/* <Image source={post.avatar} style={styles.avatar} /> */}

                <View style={{ flex : 1 }}>

                    <View style={{ flexDirection:"row", justifyContent:"space-between", alignItems:"center" }}>
                        <View>
                            <Text style={styles.name}>With: {list.name}</Text>
                            <Text>Title: {list.title}</Text>
                            <Text>Time:{list.time}</Text>
                            <Text>Address:{list.address}</Text>
                        </View>
                    <TouchableOpacity>
                        <MaterialIcons name="read-more" size={24} color="black" />
                    </TouchableOpacity>
                
                    </View>
                <Text>Description:</Text>
                <Text style={styles.post} >{list.description}</Text>
                <Image source={list.image} style={styles.postImage} ></Image>


                {/* <View style={{flexDirection:"row"}}>
                    <TouchableOpacity>
                    <Ionicons name="heart-outline" size={30} style={{marginRight: 16}} ></Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Ionicons name="chatbox-ellipses-outline" size={30} ></Ionicons>
                    </TouchableOpacity>

                </View> */}


                </View>
            </View>
        )
    }
    
    render() {

        return (
            
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.headerTitle}>
                        <Text style={{ fontWeight: "500 "}}>Apointment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.headerTitle}
                        onPress={() => this.props.navigation.navigate("History")}
                    >
                        <Text style={{ fontWeight: "500 "}}>History</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row', justifyContent:"flex-end", marginRight: 20, marginTop:5}}>

                    <TouchableOpacity 
                        style={{ marginRight:20}}
                        onPress={() => this.props.navigation.navigate("Makeapointment")}
                    >
                        <AntDesign name="plus" size={24} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginRight:20}}>
                        <Feather name="more-vertical" size={24} color="black" />
                    </TouchableOpacity>

                </View>

                <FlatList 
                    style={styles.feed}
                    data={list}
                    renderItem={({item}) => this.renderPost(item)} 
                    keyExtractors={item => item.id} 
                    showsVerticalScrollIndicator={false}
                ></FlatList>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#EFECF4"

    },
    header: {
        paddingTop: 25,
        paddingBottom: 18,
        backgroundColor: "#FFF",
        flexDirection:"row",
        justifyContent:'space-around',
        borderBottomWidth: 1,
        borderBottomColor: "#E8ECF4",
        shadowColor:"#454D65",
        shadowOffset: {height: 5},
        shadowRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 10
        
    },
    headerTitle: {
        width: 170,
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#61dafb",
        color: "#20232a",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    },
    feed: {
        marginHorizontal: 10
    },
    feedItem: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 8,
        flexDirection: "row",
        marginVertical: 8
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 10
    },
    name: {
        fontSize: 15,
        fontWeight: "500",
        color: "#454D65",
    },
    timestamp: {
        fontSize: 11,
        color: "#C4C6CE",
        marginTop: 4
    },
    post: {
        marginTop: 16,
        fontSize: 14,
        color:"#C4C6CE"
    },
    postImage: {
        width: undefined,
        height: 159,
        borderRadius: 5,
        marginVertical: 10
    }
})
