import hotel from '../assets/hotel.png';
import book from '../assets/book.png';
import cst from '../assets/cst.png';
import warehouse from '../assets/warehouse.png';
import movie from '../assets/movie.png';
import hospital from '../assets/hospital.png';
import ecommerceReact from '../assets/ecommerceReact.png';
import staticGenerators from '../assets/staticGenerators.png';
import ecommerceDjango from '../assets/ecommerceDjango.png';

const projectData = [
  {
    title: "Hotels Reservation System – Django, React, PostgreSQL",
    image: hotel,
    description: [
      "Full-stack booking platform for multiple hotels with Admin, Hotel Owner, and User roles.",
      "Room management, authentication, and booking via Django REST API.",
      "Responsive frontend built using React and Bootstrap."
    ],
    live: "https://hotels-reservation-system-ui.vercel.app/",
    github: "https://github.com/Amir-Kamel/Hotels_Reservation_System_API"
  },
  {
    title: "Supermarkets Warehouse Inventory – Django, PostgreSQL",
    image: warehouse,
    description: [
      "Inventory system to manage stock, shipments, and orders for supermarkets.",
      "Role-based access for managers and employees.",
      "Built using Django, PostgreSQL, and Bootstrap."
    ],
    live: movie,
    github: "https://github.com/Amir-Kamel/Warehouse_Supermaket_Django_PostgreSQL"
  },
  {
    title: "Movie App – React, TMDB API",
    image: movie,
    description: [
      "Movie browser app using React and TMDB API to display movie/TV show info.",
      "Dynamic routing and navigation with React Router.",
      "API integration with Axios."
    ],
    live: "https://movie-app-react-sandy-beta.vercel.app/",
    github: "https://github.com/Amir-Kamel/MovieApp_React"
  },
  {
    title: "CST Bookstore – Client-Side Tech (JS/Bootstrap)",
    image: cst,
    description: [
      "Responsive online bookstore with role-based features for customers, sellers, and admins.",
      "Interactive frontend using Bootstrap, CSS, and Vanilla JS."
    ],
    live: "https://iti-cstproject-onlinebookstore.vercel.app/",
    github: "https://github.com/Amir-Kamel/ITI-CSTProject-OnlineBookStore"
  },
  {
    title: "Book and Author Manager Flask, SQLite",
    image: book,
    description: [
      "Full-featured bookstore website built with Flask and SQLite.",
      "A simple web app to add books and authors, with each book linked to its respective author."
    ],
    live: "https://book-store-flask-sqlite.onrender.com/",
    github: "https://github.com/Amir-Kamel/Book-Store-Flask-SQLite"
  },
    {
    title: "Book and Author Manager Flask, SQLite",
    image: book,
    description: [
      "Full-featured bookstore website built with Flask and SQLite.",
      "A simple web app to add books and authors, with each book linked to its respective author."
    ],
    live: "https://book-store-flask-sqlite.onrender.com/",
    github: "https://github.com/Amir-Kamel/Book-Store-Flask-SQLite"
  },
  {
    title: "E-commerce Store React, Redux, API",
    image: ecommerceReact,
    description: [
      "Modern E-commerce website built with React and Redux Toolkit.",
      "Uses real API data, React Router, and hooks for dynamic product display and cart management."
    ],
    live: "https://e-commerce-react-beta-ten.vercel.app/",
    github: "https://github.com/Amir-Kamel/E-commerce_React"
  },
  {
    title: "Smart Generators Static Website",
    image: staticGenerators,
    description: [
      "Freelance project for Smart Generators Company using HTML, CSS, JavaScript, and Bootstrap.",
      "Responsive static website showcasing products, services, and contact information."
    ],
    live: "https://static-web-pages-freelance-generators-company.vercel.app/",
    github: "https://github.com/Amir-Kamel/StaticWebPages_Freelance_GeneratorsCompany"
  },
  {
    title: "E-commerce Platform Django, PostgreSQL",
    image: ecommerceDjango,
    description: [
      "Dynamic E-commerce website built with Django and PostgreSQL.",
      "Supports user auth, product management, shopping cart, and secure transactions with a responsive UI."
    ],
    live: "https://e-commerce-django-postgresql.onrender.com/",
    github: "https://github.com/Amir-Kamel/E-commerce-Django-PostgreSQL"
  },
  {
    title: "Hospital Management System – Odoo",
    image: hospital,
    description: [
      "Hospital system using Odoo 18 to manage patients, doctors, records, and reports.",
      "Includes relations between patient and doctor with visit history."
    ],
    github: "https://github.com/Amir-Kamel/Hospital_Managment_System_Odoo"
  }
];

export default projectData;