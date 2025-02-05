import {baseApi} from './base-api';

const injectedRtkApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getCharacters: build.query({
      query: (page = 1, count = 10) => ({url: `character/?page=${page}&count=${count}`, method: 'GET'}),
    }),
  }),
});

export const {useGetCharactersQuery} = injectedRtkApi;
