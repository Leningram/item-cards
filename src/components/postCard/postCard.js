import React, { Component } from "react";
import "./postCard.css";

export default class PostCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <main className="posts--wrapper">
                <div className="post--card">
                    <h2 className="post--title">{this.props.title}</h2>
                    <article className="post--content">{this.props.body}</article>
                    <button onClick={() => this.props.onDelete(this.props.id)}>delete</button>
                </div>
            </main>
        );
    }
}
