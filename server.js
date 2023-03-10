// Dependencies
const path = require('path');
const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const sequelize = require('./config/config');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();
const helpers = require('./utils/helpers')
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Set up sessions with cookies
const sess = {
  secret: 'Super secret secret',
  cookie: {
      // Stored in milliseconds
      maxAge: 24 * 60 * 60 * 1000, // expires after 1 day
  
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Handlebars middleware
const exphbs = require('express-handlebars');
const hbs = exphbs.create({helpers});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// Routes
app.use(routes);

// Start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});