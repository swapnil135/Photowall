import React, { Component } from 'react'

class AddPhoto extends Component {
    constructor() {
        super();
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }

    onHandleSubmit(event) {
        event.preventDefault(); //prevents reloading of the page by default
        const imageLink = event.target.elements.link.value
        const caption = event.target.elements.caption.value
        const newPost = {
            id: Number(new Date()),
            description: caption,
            imageLink: imageLink
        }
        if (imageLink && caption) {
            this.props.onSubmit(newPost)
        }
    }
    render() {
        return (
            <div>

                <h1>Photowall</h1>
                <div className='form'>

                    <form onSubmit={this.onHandleSubmit}>
                        <input type='text' placeholder='Link' name='link'></input>
                        <input type='text' placeholder='Caption' name='caption'></input>
                        <button>Post</button>
                    </form>
                </div>
            </div>

        )
    }
}
export default AddPhoto