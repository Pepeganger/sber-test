import React, { useState } from 'react';
import startData from '../../services/mock/react.json';
import { START_LEVEL } from './constants.ts';
import { Person } from "./components/Person/index.tsx"
import { PersonStateType } from '../../models/PersonModel/types.ts';


export const NestedList: React.FC = () => {

    const [allUsers, setAllUsers] = useState<PersonStateType>({}) // Список "подгруженных" пользователей и их состояния

    return (
        <>
            {startData.map(item => (
                <Person
                    hasChildren={item.hasChildren}
                    name={item.name}
                    lastName={item.lastName}
                    id={`${item.name}-${item.lastName}`} // Создаём уникальный ID из комбинации name-lastname
                    level={START_LEVEL} // constants.ts // Level для отступа по горизонтали
                    allUsers={allUsers} // Список кэшированных пользователей
                    setAllUsers={setAllUsers} // Хэндлер
                />
            ))}
        </>
    );
};