const accounts = [
    { username: 'martin', password: '1234', group: 'owners' },
    { username: 'radek', password: '1234', group: 'owners' },
    { username: 'jirka', password: '1234', group: 'owners' },

    { username: 'david', password: '1234', group: 'registered' },
    { username: 'honza', password: '1234', group: 'registered' },
    { username: 'michal', password: '1234', group: 'registered' },
];

function login(username, password) {
    // find account based on username
    let account = accounts.find(account => account.username === username.toLowerCase());

    // if the account was found and password matches
    if (account && account.password === password) {
        return {
            success: true,
            username: account.username,
            group: account.group
        };
    }

    return { success: false };
}

export { login }