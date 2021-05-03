import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { MaterialIcons } from '@expo/vector-icons'; 

const posts = [
    {
        id: "1",
        name: "Nhat Duy",
        text: "Lorem dispsum kraka nonprnonpro buid kiku honto ananni yukio mangggeamanggge ghee gcung canh cua than ki cung canh, cung biet schoi game. Lorem dispsum kraka nonpro buid kiku honto ananni yukio manggge ghee gcung canh cua than ki cung canh, cung biet schoi game. Lorem dispsum kraka nonpro buid kiku honto ananni yukio manggge ghee gcung canh cua than ki cung canh, cung biet schoi game. Lorem dispsum kraka nonpro buid kiku honto ananni yukio manggge ghee gcung canh cua than ki cung canh, cung biet schoi game. Lorem dispsum kraka nonpro buid kiku honto ananni yukio manggge ghee gcung canh cua than ki cung canh, cung biet schoi game. Lorem dispsum kraka nonpro buid kiku honto ananni yukio manggge ghee gcung canh cua than ki cung canh, cung biet schoi game. Lorem dispsum kraka nonpro buid kiku honto ananni yukio manggge ghee gcung canh cua than ki cung canh, cung biet schoi game. ",
        timestamp: "VietNam",
        avatar: require("../assets/ninblue.jpg"),
        image: require("../assets/imglanding.jpg")
    },
    {
        id: "2",
        name: "Albedou",
        text: "Lorem dispsum kraka nonpro buid kiku honto ananni yukio manggge ghee gcung canh cua than ki cung ca.",
        timestamp: "Malaysia",
        avatar: require("../assets/albedo.png"),
        image: require("../assets/imgfeed.jpg")
    },
    {
        id: "3",
        name: "Razor",
        text: "Lorem dispsum kraka nonpro buid kiku honto ananni yukio manggge ghee gcung canh cua than ki cun.",
        timestamp: "Lao",
        avatar: require("../assets/razor.png"),
        image: require("../assets/imgsetting.jpg")
    },
    {
        id: "4",    
        name: "xiangling",
        text: "Lorem dispsum kraka nonpro buid kiku honto ananni yukio manggge.",
        timestamp: "Cambodia",
        avatar: require("../assets/xiangling.jpg"),
        image: require("../assets/liyue.jpg")
    },
    {
        id: "5",
        name: "Zhongli",
        text: "Lorem dispsum kraka nonpro buid kiku honto ananni yukio manggge ghe.",
        timestamp: "Japan",
        avatar: require("../assets/zhongli.png"),
        image: require("../assets/imgchat.jpg")
    },
    
];

export default class FeedScreen extends Component {

    renderPost = post => {
        return (
            <View style={styles.feedItem}>
                <Image source={post.avatar} style={styles.avatar} />

                <View style={{ flex : 1 }}>

                    <View style={{ flexDirection:"row", justifyContent:"space-between", alignItems:"center" }}>
                            <View>
                                <Text style={styles.name}>{post.name}</Text>
                                <Text style={styles.timestamp}>{post.timestamp}</Text>
                            </View>

                        <TouchableOpacity>
                            <MaterialIcons name="read-more" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                
                        <Text style={styles.post} >{post.text}</Text>
                        <Image source={post.image} style={styles.postImage} ></Image>


                        <View style={{flexDirection:"row"}}>
                            <TouchableOpacity>
                            <Ionicons name="heart-outline" size={30} style={{marginRight: 16}} ></Ionicons>
                            </TouchableOpacity>
                            
                            <TouchableOpacity>
                            <Ionicons name="chatbox-ellipses-outline" size={30} ></Ionicons>
                            </TouchableOpacity>

                        </View>
                </View>     
            </View>
        )
    }
    
    render() {

        return (
            
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.headerTitle}>
                        <Text style={{ fontWeight: "500 "}}>Feed</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.headerTitle}
                        onPress={() => this.props.navigation.navigate("PostScreen")}
                    >
                        <Text style={{ fontWeight: "500 "}}>Post</Text>
                    </TouchableOpacity>
                </View>

                <FlatList 
                    style={styles.feed}
                    data={posts}
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
