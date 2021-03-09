import React, { Component } from 'react'
import Title from './Title'
import './Photowall'
import Photowall from './Photowall'
import AddPhoto from './AddPhoto'
import { Route } from 'react-router-dom'
import Photo from './Photo'

class Main extends Component {
    constructor() {
        super()
    }
    render() {
        console.log(this.props.posts)
        return <div>

            <Route exact path='/' render={() => (
                <div>
                    <Title></Title>
                    <Photowall posts={this.props.posts} ></Photowall>
                </div>

            )}></Route>

            {/* <Route path='/AddPhoto' render={({ history }) => (
                <AddPhoto onSubmit={(post) => {
                    this.addPhoto(post)
                    history.push('/')
                }}></AddPhoto>
            )}></Route> */}
        </div>
    }
}

export default Main