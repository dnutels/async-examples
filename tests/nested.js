'use strict';

const Logger = require('../lib/common/logger');

const {request, requestPromise} = require('./common');

// function getWestCoastUsers1() {
//     request.get({url: '/cities/'}, (err, response) => {
//         if (!err) {
//             const {body: cities} = response;
//             const westCoastCities = cities.reduce((aggregator, city) => {
//                 if (city.coast === 'West') {
//                     aggregator.push(city.id);
//                 }
//
//                 return aggregator;
//             }, []);
//
//             request.get({url: '/users/'}, (err, response) => {
//                 if (!err) {
//                     const {body: users} = response;
//                     const westCoastUsers = users.filter((user) => {
//                         return westCoastCities.includes(user.cityId);
//                     });
//
//                     Logger.info(westCoastUsers);
//                 } else {
//                     Logger.error(err);
//                 }
//             });
//         } else {
//             Logger.error(err);
//         }
//     });
// }
//
// function getWestCoastCities(cities) {
//     const westCoastCities = cities.reduce((aggregator, city) => {
//         if (city.coast === 'West') {
//             aggregator.push(city.id);
//         }
//
//         return aggregator;
//     }, []);
//
//     return westCoastCities;
// }
//
// function getUsersByCities(users, cities) {
//     const westCoastUsers = users.filter((user) => {
//         return cities.includes(user.cityId);
//     });
//
//     return westCoastUsers;
// }
//
// function getWestCoastUsers2() {
//     request.get({url: '/cities/'}, (err, response) => {
//         if (!err) {
//             const {body: cities} = response;
//             const westCoastCities = getWestCoastCities(cities);
//
//             request.get({url: '/users/'}, (err, response) => {
//                 if (!err) {
//                     const {body: users} = response;
//                     const westCoastUsers = getUsersByCities(users, westCoastCities);
//
//                     Logger.info(westCoastUsers);
//                 } else {
//                     Logger.error(err);
//                 }
//             });
//         } else {
//             Logger.error(err);
//         }
//     });
// }
//
// function getWestCoastUsersPromise1() {
//     return requestPromise.get({url: '/cities/'})
//         .then((cities) => {
//             return requestPromise.get({url: '/users/'}).then((users) => {
//                 const westCoastCities = getWestCoastCities(cities);
//                 const westCoastUsers = getUsersByCities(users, westCoastCities);
//                 return westCoastUsers;
//             });
//         }).then((westCoastUsers) => {
//             Logger.info(westCoastUsers);
//         }).catch((err) => {
//             Logger.error(err);
//         });
// }
//
// function getWestCoastUsersPromise2() {
//     let westCoastCities;
//
//     return requestPromise.get({url: '/cities/'})
//         .then((cities) => {
//             westCoastCities = getWestCoastCities(cities);
//             return requestPromise.get({url: '/users/'});
//         }).then((users) => {
//             const westCoastUsers = getUsersByCities(users, westCoastCities);
//             Logger.info(westCoastUsers);
//         }).catch((err) => {
//             Logger.error(err);
//         });
// }

function getWestCoastCities(cities) {
    const westCoastCities = cities.reduce((aggregator, city) => {
        if (city.coast === 'West') {
            aggregator.push(city.id);
        }

        return aggregator;
    }, []);

    return westCoastCities;
}

function getUsersByCities(users, cities) {
    const westCoastUsers = users.filter((user) => {
        return cities.includes(user.cityId);
    });

    return westCoastUsers;
}

function getWestCoastUsersByCities(users, cities, coast) {
    const westCoastCities = getWestCoastCities(cities);
    const westCoastUsers = getUsersByCities(users, westCoastCities);

    return westCoastUsers;
}

function getWestCoastUsersPromise3() {
    const requests = [
        requestPromise.get({url: '/cities/'}),
        requestPromise.get({url: '/users/'})
    ];

    Promise.all(requests).then(([cities, users]) => {
        const westCoastUsers = getWestCoastUsersByCities(users, cities);

        Logger.info(westCoastUsers);
    }).catch((err) => {
        Logger.error(err);
    })
}

async function getWestCoastUsersAsync1() {
    try {
        const cities = await requestPromise.get({url: '/cities/'});
        const users = await requestPromise.get({url: '/users/'});

        const westCoastUsers = getWestCoastUsersByCities(users, cities);

        Logger.info(westCoastUsers);
    } catch(err) {
        Logger.error(err);
    }
}

async function getWestCoastUsersAsync2() {
    try {
        const requests = [
            requestPromise.get({url: '/cities/'}),
            requestPromise.get({url: '/users/'})
        ];

        const [cities, users] = await Promise.all(requests);
        const westCoastUsers = getWestCoastUsersByCities(users, cities);

        Logger.info(westCoastUsers);
    } catch(err) {
        Logger.error(err);
    }
}

function getWestCoastUsersGenerators() {
    const it = (function *() {
        const cities = yield requestPromise.get({url: '/cities/'});
        const users = yield requestPromise.get({url: '/users/'});

        console.log(cities, users);
    }());

    console.log(it.next());
    console.log(it.next());
}

// getWestCoastUsers1();
// getWestCoastUsers2();
// getWestCoastUsersPromise1();
// getWestCoastUsersPromise2();
// getWestCoastUsersPromise3();
// getWestCoastUsersAsync1();
// getWestCoastUsersAsync2();
getWestCoastUsersGenerators();
