import { isPersonWithChildren } from "./typeguards.ts"
import { AnyPersonType, PersonBaseType } from "./types.ts"
import startData from '../../services/mock/react.json'
export const PersonModel = {



    getStartData: () => {
        return startData.map((person) => ({
            ...person,
            id: PersonModel.getPersonId(person),
            isOpen: false,
            isLoading: false
        }))
    },
    getPersonId: (person: any): string => {
        return `${person.name}--${person.lastName}`
    },
    formatResponse: (person: AnyPersonType): PersonBaseType => {
        const id = PersonModel.getPersonId(person)
        if (isPersonWithChildren(person)) {
            const children = person.children.map(child => ({
                ...child,
                id,
            }))
            return {
                ...person,
                children,
                id,
            }
        }
        return {
            ...person,
            id,
        }
    }
}