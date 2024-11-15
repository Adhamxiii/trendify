# Trendify

## Overview

The **Trendify** is a fully functional e-commerce application designed for a seamless shopping experience. It combines product filtering, user authentication, and interactive animations to create an engaging and user-friendly interface. The platform is built with modern web technologies and adheres to best practices for performance, accessibility, and scalability.

---

## Table of Contents

- [Trendify](#trendify)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
    - [Frontend:](#frontend)
    - [Backend:](#backend)
    - [Database:](#database)
    - [Authentication:](#authentication)
  - [Installation](#installation)
    - [Prerequisites:](#prerequisites)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Live Demo](#live-demo)
  - [Contact Me](#contact-me)

---

## Features

- **Authentication**: Secure user login and registration.
- **Product Filtering**: Filter products by category, price range, and more.
- **Quick View Modal**: Preview product details with smooth animations.
- **Cart Management**: Add products to a cart and manage quantities dynamically.
- **Animations**: GSAP-powered transitions for modals, buttons, and page elements.
- **Responsive Design**: Mobile-first approach for a consistent experience across devices.
- **Admin Panel**: Manage products, categories, and orders (optional feature).
- **Search Functionality**: Quickly find products using a search bar.
- **Secure Backend**: Implements secure API routes for handling sensitive operations like authentication.

---

## Technologies Used

### Frontend:

- **React**: Component-based library for building the user interface.
- **Next.js**: Framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for custom styling.
- **GSAP**: Advanced JavaScript animation library for interactive UI.

### Backend:

- **Node.js**: JavaScript runtime for building the server.
- **Appwrite**: Self-hosted backend server for managing authentication and database operations.

### Database:

- **MongoDB**: NoSQL database for storing product, user, and order data.

### Authentication:

- **Appwrite Authentication**: Email-password-based secure authentication.

---

## Installation

### Prerequisites:

- **Node.js**: Ensure Node.js is installed on your machine.
- **MongoDB**: A running MongoDB instance or cloud database.
- **Appwrite**: Set up Appwrite for authentication and backend services.

1. Clone the repository:

   ```bash
   git clone https://github.com/Adhamxiii/trendify.git
   cd trendify
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following variables:

   ```bash
   NEXT_PUBLIC_DATABASE_ID=YOUR_DATABASE_ID
   NEXT_PUBLIC_PRODUCT_COLLECTION_ID=YOUR_PRODUCT_COLLECTION_ID
   NEXT_PUBLIC_CATEGORY_COLLECTION_ID=YOUR_CATEGORY_COLLECTION_ID
   NEXT_PUBLIC_USER_COLLECTION_ID=YOUR_USER_COLLECTION_ID
   NEXT_PUBLIC_ORDER_COLLECTION_ID=YOUR_ORDER_COLLECTION_ID
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to access the Trendify application.

## Usage

1- Authentication:

    - Register as a new user or log in using email and password.

2- Browsing Products:

    - Filter products by categories or price range using the sidebar.
    - Use the search bar to quickly find desired items.

3- Product Interaction:

    - Click on a product to view details in a quick view modal.
    - Add products to the cart or wishlist.

4- Cart Management:

    - View, update, and remove items from your cart.
    - Proceed to checkout for purchase.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## Live Demo

You can access the live version of trendify [here](https://trendify-rho.vercel.app/).

## Contact Me

If you have any questions or suggestions regarding the project, feel free to contact me:

- Email: [adhamxiii22](mailto:adhamxiii22@gmail.com)
- LinkedIn: [Adham](https://www.linkedin.com/in/adhamnasser/)
- GitHub: [Adhamxiii](https://github.com/Adhamxiii)