import React from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from "./_components/Posts";
import AddPost from "./_components/AddPost";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(res => this.setState({ posts: res }))
            .catch(err => {
                alert('An Error Has Occured during data fetching');
            })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="Logo"/>
                </header>
                <div className="container">
                    <AddPost/>
                    <Posts posts={this.state.posts}/>
                </div>
            </div>
        );
    }
}

export default App;
