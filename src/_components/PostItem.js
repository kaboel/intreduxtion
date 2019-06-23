import React from 'react';

class PostItem extends React.Component {
    render() {
        return (
            <div className="post">
                <h2 className="title">{ this.props.post.title }</h2>
                <p className="body">{ this.props.post.body }</p>
            </div>
        )
    }
}

export default PostItem;
