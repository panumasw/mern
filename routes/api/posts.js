const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.send('Posts Route');
});

module.exports = router;
