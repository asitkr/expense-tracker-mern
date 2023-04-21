const express = require('express');
const { addTransaction, getAllTransaction, editTransaction, deleteTransaction } = require('../controllers/transactionController');

// const {} from 'hell';

// router object
const router = express.Router();

// routes
// Post || add Transaction User
router.post("/add-transaction", addTransaction);

// Post || edit Transaction User
router.post("/edit-transaction", editTransaction);

// Post || delete Transaction User
router.post("/delete-transaction", deleteTransaction);

// routes
// Get || get Transaction User
router.post('/get-transaction', getAllTransaction);

module.exports = router;