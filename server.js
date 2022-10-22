const express = require('express');
const connectDB = require('./config/db');

//Define ROute Const
const Auth = require('./routes/api/auth');
const Users = require('./routes/api/users');
const Posts = require('./routes/api/posts');
const Profile = require('./routes/api/profile');

const app = express();

//Middleware
app.use(express.json({ extended: false }));

//Connect Database
connectDB();

app.get('/', (req, res) => {
  res.send('API Running');
});

app.use('/api/auth', Auth);
app.use('/api/users', Users);
app.use('/api/posts', Posts);
app.use('/api/profile', Profile);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
