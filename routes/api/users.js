const { Router } = require('express');
const router = Router();
const { body, validationResult } = require('express-validator');
const User = require('../../models/User');

router.get('/', (req, res) => {
  res.json({ path: '/api/users' });
});

router.post(
  '/',
  [
    body('username', 'Not Empty').isLength({ min: 5 }),
    // Email must be an email
    body('email', 'Email Invalid').isEmail(),
    // password must be at least 5 chars long
    body('password', 'Password invalid').isLength({ min: 5 }),
  ],
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;
    try {
      let user = await User.findOne({ email: email });
      console.log(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send(err.message);
    }
    res.send('I got it');
  }
);

module.exports = router;
