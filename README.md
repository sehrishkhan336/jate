# 19 Progressive Web Applications (PWA): Text Editor

## Description
Jate Application is a tool that allows users to create and manage their notes or code snippets. It offers a wide range of features and functionalities to enhance the editing experience while ensuring reliable access to content with or without an internet connection. Let's explore the key aspects of the application based on the given requirements.

## Client-Server Folder Structure
When you open the application in your editor, you will find a well-organized client-server folder structure. This structure enables easy navigation and maintenance of the codebase, providing separate directories for the client-side code (in the client folder) and the server-side code (in the server folder).

## Backend and Client Startup
By running npm run start from the root directory, the application initiates both the backend and the client. The backend server starts up and serves the client, enabling seamless communication between the client and server components.

## Installation
following plugins were installed for this app:
  * workbox-webpack-plugin

  * html-webpack-plugin
  * babel-loader
  * IndexedDB Database
  * concurrently (Dev dependency)
  * webpack-pwa-manifest


## Usage
For the usage of this app please follow the below instructions:

* In your terminal please type following to install all the plugins:
       npm install.
* To run the app please type following to run the application: 
        npm run start

## Screenshot of the App



![Screenshot of the app](./Assets/00-demo.gif)

The following image shows the application's `manifest.json` file:

![Demonstration of the finished Module 19 Challenge with a manifest file in the browser.](./Assets/01-manifest.png)

The following image shows the application's registered service worker:

![Demonstration of the finished Module 19 Challenge with a registered service worker in the browser.](./Assets/02-service-worker.png)

The following image shows the application's IndexedDB storage:

![Demonstration of the finished Module 19 Challenge with a IndexedDB storage named 'jate' in the browser.](./Assets/03-idb-storage.png)

## Link to the App

Heroku App Link:    https://gentle-reef-21101-af1dcb27f2f0.herokuapp.com/
GITHUB Repo Link:    https://github.com/sehrishkhan336/jate/tree/master


## License



## Reference


