import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "./pages/main";
import Dev_blog from "./pages/dev_blog";
import Header from "./component/Header";
import About from "./pages/about";
import News from "./pages/news";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Footer from "./component/Footer";
import Document_change from "./pages/document_change";
// import Not_found from "./pages/not_found";
import Cabinet from "./pages/cabinet";
import Create_choose from "./pages/create_choose";
import Add_news from "./pages/add_news";

function App() {

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/dev-blog" element={<Dev_blog />} />
                <Route path="/about" element={<About />} />
                <Route path="/news" element={<News />} />
                <Route path="/sign-in" element={<Signin />} />
                <Route path="/sign-up" element={<Signup />} />
                <Route path="/construct" element={<Document_change />}/>
                {/*<Route path="*" element={<Not_found />}/>*/}
                <Route path="cabinet" element={<Cabinet />}/>
                <Route path="create-choose" element={<Create_choose />}/>
                <Route path="add_news" element={<Add_news />}/>
            </Routes>
            <Footer />
        </>
    );
}

export default App

