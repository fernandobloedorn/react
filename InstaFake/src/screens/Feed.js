import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, FlatList, SafeAreaView } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component {
    // state = {
    //         }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <Header />
                <FlatList 
                    data={this.props.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({item}) =>
                        <Post key={item.id} {...item} />
                    }
                />
            </SafeAreaView>
        )
    }

}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#F5FCFF'
    }
})

// export default Feed

const mapStateToProps = ({ posts }) => {
    return {
        posts: posts.posts
    }
}

export default connect(mapStateToProps)(Feed)