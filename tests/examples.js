class User {

}

class Address {

}

function createUser(userData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(new User(userData));
        }, 100);
    })
}

function createAddress(addressData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(new Address(addressData));
        }, 300);
    })
}

function saveCustomer(user, address) {
    return Promise.all([user, address]).then((user, address, ...rest) => {
        return createRequest('customers/', {user, address});
    }).catch((err) => {
        console.log(err);
    });
}

function createCustomer(customerData) {
    const {userData, addressData} = customerData;

    const user = createUser(userData);
    const address = createAddress(addressData);
    const customer = saveCustomer(user, address);

    return customer;
}

createCustomer({
    userData: {a: 100},
    addressData: {b: 200}
}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});
