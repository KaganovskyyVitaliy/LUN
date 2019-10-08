const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');

const app = express();

const users = [];
const houses = [];

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, 'static')));

app.engine('.hbs', expHbs({
    extname: '.hbs', defaultLayout: null
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

let { user } = require('./controllers');
let { user: userMiddlewares } = require('./middleware')

app.get('/', (req, res) => {
    res.render('main')
});

app.get('/login', (req, res) => {
    res.render('login')
});

app.get('/register', (req, res) => {
    res.render('register')
});

app.get('/newhouse', (req, res) =>{
    res.render('newhouse')
});

app.get('/users', user.findAll);
app.get(`/users/:userID`, userMiddlewares.isUserPresentMiddleware, user.getById);
app.post('/register', user.createUser);

app.get('/houses', (req, res) => {
    res.json(houses)
});

app.post('/newhouse', (req, res) => {
    let house = req.body;
    house.id = houses.length + 1;
    houses.push(house);
    res.render('main')
});

app.get(`/houses/:houseID`, (req, res) => {
    const fHouse = houses.find(houses => +req.params.houseID === houses.id);
    fHouse ? res.json(fHouse) : res.end('House is not found')
});

app.post('/login', (req,res) => {
    const {name, password} = req.body;
    const checkUser = users.find(user =>{
        return user.name == name && user.password == password
    });
    checkUser ? res.json(checkUser) : res.json('User not found');

});

app.all('*', (req, res) => {
    res.end('ERROR 404')
});

app.listen(3000, () => {
    console.log(3000);
});

