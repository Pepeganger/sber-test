import {
    AnyPersonType,
    PersonWithChildren,
    PersonWithoutChildren,
    PersonWithNotLoadedChildren
} from "./types";

export function isPersonWithChildren(person: AnyPersonType): person is PersonWithChildren {
    return person.hasChildren;
}

export function isPersonWithoutChildren(person: AnyPersonType): person is PersonWithoutChildren {
    return !person.hasChildren;
}

export function isPersonWithNotLoadedChildren(person: AnyPersonType): person is PersonWithNotLoadedChildren {
    return isPersonWithChildren(person) && !person.children.length;
}