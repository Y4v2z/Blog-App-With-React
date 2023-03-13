import React, { Component } from 'react'

export class BlogForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.blog ? props.blog.title : "",
            description: props.blog ? props.blog.description : "",
            error: ""
        }
    }
    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState({} = ({
            title
        }))
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState({} = ({
            description
        }))

    }
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.title || !this.state.description) {
            this.setState({ error: "Please enter keywords" })
        } else {
            this.setState({ error: "" })
            this.props.onSubmit({
                title: this.state.title,
                description: this.state.description,
                dateAdded: Date.now()
            })
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <div>
                        <input
                            placeholder="Enter Title"
                            value={this.state.title}
                            onChange={this.onTitleChange}
                        />
                    </div>
                    <div>
                        <textarea
                            placeholder='Enter Description'
                            value={this.state.description}
                            onChange={this.onDescriptionChange}
                        ></textarea>
                    </div>
                    <button type='submit'>Save Changes</button>
                </form>
            </div>
        )
    }
}

export default BlogForm