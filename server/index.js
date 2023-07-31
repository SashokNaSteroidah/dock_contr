// const express = require('express');
// const app = express();
// const port = 3001;
//
// app.use(express.json());
//
// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     console.log(req.body);
//     res.send(`Ваш запрос обработан: ${req.method} ${req.url}`);
//     next();
// });
//
// app.listen(port, () => {
//     console.log(`Server started on port ${port}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3001;

// Подключаемся к локальной базе данных MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Соединение с базой данных успешно установлено');
}).catch((err) => {
    console.log('Ошибка при подключении к базе данных', err);
});

// Устанавливаем middleware для обработки тела запроса в формате JSON
app.use(express.json());

// Устанавливаем middleware для обработки загруженных файлов
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Определяем схему и модель данных
const NewsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    short_description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const News = mongoose.model('News', NewsSchema);

// Создаем новость
app.post('/api/news', upload.single('image'), async (req, res) => {
    const news = new News({
        title: req.body.title,
        description: req.body.description,
        short_description: req.body.short_description,
        date: req.body.date,
        image: req.file.filename // используем req.file.filename для получения имени файла
    });
    await news.save();
    res.json(news);
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});