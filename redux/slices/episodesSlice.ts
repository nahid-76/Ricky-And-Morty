import { IEpisode } from '@/redux/types';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPullInfo } from "@/redux/types";
import {EPISODE_BASE_URL} from '@/urls/baseURLs'

interface IState{
    info: null | IPullInfo,
    results: IEpisode[],
    active: IEpisode | null,
    error: null | any
}

const initialState: IState = {
    info: null,
    results: [],
    active: null,
    error: null
}

export const fetchPullEpisodes = createAsyncThunk(
    "fetchPullEpisodes",
    async (url:string = `${EPISODE_BASE_URL}`) => {
        const pull = await fetch(url)
            .then(response => response.json())
            .then(data => data)
            .catch(error => {
                return error;
            });
        return pull
    }
);
export const fetchEpisode = createAsyncThunk(
    'fetchEpisode',
    async (id: string | undefined | string[]) => {
        let promises: any = [];
        let characters: any = [];

        const data = await fetch(`${EPISODE_BASE_URL}/${id}`)
            .then( response => response.json())
            .then(json => {
                promises = json.characters.map( (url: string) => {
                    const promise = fetch(url)
                        .then(response => response.json())
                        .then(data => {
                            characters.push(data)
                        })
                    return promise
                })
                return json
            })
            
        return await Promise.all(promises)
            .then( () => {
                data.characters = characters;
                return data
            })
    }
)

const episodesSlice = createSlice({
    name: "episodesSlice",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(
            fetchPullEpisodes.fulfilled, (state, action) => {
                state.info = action.payload.info;
                state.results = action.payload.results;
                state.error = null;
            }
        );
        builder.addCase(
            fetchPullEpisodes.rejected, (state, action) => {
                state.error = action.payload
            }
        );
        builder.addCase(
            fetchEpisode.fulfilled, (state, action) => {
                state.active = action.payload;
            }
        )
    },
});

export default episodesSlice.reducer;