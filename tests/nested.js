'use strict';

const Logger = require('../lib/common/logger');

const {request, requestPromise} = require('./common');

function getCitiesForUsers(cities, users) {
    const westCoastUsers = users.filter((user) => {
        return cities.includes(user.cityId);
    });

    return westCoastUsers;
}

function getFriendsCities() {
    request.get({url: '/users/?filter=[uid1,uid2,uid3]'}, (err, response) => {
        if (!err) {
            const {body: users} = response;
            const friends = new Set();

            let count = users.length;

            console.log(users);

            users.forEach((user) => {
                const {id} = user;
                request.get({url: `/friends/${id}`}, (err, response) => {
                    if (!err) {
                        count -= 1;

                        if (count === 0) {
                            request.get({url: '/cities/'}, (err, response) => {
                                if (!err) {
                                    const {body: cities} = response;
                                    const westCoastCities = cities.reduce((aggregator, city) => {
                                        if (city.coast === 'West') {
                                            aggregator.push(city.id);
                                        }

                                        return aggregator;
                                    }, []);
                                } else {
                                    Logger.error(err);
                                }
                            });
                        } else {
                            const {body: userFriends} = response;

                            userFriends.forEach((friend) => {
                                friends.add(friend);
                            });
                        }
                    } else {
                        Logger.error(err);
                    }
                });
            });
        } else {
            Logger.error(err);
        }
    });
}

getFriendsCities();
