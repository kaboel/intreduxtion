import React from 'react';
import PostItem from "./PostItem";

class Posts extends React.Component {
    render() {
        return this.props.posts
            .slice(0)
            .reverse()
            .map(post => (

                <div key={post.id}>
                    <h3>Posts - #{post.id}</h3>
                    <PostItem post={post}/>
                </div>

            ))
    }
}

export default Posts;
