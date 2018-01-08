import express from 'express';
import TaskService from '../services/TaskService';

var router = express.Router();
let service = new TaskService();

/**
 * GET all
 */
router.get('/', function(req, res) {
    let result = service.findAll((err, rows) => {
        if (err) 
            res.json(err)
        else 
            res.json(rows)
    });
});

/** 
 * GET by id 
 */
router.get('/:id', function(req, res) {
    let result = service.show(req.params.id, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows)
        }
    });
});

/**
 * POST
 */
router.post('/', function(req, res) {
    let result = service.create(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});

/**
 * DELETE
 */
router.delete('/:id', function(req, res) {
    let result = service.delete(req.params.id, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});

/**
 * PUT
 */
router.put('/:id', function(req, res) {
    let result = service.update(req.params.id, req.body, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    })
});

module.exports = router;