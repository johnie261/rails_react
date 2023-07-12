import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    greeting: '',
};

const fetchGreetings = createAsyncThunk('greeting/fetchGreeting',
 async () => {
    const res = await fetch('http://127.0.0.1:3000/greetings/random_greeting');
    const greeting = await res.json();
    console.log(greeting.greeting)
    return greeting.greeting;
});

const greetingSlice = createSlice({
    name: "greeting",
    initialState,
    extraReducers: (builder) =>{
      builder
      .addCase(fetchGreetings.fulfilled, (state, action) => {
        console.log(action.payload);
        state.greeting = action.payload;
      });
    }
});

export { fetchGreetings };

export default greetingSlice.reducer;
