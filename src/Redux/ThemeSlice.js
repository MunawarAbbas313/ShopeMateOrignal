import { createSlice } from "@reduxjs/toolkit";

// Load from localStorage (default false if nothing saved)
const initialDarkMode = JSON.parse(localStorage.getItem("darkMode")) || false;

const initialState = {
  darkMode: initialDarkMode,
};

export const ThemeSilder = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
    },
  },
});

export const { toggleTheme } = ThemeSilder.actions;
export default ThemeSilder.reducer;
