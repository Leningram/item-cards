import React, { Component } from "react";
import PostAdd from "./components/postAdd/postAdd";
import PostCard from "./components/postCard/postCard";
import "./App.css";

const posts = localStorage.getItem("posts") ? JSON.parse(localStorage.getItem("posts")) : [];
console.log(posts);

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: posts
        };
    }

    addPost = () => {
        // функция для геренации случайного id поста
        function generateId() {
            const id = Math.random().toString(36).substr(2, 10);
            return id;
        }

        const title = "Hello World!";
        const body = "Lorem Ipsum...";
        const newPost = {
            id: generateId(),
            title,
            body
        };
        posts.push(newPost);
        localStorage.setItem("posts", JSON.stringify(posts));
        this.setState({ posts });
    };

    deletePost = (id) => {
        this.setState(({ posts }) => {
            const index = posts.indexOf(posts.find((post) => post.id === id));
            const newArr = [...posts.slice(0, index), ...posts.slice(index + 1)]; //создаем новый массив без элемента с нужным индексом
            localStorage.setItem("posts", JSON.stringify(newArr)); //перезаписываем новый массив в localStorage

            return {
                posts: newArr
            };
        });
    };

    render() {
        const cards = this.state.posts.map((item) => {
            return (
                <PostCard id={item.id} key={item.id} title={item.title} body={item.body} onDelete={this.deletePost} />
            );
        });
        return (
            <>
                <PostAdd />
                {cards}
            </>
        );
    }
}
