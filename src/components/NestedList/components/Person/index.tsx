import React, { memo, useEffect, useMemo } from 'react';
import { getMarginLeftValue } from './utils.ts';
import { AnyPersonType } from '../../../../models/PersonModel/types';
import { usePersonList } from '../../../../hooks/usePersonList/index.ts';


type PersonPropsType = AnyPersonType & { id: string, item?: any };

const _Person: React.FC<PersonPropsType> = ({
    name,
    lastName,
    hasChildren,
    id,
    level,
    allUsers,
    setAllUsers
}) => {
    const marginLeft = useMemo(() => getMarginLeftValue(level), [level]);
    const [toggleUser, isOpen, isLoading, children] = usePersonList(id, allUsers, setAllUsers);
    return (
        <>
            <div key={id} style={{ marginLeft }}>
                {name} {lastName}
                {"   "}
                {hasChildren && (
                    <button onClick={() => toggleUser(id)}>
                        {isOpen ? "Hide children" : "Show Children"}
                    </button>

                )}
                {"   "}

                {hasChildren ? isOpen ? "↓" : "↑" : null}
            </div>

            {isLoading ? <div>...Loading</div> : <div>

                {isOpen && hasChildren && children.map(item => (
                    <Person
                        hasChildren={item.hasChildren}
                        name={item.name}
                        lastName={item.lastName}
                        id={`${item.name}-${item.lastName}`}
                        level={level + 1}
                        allUsers={allUsers}
                        setAllUsers={setAllUsers}
                    />
                ))}
            </div>}

        </>
    );
};

export const Person = _Person
