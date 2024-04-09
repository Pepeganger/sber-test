import React, { useMemo, FC, useId } from 'react';
import { getMarginLeftValue } from './utils.ts';
import { AnyPersonType } from '../../../../models/PersonModel/types';
import { usePersonList } from '../../../../hooks/usePersonList/index.ts';


type PersonPropsType = AnyPersonType & { id: string, item?: any };

const _Person: FC<PersonPropsType> = ({
    name,
    lastName,
    hasChildren,
    id,
    level,
    allUsers,
    setAllUsers
}) => {
    const marginLeft = useMemo(() => getMarginLeftValue(level), [level]); // Берём отступ
    const [toggleUser, isOpen, isLoading, children] = usePersonList(id, allUsers, setAllUsers); // Иммитация общения с бэком через хук 
    const toggle = (id) => { if (typeof toggleUser == "function") { toggleUser(id) } } // Проверка типов для TS
    const id2 = useId()
    return (
        <>
            <div key={id} style={{ marginLeft }}>
                {name} {lastName} {"   "}

                {hasChildren && (
                    <button onClick={() => toggle(id)}>
                        {isOpen ? "Hide children" : "Show Children"}
                    </button>
                )}
                {"  "}
                {hasChildren ? isOpen ? "↓" : "↑" : null}
                {
                    // Индикатор открытости
                }
            </div>


            {isLoading ? <div>...Loading</div> : // Loader
                <div key={id2}>
                    {isOpen && hasChildren && Array.isArray(children) && children.map(item => ( // Проверка типов для TS
                        <Person
                            hasChildren={item.hasChildren}
                            name={item.name}
                            lastName={item.lastName}
                            id={`${item.name}-${item.lastName}`} // Создаём уникальный ID из комбинации name-lastname
                            level={level + 1} // Level для отступа по горизонтали
                            allUsers={allUsers} // Передаём детям информацию о подгруженных пользователях
                            setAllUsers={setAllUsers} // Передаём хэндлер
                        />
                    ))}
                </div>}

        </>
    );
};

export const Person = _Person // Для использования memo, 
// Но тогда нужно вынести стейт из родительского NestedList в state manager и передавать пропсами true,false 
/* Person = memo(Person,(prev,next) => {

    return prev.isOpen !== next.isOpen

})   */
