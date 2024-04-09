export interface PersonBaseType {
    id?: string;
    name: string;
    lastName: string;
    level?: number;
    isOpen?: boolean;
    allUsers?: object;
    setAllUsers?: object;
    isLoading?: boolean;
    hasChildren: boolean;
    children?: AnyPersonType[];
}
export interface PersonWithoutChildren extends PersonBaseType {
    hasChildren: false;
};

export interface PersonWithNotLoadedChildren extends PersonBaseType {
    hasChildren: boolean;
}

export interface PersonWithChildren extends PersonBaseType {
    hasChildren: true;
    children: AnyPersonType[];
};

export type AnyPersonType = PersonWithoutChildren | PersonWithChildren | PersonWithNotLoadedChildren;

export type PersonMapType = Map<string, AnyPersonType>;
export type PersonStateType = Record<string, AnyPersonType>;
export type PersonApiResponseType = Omit<PersonBaseType, 'id'>;
