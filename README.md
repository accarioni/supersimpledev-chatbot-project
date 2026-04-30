# React Chatbot (Supersimpledev)

![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-Build%20Tool-purple)
![Status](https://img.shields.io/badge/status-learning%20project-green)

## Description
This project consists of a simple chatbot built with React, developed as part of the Supersimpledev React course. The main goal was to consolidate fundamental concepts of the library, focusing on component-based architecture, state management, and integration with JavaScript, HTML, and CSS.

The application simulates a chat interface where users can interact through inputs and receive sequential automated responses.

## Features
The chatbot starts the conversation with the following message:

> "Hi! How are you doing? You can ask me to flip a coin, roll a dice, or get today's date."

Supported interactions:

- Flip a coin → returns **heads** or **tails**  
- Roll a dice → returns a number from **1 to 6**  
- Get today's date → returns the **current date**  

Any input outside this scope results in a fallback response indicating that the bot does not understand the request.

## Technologies
- React  
- Vite  
- JavaScript  
- HTML  
- CSS  

## Learning Objectives
- Understanding the structure of a React project using Vite  
- Creating and managing components  
- Handling state  
- Managing user input and events  
- Rendering dynamic content (chat messages)  
- Integrating logic with UI  

## How It Works
The chatbot is implemented as a frontend-only application using React state to manage the conversation flow.

- **Message handling**: User input is captured through an input field and processed via event handlers.
- **State management**: The conversation history is stored in a state variable (array of messages), where each new user message and bot response is appended sequentially.
- **Command parsing**: The application checks the user input against predefined commands.
- **Response generation**:
  - Coin flip → random selection between "heads" or "tails"
  - Dice roll → random number between 1 and 6
  - Date → current system date
- **Fallback logic**: If the input does not match any supported command, a default response is returned.
- **Rendering**: Messages are dynamically rendered in order to simulate a real chat experience.

## Project Structure

src/
├── components/
├── App.jsx
├── main.jsx
public/
package.json
vite.config.js



## Getting Started

### Prerequisites
- Node.js installed

### Installation
```bash
npm install

npm run dev
```
The application will be available at:
```
http://localhost:5173
```

Notes
Frontend-only project (no backend)

All chatbot logic is handled locally
Educational and introductory purpose

Author: Ana Carolina Casagrande Carioni

Developed as a practical exercise during the Supersimpledev React course.
