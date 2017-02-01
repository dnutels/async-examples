'use strict';

const Logger = require('../lib/common/logger');

const {request, requestPromise} = require('./common');

function getFriends() {
    request.get({url: '/users/?filter=[cid1,cid2,cid8]'}, (err, {body: users}) => {
        if (!err) {
            const friends = [];

            let count = users.length;

            users.forEach(({id}) => {
                request.get({url: `/friends/${id}`}, (err, {body: userFriends}) => {
                    if (!err) {
                        friends.push(...userFriends);

                        count -= 1;

                        if (count === 0) {
                            Logger.info(new Set(friends));
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

function processFriends(friendsForAllUsers) {
    const friends = friendsForAllUsers.reduce((aggregator, userFriends) => {
        aggregator.push(...userFriends);
        return aggregator;
    }, []);

    return friends;
}

function getFriendsPromise() {
    requestPromise.get({url: '/users/?filter=[cid1,cid2,cid8]'})
        .then((users) => {
            const friendRequests = users.map(({id}) => {
                return requestPromise.get({url: `/friends/${id}`});
            });

            return Promise.all(friendRequests);
        })
        .then((friendsForAllUsers) => {
            const friends = processFriends(friendsForAllUsers);

            Logger.info(new Set(friends));
        })
        .catch((err) => {
            Logger.error(err);
        });
}

async function getFriendsAsync1() {
    try {
        const users = await requestPromise.get({url: '/users/?filter=[cid1,cid2,cid8]'});

        const friendsForAllUsers = users.map(async ({id}) => {
            return await requestPromise.get({url: `/friends/${id}`});
        });

        const friends = processFriends(friendsForAllUsers);

        Logger.info(new Set(friends));
    } catch(err) {
        Logger.error(err);
    }
}

function getUsers() {
    return requestPromise.get({url: '/users/?filter=[cid1,cid2,cid8]'});
}

function getFriend(id) {
    return requestPromise.get({url: `/friends/${id}`});
}

async function getFriendsAsync2() {
    try {
        const users = await getUsers()

        const friendRequests = users.map(({id}) => getFriend(id));
        const friendsForAllUsers = await Promise.all(friendRequests);

        const friends = processFriends(friendsForAllUsers);

        Logger.info(new Set(friends));
    } catch(err) {
        Logger.error(err);
    }
}

getFriends();
getFriendsPromise();
// getFriendsAsync1();
getFriendsAsync2();
