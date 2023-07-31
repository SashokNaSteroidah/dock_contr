import React, {useState} from 'react';
import {Link} from 'react-router-dom';

interface Props {
    src: string;
    title: string;
    date: string;
}

interface IPosts {
    src: string;
    alt?: string;
}

const ImageWithLoader = ({src, alt}: IPosts) => {
    const [loading, setLoading] = useState(true);

    const handleImageLoad = () => {
        setLoading(false);
    };

    return (
        <div className="image-with-loader">
            {loading && <div className="skeleton"></div>}
            <img src={src} alt={alt} onLoad={handleImageLoad} style={{display: loading ? 'none' : 'block'}}/>
        </div>
    );
};

const PostItem = ({src, title, date}: Props) => {
    return (
        <Link to="/">
            <ImageWithLoader src={src} alt=""/>
            <h3>{title}</h3>
            <p>{date}</p>
        </Link>
    );
};

export default PostItem;