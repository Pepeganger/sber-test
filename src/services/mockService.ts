import data from '../services/mock/data.json';
import { sleep } from '../utils.ts';
import { AnyPersonType, PersonMapType } from '../models/PersonModel/types.ts'
import { isPersonWithChildren } from '../models/PersonModel/typeguards.ts';
import { PersonModel } from '../models/PersonModel/PersonModel.ts';
import mock from './mock/index.ts';
import { useState } from 'react';



export const mockService = {
    getUserChildren: async (userId: string) => {
        await sleep(3000);
        return new Promise((res) => {
            const person = mock.get(userId);
            if (person && isPersonWithChildren(person)) {
                return res(PersonModel.formatResponse(person));
            }
            return res({});
        })
    },

}