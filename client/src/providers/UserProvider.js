import { createContext, useState } from "react"

const UserContext = createContext();

function getUserFromStorage() {
    // retrieve logged in user from storage
    return JSON.parse(window.sessionStorage.getItem('user'));
}

function UserProvider({ children }) {
    const [userState, setUserState] = useState(getUserFromStorage());

    function setUser(user) {
        setUserState(user);

        // store logged in user in storage
        if (user) {
            window.sessionStorage.setItem('user', JSON.stringify(user));
        } else {
            window.sessionStorage.removeItem('user');
        }
    }

    const group = userState?.group || 'visitors';

    const value = {
        user: userState,
        setUser,
        canAddRecipe: group === 'registered' || group === 'owners',
        canEditRecipe: group === 'owners',
        canDeleteRecipe: group === 'owners',
        canDeleteIngredient: group === 'owners'
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export {
    UserProvider,
    UserContext
}