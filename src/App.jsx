import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./home/Home";
import AddExpense from "./addExpense/AddExpense";
import CustomizationBar from "./customization/CustomizationBar";
import ExpenseReport from "./expenseReport/ExpenseReport";
import { v4 as uuid } from "uuid";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { simpleLight } from "./home/Themes";
import Log from "./Log.jsx";

function App() {
  const [expenseList, setExpenseList] = useState([]);
  const [userFontSize, setUserFontSize] = useState("15px");
  const [userFont, setUserFont] = useState("Roboto");
  const [userCurrency, setUserCurency] = useState("€");
  const [userTheme, setUserTheme] = useState(simpleLight);

  // For logging purposes
  const [fontFamilyClicks, setFontFamilyClicks] = useState(0);
  const [fontSizeClicks, setFontSizeClicks] = useState(0);
  const [themeClicks, setThemeClicks] = useState(0);
  const [startTime, setStartTime] = useState(new Date());

  const addExpense = (date, category, price, currency, label) => {
    setExpenseList((oldExpenseList) => [
      ...oldExpenseList,
      {
        id: uuid(),
        date: date,
        category: category,
        price: price,
        currency: currency,
        label: label,
      },
    ]);
  };
  const updateCurrency = (currency) => {
    setUserCurency(currency);
  };
  const updateFontSize = (fontSize) => {
    setUserFontSize(fontSize);
  };
  const updateFont = (font) => {
    setUserFont(font);
  };
  const updateTheme = (theme) => {
    setUserTheme(theme);
  };

  // For logging purposes
  const updateFontFamilyClicks = (numOfClicks) => {
    setFontFamilyClicks(numOfClicks);
  };
  const updateFontSizeClicks = (numOfClicks) => {
    setFontSizeClicks(numOfClicks);
  };
  const updateThemeClicks = (numOfClicks) => {
    setThemeClicks(numOfClicks);
  };

  return (
    <ThemeProvider theme={userTheme}>
      <CssBaseline enableColorScheme />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
          className="App"
          sx={{
            fontSize: userFontSize,
            fontFamily: userFont,
            borderColor: userTheme.palette.primary.main,
          }}
        >
          <CustomizationBar
            updateFontSize={updateFontSize}
            userFontSize={userFontSize}
            updateFont={updateFont}
            userFont={userFont}
            updateCurrency={updateCurrency}
            userCurrency={userCurrency}
            updateTheme={updateTheme}
            userTheme={userTheme}
            updateFontFamilyClicks={updateFontFamilyClicks}
            updateFontSizeClicks={updateFontSizeClicks}
            updateThemeClicks={updateThemeClicks}
          />
          <BrowserRouter basename={"/budget-app-b/"}>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Home
                    expenseList={expenseList}
                    userFont={userFont}
                    userFontSize={userFontSize}
                  />
                }
              />
              <Route
                exact
                path="/add"
                element={
                  <AddExpense
                    userCurrency={userCurrency}
                    addExpense={addExpense}
                    userFont={userFont}
                    userFontSize={userFontSize}
                  />
                }
              />
              <Route
                exact
                path="/report"
                element={
                  <ExpenseReport
                    expenseList={expenseList}
                    userFont={userFont}
                    userFontSize={userFontSize}
                    userTheme={userTheme}
                    userCurrency={userCurrency}
                  />
                }
              />
            </Routes>
          </BrowserRouter>
        </Box>
        <Log
          fontFamilyClicks={fontFamilyClicks}
          fontSizeClicks={fontSizeClicks}
          themeClicks={themeClicks}
          startTime={startTime}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;