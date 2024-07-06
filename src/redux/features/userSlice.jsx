import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as api from '../api'

//thunk for login
export const loginThunk = createAsyncThunk('/login', async (formData) => {
    try {
        // Simulating an API call
        const response = await new Promise((resolve) =>
            setTimeout(() => resolve({ userType: formData.userType, data: 'User data here' }), 1000)
        );
        return response;
    } catch (error) {
        throw Error('Login failed');
    }
});

// thunk to fetch all data
export const getData=createAsyncThunk('/getdata',async()=>{
    try {
        const response = await api.getData(); 
        console.log(response);
        return response;
    } catch (error) {
        throw Error('Request Failed');
    }
})

//thunk to update existing data
export const updateData=createAsyncThunk('/updatedata',async(formData)=>{
    try {
        const response = await api.updateData(formData);
        return response;
    } catch (error) {
        throw Error('Request Failed');
    }
})

//thunk to add data
export const addData=createAsyncThunk('/adddata',async(formData)=>{
    try {
        const response = await api.addData(formData);
        console.log(response,"from adddata");
        return response;
    } catch (error) {
        throw Error('Request Failed');
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userType: '',
        loading: false,
        error: '',
        responseData: '',
        updateResponse:''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // login reeducers
            .addCase(loginThunk.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.userType = action.payload.userType;
            })
            .addCase(loginThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            //get all data reducers
            .addCase(getData.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(getData.fulfilled, (state, action) => {
                state.loading = false;
                state.responseData = action.payload.data;
            })
            .addCase(getData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            //update the data reducuers
            .addCase(updateData.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(updateData.fulfilled, (state, action) => {
                state.loading = false;
                state.updateResponse = action.payload;
            })
            .addCase(updateData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            //adding data reducers
            .addCase(addData.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(addData.fulfilled, (state, action) => {
                state.loading = false;
                state.updateResponse = action.payload;
            })
            .addCase(addData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

    }
})
export default userSlice.reducer;