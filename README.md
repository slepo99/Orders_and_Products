# Orders & Products
___
## About:
### Foreword
Hello) This application was created to manage product sales. You can add orders, specify their parameters, search for new orders and delete old ones. I hope you like my work, enjoy it).

### Technology stack:

So, the product development was carried out using the following technologies and dependencies:

***Client side***:
+ Vue3 (framework and main tool for developing the clint part)
+ Typescript
+ Pinia (global storage in which we can store data for reuse in other components)
+ Vue-router (router with which we can create single page applications)
+ Socket.io (ho handle actove sessions of users)
+ Vitest (to test vue components )
  
***Server side:***
+ Node.js 
+ Express (web framework for creating the server side of the application on the Node.js platform, you can run the server, send queries to the database and generate api)
+ Mongodb (Lightweight, document-oriented database)
+ Mongoose (library that simplifies interaction with the database)
+ Postman

___
## Features:
+ Authorization and registration based on json web token
+ Typed code
+ Full RESTapi cycle, the ability to receive, update, delete and add data.
+ Forms Validation
+ Reusable components
+ Single page application
+ Routes protection 
+ Unit tests
  
___
## Appearance and Functionality:
### Orders page: 
1)
![mainPage](https://i.ibb.co/cL9zXq4/2023-10-20-09-13-09.png)

Here we can see the main page, where we can manage orders in different ways

2)
![mainPageProducts](https://i.ibb.co/YR9S7wh/2023-10-20-09-13-27.png)


In the products tab we can see which products are available and what status they have, we can also delete some products
### Products page:
3)
![addOrder](https://i.ibb.co/3hHTfG6/2023-10-20-09-10-30.png)

By clicking on the add order button, we get a modal window in which we can enter basic information about the order

4)
![addProduct](https://i.ibb.co/4myq3jL/2023-10-20-09-11-10.png)

By clicking on the add product button, we get a window in which we can specify in detail all the necessary information about the product.

5)
![productsPage](https://i.ibb.co/sJxN2PF/2023-10-20-09-13-58.png)

On the products page we can view the available products in detail, we can also use the search field to find the required product by name, and there is also a filter by product type.)

### Header:
6)
![header](https://i.ibb.co/TLfXv4w/2023-10-20-09-15-43.png)

 There are also useful options for the user. In the corner you can see the current date, time and the number of active users.
### Auth:
7)
![loginPage](https://i.ibb.co/yfYwcsh/2023-10-20-09-14-37.png)

Authorization and registration are also implemented for users, there is also form validation, so we are not afraid that we will enter something incorrectly :)


8)
![registrationPage](https://i.ibb.co/vdhcyq5/2023-10-20-09-14-56.png)



___

## Documentation & links:
+ First of all, of course it is [official Vue documentation](https://vuejs.org/guide/introduction.html),
[router](https://router.vuejs.org/) and [Pinia](https://pinia.vuejs.org/)
+ everything about vue.js on [ stackoverflow](https://stackoverflow.com/questions/tagged/vue.js)
+ Useful videos and authors of YouTube channels [JavaScriptNinja](https://www.youtube.com/@JavaScriptNinja), [UlbiTv](https://www.youtube.com/c/UlbiTV) and [Vladilen Minin](https://www.youtube.com/@VladilenMinin)

___

___
## Project server setup
### Open terminal and go to server folder
```
cd server
```
### Install all dependencies for server

```
npm install
```
### Run server
```
npm start
```
### Open new terminal and go to client side
```
cd client
```
### Install all dependencies for client
```
npm install
```
### Run client side
```
npm run dev
```
### Open and enjoy for application
```
go to http://localhost:8080/ in browser
```
### Compiles and minifies for production
```
npm run build
```
### Run from docker container (if needed)
#### Build the client image 
```
cd orders_and_products/client
docker build -t client .
```
#### Build the server image 
```
cd ../server
docker build -t server .
```
#### Navigate to the project root directory:
```
cd ..
```
#### Build the main project container:
```
docker-compose up -d
 
```
### Unit tests:
#### You also can run tests , just run following command:
```
npm test
 
```
## Thank you very much for your attention:)
___