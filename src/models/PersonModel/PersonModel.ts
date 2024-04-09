import { isPersonWithChildren } from "./typeguards.ts"
import { AnyPersonType, PersonBaseType } from "./types.ts"
import startData from '../../services/mock/react.json'
export const PersonModel = {
    getStartData: () => { // Подтягиваем первые 20 пользователей из списка react.json
        return startData.map((person) => ({
            ...person,
            id: PersonModel.getPersonId(person),
            isOpen: false,
            isLoading: false
        }))
    },
    getPersonId: (person: any): string => { // Добавляем ID
        return `${person.name}--${person.lastName}`
    },
    formatResponse: (person: AnyPersonType): PersonBaseType => { // Добавляем детей если hasChildren == true
        const id = PersonModel.getPersonId(person)
        if (isPersonWithChildren(person)) { // Проверка на hasChildren
            const children = person.children.map(child => ({
                ...child,
                id,
            }))
            return {
                ...person,
                children,
                id,
            }
        } // Возвращаем без детей
        return {
            ...person,
            id,
        }
    }
}