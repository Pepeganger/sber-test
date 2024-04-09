import { useCallback, useState } from "react";
import { isPersonWithNotLoadedChildren } from "../../models/PersonModel/typeguards.ts";
import { AnyPersonType, PersonStateType } from "../../models/PersonModel/types.ts";
import { mockService } from "../../services/mockService.ts";


export const usePersonList = (id, allUsers: PersonStateType, setAllUsers: React.Dispatch<React.SetStateAction<PersonStateType>>) => {
    let person = allUsers[id] || false
    const toggleUser = async (id) => {
        if (person) {
            console.log("Second time")
            setAllUsers((prev) => ({ ...prev, [id]: { ...prev[id], isOpen: !prev[id].isOpen } }))
        } else {
            console.log("First time")
            setAllUsers((prev) => ({
                ...prev,
                [id]: {
                    ...prev[id],
                    isLoading: true
                }
            }))
            console.log(id)
            mockService.getUserChildren(id).then((res: any) => {
                console.log(res, 'asdasd')
                setAllUsers((prev) => ({
                    ...prev,
                    [id]: {
                        ...[id],
                        isOpen: true,
                        children: res.children,
                        isLoading: false
                    }
                }))
            });
        }

    }
    return [toggleUser, allUsers[id]?.isOpen, allUsers[id]?.isLoading, allUsers[id]?.children,];
}

