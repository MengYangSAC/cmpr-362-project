import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";

const DATA = [
    {
        user_name: 'Test Profile',
        user_image: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/befbcde0-9b36-11e6-95b9-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg',
        feed_image: 'https://images.unsplash.com/photo-1610878180933-123728745d22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    },
    {
        user_name: 'Test Profile 2',
        user_image: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/befbcde0-9b36-11e6-95b9-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg',
        feed_image: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg',
    },
    {
        user_name: 'Test Profile 3',
        user_image: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/befbcde0-9b36-11e6-95b9-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg',
        feed_image: 'https://i.pinimg.com/550x/a7/3d/6e/a73d6e4ac85c6a822841e449b24c78e1.jpg',
    },
    {
        user_name: 'Test Profile 4',
        user_image: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/befbcde0-9b36-11e6-95b9-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg',
        feed_image: 'https://images.unsplash.com/photo-1546587348-d12660c30c50?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJhbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    },
]

function Item({user_name, user_image, feed_image}) {
    return(
        <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <View style={styles.headerLeft}>
                            <Image
                                style={styles.userImage}
                                source={{
                                    uri: user_image,
                                }}
                            />
                            <Text style={styles.userName}>{user_name}</Text>
                        </View>
                        <View style={styles.headerRight}>
                        </View>
                    </View>
                    <Image
                        style={styles.feedImage}
                        source={{
                            uri: feed_image,
                        }}
                    />
                </View>
    );
}
const Timeline = () => {

    return (
        <View style={styles.container}>

        <FlatList
            data={DATA}
            renderItem={({item}) => <Item user_name={item.user_name}
            user_image={item.user_image}
            feed_image={item.feed_image} />}
            keyExtractor={item => item.id}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'fbfbfb',
    },
    card: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 10
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerLeft: {
        flexDirection: 'row',
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 50/2
    },
    userName: {
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 15
    },
    feedImage: {
        height: 300,
        borderRadius: 10,
        marginVertical: 10
    }
});
export default Timeline