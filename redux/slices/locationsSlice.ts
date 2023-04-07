import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ILocation, IPullInfo } from '@/redux/types';
import {LOCATION_BASE_URL} from '@/urls/baseURLs'
interface IState{
    info: null | IPullInfo,
    results: ILocation[],
    active: ILocation | null,
    error: null | any
}

const initialState: IState = {
    info: null,
    results: [],
    active: null,
    error: null
}

export const fetchPullLocations = createAsyncThunk(
    'fetchPullLocations',
    async (url:string = `${LOCATION_BASE_URL}`) => {
        const pull = await fetch(url)
            .then(response => response.json())
            .then(data => data)
            .catch(error => {
                alert(error);
                return error;
			})
        return pull
    }
)
export const fetchLocation = createAsyncThunk(
    'fetchLocation',
    async (id: string) => {
        let promises: any = [];
        let residents: any = [];

        const data = await fetch(`${LOCATION_BASE_URL}/${id}`)
            .then( response => response.json())
            .then(json => {
                promises = json.residents.map( (url: string) => {
                    const promise = fetch(url)
                        .then(response => response.json())
                        .then(data => {
                            residents.push(data)
                        })
                    return promise
                })
                return json
            })

        return await Promise.all(promises)
            .then( () => {
                data.residents = residents;
                return data
            })
    }
)

const locationsSlice = createSlice({
    name: "locationsSlice",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(
            fetchPullLocations.fulfilled, (state, action) => {
                state.info = action.payload.info;
                state.results = action.payload.results;
                state.error = null;
            }
        );
        builder.addCase(
            fetchPullLocations.rejected, (state, action) => {
                state.error = action.payload
            }
        );
        builder.addCase(
            fetchLocation.fulfilled, (state, action) => {
                state.active = action.payload
            }
        )
    }
});

export default locationsSlice.reducer;