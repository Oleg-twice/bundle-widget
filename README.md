# bundle-widget

1. Clone this repo
2. Use Node 18.17.1 (npm 6.14.16+ version).
   If you have nvm installed, run nvm use to set the correct version.You can install nvm using these links:
Windows - https://github.com/coreybutler/nvm-windows
MacOS/Linux - https://github.com/nvm-sh/nvm

4. Checkout to the root folder and run:
  Run npm install
  Run npm run dev (or npm start)

https://github.com/Oleg-twice/bundle-widget/assets/72275930/dec5dc8a-419b-40ed-b676-366bf92802fb

This demonstration showcases a straightforward implementation of bundle widget in React. 
The main stack is React, TS, Scss and current implementation primarily relies on the React and JS/TS design patterns such as custom hooks, decorators and factory patterns.
Current application using JSON file as a stub to simulate a real data fetching, user is able to set necessary amount of items to get.
For these purposes, a simple settings form has been implemented that helps configure and simulate data acquisition.
Widget and items inside of it have a default image placeholders in case if server send items without images (or with broken images).

