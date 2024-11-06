import { createContext, useContext, useState } from 'react';

export const MemberContext = createContext();
export const MemberUpdateContext = createContext();

export const MemberProvider = ({ children }) => {
    const [members, setMembers] = useState([
        { id: 0, name: "Naruto", lastname: "Uzumaki", position: "Hokage" },
        { id: 1, name: "Sasuke", lastname: "Uchiha", position: "Shadow" },
        { id: 2, name: "Sakura", lastname: "Haruno", position: "Healer" }
    ]);

    return (
        <MemberContext.Provider value={members}>
            <MemberUpdateContext.Provider value={setMembers}>
                {children}
            </MemberUpdateContext.Provider>
        </MemberContext.Provider>
    );
};


export const useMembers = () => useContext(MemberContext);


export const useSetMembers = () => useContext(MemberUpdateContext);