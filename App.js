import express from "express";

import path from "path";

const app = express();
const port = 3001;
// const _dirname = dirname(fileURLToPath(import.meta.url));
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, 'public')));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// app.post('/Exam', (req, res) => {
//     res.redirect('/main');
// });

// app.post('/guidlines', (req, res) => {
//     res.redirect('/guidelines');
// });

// app.post('/dashboard', (req, res) => {
//     res.redirect('/dashboard');
// });


app.get('/main', (req, res) => {
    res.sendFile(__dirname + "/public/main.html");
});
app.post('/examtab', (req, res) => {
    res.sendFile(__dirname + "/public/ExamTab.html");
});

app.post('/Home', (req, res) => {
    res.sendFile(__dirname + "/public/Home_page.html");
});

app.post('/guidlines', (req, res) => {
    res.sendFile(__dirname + "/public/guidlines.html");
});

app.post('/dashboard', (req, res) => {
    res.sendFile(__dirname + "/public/dashboard.html");
});

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-store');
    next();
});
app.listen(port, () => {
    console.log(`Server started at port ${port}`)
});






