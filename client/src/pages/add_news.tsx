import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios, { AxiosResponse } from 'axios';

function Add_news() {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [shortDescription, setShortDescription] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [image, setImage] = useState<File | null>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('short_description', shortDescription);
        formData.append('date', date);
        if (image) {
            formData.append('image', image);
        }

        axios.post('/api/news', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response: AxiosResponse) => {
                console.log(response.data);
                // здесь можно обновить список новостей на странице
            })
            .catch((error: any) => {
                console.error(error);
            });
    }

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setImage(event.target.files[0]);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Заголовок:
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
            </label>
            <br />
            <label>
                Текст новости:
                <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
            </label>
            <br />
            <label>
                Краткое описание:
                <textarea value={shortDescription} onChange={(event) => setShortDescription(event.target.value)} />
            </label>
            <br />
            <label>
                Дата:
                <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
            </label>
            <br />
            <label>
                Изображение:
                <input type="file" onChange={handleImageChange} />
            </label>
            <br />
            <button type="submit">Отправить</button>
        </form>
    );
}

export default Add_news