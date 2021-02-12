import { ADD_POST, ADD_COMMENT } from '../actions/actionTypes'

const initialState = {
    posts: [
        {
            id: Math.random(),
            nickname: 'John Snow',
            email: 'johnsonw@winterfell.com',
            image: require('../../../assets/imgs/fence.jpg'),
            comments: [
                {
                    nickname: 'Arya Stark',
                    comment: 'Uau!!!',
                },
                {
                    nickname: 'Cersei Lannister',
                    comment: 'Que foto massa!',
                }
            ]
        },
        {
            id: Math.random(),
            nickname: 'Daenerys Targaryen',
            email: 'daenerys@montadanumdragao.com',
            image: require('../../../assets/imgs/bw.jpg'),
            comments: [
                {
                    nickname: 'Arya Stark',
                    comment: 'Voa!',
                },
                {
                    nickname: 'Cersei Lannister',
                    comment: 'Olha o fogo liquido!',
                }
            ]
        }
    ]

}

const reducer  = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        case ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.payload.postId) {
                        if (post.comments) {
                            post.comments = post.comments.concat(
                                action.payload.comment
                            )
                        } else {
                            post.comments = [action.payload.comment]
                        }
                    }
                    return post
                })
            }
        default:
            return state
    }
}

export default reducer