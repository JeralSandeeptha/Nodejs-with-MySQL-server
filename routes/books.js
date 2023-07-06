const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', async (req, res) => {
    try {

        const q = "SELECT * FROM books";

        db.query(q, (error, data) => {
            if(error){
                return res.status(500).json({
                    message: "Get all books query failed",
                    error: error
                });
            }
            return res.status(500).json({
                message: "Get all books query successful",
                data: data
            });
        });

    } catch (error) {
        res.status(500).json({
            message: "Get all books server error",
            error: error
        });
    }
});

router.get('/:id', async (req, res) => {
    try {

        const id = req.params.id;

        const q = "SELECT * FROM books WHERE id = ? ";

        db.query(q, [id], (error, data) => {
            if(error){
                return res.status(500).json({
                    message: "Get book query failed",
                    error: error
                });
            }
            return res.status(500).json({
                message: "Get book query successful",
                data: data
            });
        });

    } catch (error) {
        res.status(500).json({
            message: "Get single book server error",
            error: error
        });
    }
});

router.post('/', async (req, res) => {
    try {

        const values = [
            req.body.title,
            req.body.description,
            req.body.cover
        ];

        const q = "INSERT INTO books (`title`, `description`, `cover`) VALUES (?, ?, ?)";

        db.query(q, values, (error, data) => {
            if(error){
                return res.status(500).json({
                    message: "Create book query failed",
                    error: error
                });
            }
            return res.status(500).json({
                message: "Create book query successful",
                data: data.insertId
            });
        });

    } catch (error) {
        res.status(500).json({
            message: "Get all books server error",
            error: error
        });
    }
});

router.put('/:id', async (req, res) => {
    try {
        
        const id = req.params.id;

        const values = [
            req.body.title,
            req.body.description,
            req.body.cover
        ];

        const q = "UPDATE books SET `title` = ?, `description` = ?, `cover` = ? WHERE id = ?";

        db.query(q, [...values, id],(error, data) => {
            if(error){
                return res.status(500).json({
                    message: "Update book query failed",
                    error: error
                });
            }
            return res.status(500).json({
                message: "Update book query successful",
                data: data
            });
        });

    } catch (error) {
        res.status(500).json({
            message: "Update book server error",
            error: error
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {

        const id = req.params.id;

        const q = "DELETE FROM books WHERE id = ? ";

        db.query(q, [id], (error, data) => {
            if(error){
                return res.status(500).json({
                    message: "Delete book query failed",
                    error: error
                });
            }
            return res.status(500).json({
                message: "Delete book query successful",
                data: data
            });
        });

    } catch (error) {
        res.status(500).json({
            message: "Delete book server error",
            error: error
        });
    }
});

module.exports = router;