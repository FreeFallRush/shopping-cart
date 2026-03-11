# Shopping Cart in React

**Shopping Cart** with **React** and **TypeScript**, originally from [The Odin Project Curriculum – Node Path](https://www.theodinproject.com/lessons/node-path-react-new-shopping-cart).

- Live demo: [View Project](https://freefallrush-shopping-cart.netlify.app/)

============================================================================

EveryShop is a simple e-commerce style application built with React + TypeScript.
Users can browse products, add them to a cart, update quantities, and view their order summary.

The project uses core React concepts:

- Component architecture
- React Router navigation
- Global state management using React Context
- Fetching data from an external API
- State updates and derived values
- Reusable components

**Technologies Used**

- React
- TypeScript
- React Router
- React Context API
- FakeStore API
- CSS Modules
- Vite

===========================================================================

The project was initially implemented using props to pass cart state through multiple components.
It was later refactored to use React Context (useContext) to manage the cart globally and eliminate prop drilling.
