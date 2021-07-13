import React from "react";
import PostAdd from "./components/postAdd/postAdd";
import PostView from "./components/postView/postView";
import PostCard from "./components/postCard/postCard";
import "./App.css";
import { useSelector } from "react-redux";

const App = () => {
    const posts = useSelector((state) => state.posts);
    const showPost = useSelector((state) => state.showPost);

    const cards = posts.map((item) => {
        return <PostCard id={item.id} key={item.id} title={item.title} body={item.body} />;
    });
    return (
        <>
            <PostView className={showPost ? "post--opened show" : "post--opened"} />
            <PostAdd />
            {cards}
        </>
    );
};

export default App;
