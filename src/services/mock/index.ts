import data from './data.json';

import { isPersonWithChildren } from "../../models/PersonModel/typeguards.ts";
import { PersonMapType, AnyPersonType } from "../../models/PersonModel/types.ts";

let mock: PersonMapType = new Map();
export const addPersonToMapRecursively = (person: AnyPersonType) => {
    const id = `${person.name}-${person.lastName}`
    mock.set(id, person)

    if (isPersonWithChildren(person)) {
        person.children.map(child => addPersonToMapRecursively(child));
    }

}


data.map((item: unknown) => addPersonToMapRecursively(item as AnyPersonType))

export default mock;
