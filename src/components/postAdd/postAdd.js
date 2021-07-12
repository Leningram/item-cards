import React, { Component } from "react";

export default class PostAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            id: ""
        };
    }

    render() {
        return (
            <>
                <input type="text" />
                <input type="text" />
                <button>Добавить</button>
            </>
        );
    }
}
