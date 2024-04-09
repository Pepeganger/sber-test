import React, { useState } from 'react';
import startData from '../../services/mock/react.json';
import { START_LEVEL } from './constants.ts';
import { Person } from "./components/Person/index.tsx"
import { usePersonList } from '../../hooks/usePersonList/index.ts';
import { PersonStateType } from '../../models/PersonModel/types.ts';
export const NestedList: React.FC = () => {
    const [allUsers, setAllUsers] = useState<PersonStateType>({});
    return (

        <>
            {startData.map(item => (
                <Person
                    hasChildren={item.hasChildren}
                    name={item.name}
                    lastName={item.lastName}
                    id={`${item.name}-${item.lastName}`}
                    level={START_LEVEL}
                    allUsers={allUsers}
                    setAllUsers={setAllUsers}
                />
            ))}
        </>
    );
};