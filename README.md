# Product Management System
## Backend: https://github.com/rkumar17rb/CrudApplication
A full-stack application for managing products, including adding, updating, deleting, and viewing product details.

## Table of Contents

- [Overview](#overview)
- [Technologies](#technologies)
- [Features](#features)
- [Setup](#setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Explaination: https://drive.google.com/file/d/1_XcEH0D3hHfvHIhr_zRcBiHbGkTMxRIV/view

## Overview

This application is designed to provide a user-friendly interface for managing product details such as name, description, price, and stock quantity. The backend is built using ASP.NET Core with Web API, while the frontend is built with Angular, allowing users to perform CRUD (Create, Read, Update, Delete) operations on product data.

The application supports two main operations: 
1. **Product Management** – Add new products and update or delete existing products.
2. **Product Listing** – Display all products stored in the database.

## Technologies

### Frontend

- **Angular**: A TypeScript-based open-source framework for building client-side applications. Angular is used to build the frontend of the application and communicate with the backend API.
- **Bootstrap**: A CSS framework used for responsive and mobile-first web design. It is used to style the user interface for a better user experience.
- **RxJS**: A library for reactive programming used in Angular for handling asynchronous operations such as HTTP requests.

### Backend

- **ASP.NET Core**: A cross-platform, high-performance framework for building APIs. This project uses ASP.NET Core to create a RESTful Web API for product management operations.
- **Entity Framework Core**: An Object-Relational Mapper (ORM) used in ASP.NET Core for interacting with the database.
- **SQL Server**: A relational database management system used to store product data.

### Tools

- **Visual Studio Code**: A code editor used for developing the Angular frontend.
- **Visual Studio**: An integrated development environment (IDE) used for ASP.NET Core backend development.
- **Git**: A version control system used to track changes in the source code and collaborate with other developers.
- **Postman**: A tool used for testing API endpoints during development.

## Features

- **Add Product**: Users can add new products by providing details such as name, description, price, and stock quantity.
- **Edit Product**: Users can update the details of existing products.
- **Delete Product**: Users can delete products from the system.
- **List Products**: All products can be viewed in a list, displaying their name, description, price, and stock quantity.
- **Form Validation**: The form ensures that all required fields are filled out before submission.
- **RESTful API**: The backend exposes a RESTful API to perform CRUD operations on products.

## Setup

### Prerequisites

- **Node.js**: Ensure Node.js is installed on your machine. You can download it from [here](https://nodejs.org/).
- **Angular CLI**: Install the Angular CLI globally by running:

  ```bash
  npm install -g @angular/cli
## API Endpoints
![image](https://github.com/user-attachments/assets/7805a7b6-440c-4443-8c8d-74fb30cc8548)

## GET /api/Products
Description: Retrieves the list of all products.
Response: A list of products.
![image](https://github.com/user-attachments/assets/8aac3f74-3af3-42b7-975a-0a1ff534bb73)
![image](https://github.com/user-attachments/assets/251f718d-d448-47ea-b714-a22d21c4137e)


## POST /api/Products
Description: Adds a new product.
Body: Product details (name, description, price, stock quantity).
Response: The created product.


## PUT /api/Products/{id}
Description: Updates an existing product.
Body: Updated product details (name, description, price, stock quantity).
Response: The updated product.

## DELETE /api/Products/{id}
Description: Deletes a product by its ID.
Response: A confirmation of the deletion.

