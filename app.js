const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));

app.engine('.hbs', expHbs({
    extname: '.hbs', defaultLayout: null
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

let { user, house, page } = require('./controllers');
let { user: userMiddlewares, house: houseMiddlewares } = require('./middleware');
let { provider } = require('./dataBase')

//pages
app.get('/', page.main);
app.get('/login', page.login);
app.get('/register', page.register);
app.get('/newhouse', page.newHouse);

//users
app.get('/users', userMiddlewares.findAllUsersMiddleware, user.findAll);
app.get(`/users/:user_id`, userMiddlewares.isUserPresentMiddleware, user.getById);
app.post('/register',userMiddlewares.checkUserValidityMiddleware, user.createUser);
app.post('/login',userMiddlewares.userLoggingMiddleware, user.login);

//houses
app.post('/newhouse', houseMiddlewares.checkHouseValidityMiddleware, house.newHouse);
app.get('/houses',houseMiddlewares.findAllHouseMiddleware, house.findAll);
app.get(`/houses/:house_id`,houseMiddlewares.isHousePresent, house.getById);

app.all('*', page.page404);

app.listen(3000, () => {
    console.log(3000);
});

