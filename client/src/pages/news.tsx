import React from 'react';
import PostItem from "./components/post/postItem";

function News() {

    return (
        <main>
            <section className="main_news">
                <div>
                    <h2>News</h2>
                </div>
                <div>
                    <PostItem src={"/img/Rectangle%2015.png"} title={"Был добавлен API"} date={"19.02.2023"} />
                </div>
            </section>
        </main>
    );
}

export default News