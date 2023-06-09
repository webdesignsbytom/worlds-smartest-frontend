import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// Context
import UserContextProvider from './context/UserContext';
import ToggleContextProvider from './context/ToggleContext';
import CourseContextProvider from './context/CourseContext';
import ExamContextProvider from './context/ExamContext';
// Styles
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserContextProvider>
      <ToggleContextProvider>
        <CourseContextProvider>
          <ExamContextProvider>
            <App />
          </ExamContextProvider>
        </CourseContextProvider>
      </ToggleContextProvider>
    </UserContextProvider>
  </BrowserRouter>
);
