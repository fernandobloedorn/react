import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    StyleSheet,
    View,
    Dimensions,
    Image
} from 'react-native'
import Author from './Author'
import Comments from './Comments'
import AddComment from './AddComment'

class Post extends Component {
    render() {
        const addCom = this.props.name ? 
            <AddComment postId={this.props.id} /> 
            : <></>
        return (
            <View style={styles.container}>
                <Image source={this.props.image} style={styles.image} />
                <Author email={this.props.email} 
                    nickname={this.props.nickname} />
                <Comments comments={this.props.comments} />
                {addCom}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       justifyContent: 'flex-start'
    },
    image: {
        height:  Dimensions.get('window').width * 3/4,
        width: Dimensions.get('window').width,
        resizeMode: 'contain',
        // backgroundColor: '#FF0000'
    }
})

const mapStateToProps = ({ user }) => {
    return {
        name: user.name
    }
}

// export default Post
export default connect(mapStateToProps)(Post)