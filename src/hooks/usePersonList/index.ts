import { PersonStateType } from "../../models/PersonModel/types.ts";
import { mockService } from "../../services/mockService.ts";


export const usePersonList = (id, allUsers: PersonStateType, setAllUsers: React.Dispatch<React.SetStateAction<PersonStateType>>) => {

    let person = allUsers[id] || false // Пользователь загружен ?

    const toggleUser = async (id) => {
        if (person) { // Пользователь загружен -> Меняем состояние открытости
            setAllUsers((prev) => ({ ...prev, [id]: { ...prev[id], isOpen: !prev[id].isOpen } }))
        } else { // Пользователь не загружен, добавляем лоадер, делаем запрос
            setAllUsers((prev) => ({
                ...prev,
                [id]: {
                    ...prev[id],
                    isLoading: true
                }
            }))

            mockService.getUserChildren(id).then((res: any) => { // Иммитация бэкэнд запроса, загружаем пользователя

                setAllUsers((prev) => ({
                    ...prev,
                    [id]: {
                        ...[id],
                        isOpen: true, // Открываем
                        children: res.children, // Возвращаем детей с сервера
                        isLoading: false // Снимаем лоадер
                    }
                }))

            });
        }

    }
    return [toggleUser, allUsers[id]?.isOpen, allUsers[id]?.isLoading, allUsers[id]?.children];
}

