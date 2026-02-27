//import express from 'express';
import router from 'express.Router()';

const {
    registerWallet
} = require('../controllers/wallet.controller.js');

// POST api/wallet/register

router.post('/register', registerWallet);

module.exports = router;