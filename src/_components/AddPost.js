import React from 'react';

class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const title = this.state.title;
        const body = this.state.body;
        const post = {title, body};

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
            .then(res => alert(`Post - #${res.id} added.`))
    }

    render() {
        return (
            <div>
                <h3>AddPost</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="input-field">
                        <label htmlFor="title">Title</label><br/>
                        <input type="text"
                               name="title"
                               id="title"
                               value={ this.state.title }
                               onChange={this.onChange}
                        />
                    </div>

                    <div className="input-field">
                        <label htmlFor="body">Body</label><br/>
                        <textarea id="body"
                                  name="body"
                                  value={this.state.body}
                                  onChange={this.onChange}
                        />
                    </div>

                    <div className="input-field">
                        <input type="submit" value="Submit" />
                    </div>
                </form>

                <hr/>
            </div>
        )
    }
}

export default AddPost;
