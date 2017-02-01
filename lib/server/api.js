'use strict';

const Logger = require('../common/logger');
const _ = require('lodash');

const express = require('express');

const usersList = [
    {id: 'uid1', name: 'John', cityId: 'cid1'},
    {id: 'uid2', name: 'John', cityId: 'cid2'},
    {id: 'uid3', name: 'John', cityId: 'cid8'},
    {id: 'uid4', name: 'John', cityId: 'cid2'},
    {id: 'uid5', name: 'John', cityId: 'cid1'},
    {id: 'uid6', name: 'John', cityId: 'cid5'},
    {id: 'uid7', name: 'John', cityId: 'cid1'},
    {id: 'uid8', name: 'John', cityId: 'cid3'},
    {id: 'uid9', name: 'John', cityId: 'cid10'},
    {id: 'uid10', name: 'John', cityId: 'cid4'}
]

const friendsList = [
    {id: 'uid2', users: ['uid1', 'uid3']},
    {id: 'uid3', users: ['uid1', 'uid10']},
    {id: 'uid7', users: ['uid2', 'uid6']},
]


const citiesList = [
    {id: 'cid1', name: 'LA', coast: 'West'},
    {id: 'cid2', name: 'Chicago', coast: 'East'},
    {id: 'cid3', name: 'NYC', coast: 'East'},
    {id: 'cid4', name: 'Detroit', coast: 'East'},
    {id: 'cid5', name: 'Philadelphia', coast: 'East'},
    {id: 'cid6', name: 'Dallas', coast: 'West'},
    {id: 'cid7', name: 'Porland', coast: 'West'},
    {id: 'cid8', name: 'Seattle', coast: 'West'},
    {id: 'cid9', name: 'San Francisco', coast: 'West'},
    {id: 'cid10', name: 'Washington D.C.', coast: 'East'}
]

function users(req, res) {
    const {id} = req.params;
    const {filter = []} = req.query;

    if (typeof id === 'undefined' || typeof filter !== 'undefined') {
        let filteredUsersList = usersList;

        if (filter.length !== 0) {
            filteredUsersList = usersList.filter((user) => {
                return filter.includes(user.id);
            });
        }

        res.status(200).send(filteredUsersList);
    } else {
        const result = usersList.find((user) => {
            return user.id === id;
        });

        res.status(200).send(result);
    }
}

function friends(req, res) {
    const {id} = req.params;

    if (typeof id === 'undefined') {
        res.status(200).send(friendsList);
    } else {
        let result = friendsList.filter((friend) => {
            return friend.users.includes(id);
        });

        result = _.map(result, 'id');

        res.status(200).send(result);
    }
}

function cities(req, res) {
    const {id} = req.params;

    if (typeof id === 'undefined') {
        res.status(200).send(citiesList);
    } else {
        const result = citiesList.find((city) => {
            return city.id === id;
        });

        res.status(200).send(result);
    }
}

const router = express.Router();

router.get('/users(/:id)?', users);
router.get('/cities(/:id)?', cities);
router.get('/friends(/:id)?', friends);

module.exports = router;
