'use strict';

const Logger = require('../lib/common/logger');

const {request, requestPromise} = require('./common');

function getFriends() {
    request.get({url: '/users/?filter=[uid1,uid2,uid3]'}, (err, response) => {
        if (!err) {
            const {body: users} = response;
            const friends = new Set();
            let count = users.length;

            users.forEach((user) => {
                const {id} = user;
                request.get({url: `/friends/${id}`}, (err, response) => {
                    if (!err) {
                        count -= 1;

                        if (count === 0) {
                            Logger.info(friends);
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

function getFriendsPromise() {

}

getFriends();
getFriendsPromise();
