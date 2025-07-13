import './App.css';
import React, { useState } from 'react';
import CartApp from './CartApp';

const List = () => {
  return (
    <div>
      <h2>Car List</h2>
      <ul>
        <li>Car 1</li>
        <li>Car 2</li>
        <li>Car 3</li>
      </ul>
    </div>
  );
};

const CarParts = () => {
  return (
    <div>
      <h2>Car Parts</h2>
      <ul>
        <li>Engine</li>
        <li>Wheels</li>
        <li>Brakes</li>
      </ul>
    </div>
  );
};

// const Cart = () => {
//   return (
//     <div>
//       <h2>Your Cart</h2>
//       <p>No items in the cart.</p>
//     </div>
//   );
// };

const UserDetails = () => {
  return (
    <div>
      <h2>User Details</h2>
      <p>Name: John Doe</p>
      <p>Email: john.doe@example.com</p>
    </div>
  );
};

function App() {
  const [activeComponent, setActiveComponent] = useState('cart');
  return (
    <div className="App">
      <header style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: '#282c34', color: 'white', padding: '10px 0', zIndex: 1000 }}>
        <h1 style={{ margin: 0, textAlign: 'center' }}>Car Cart</h1>
        <nav style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '10px' }}>
          <button onClick={() => setActiveComponent('list')}>List</button>
          <button onClick={() => setActiveComponent('carParts')}>Car Parts</button>
          <button onClick={() => setActiveComponent('cart')}>Cart</button>
          <button onClick={() => setActiveComponent('userDetails')}>User Details</button>
        </nav>
      </header>

      <main style={{ marginTop: '100px', marginBottom: '100px', padding: '20px' }}>
        {activeComponent === 'list' && <List />}
        {activeComponent === 'carParts' && <CarParts />}
        {activeComponent === 'cart' && <CartApp />}
        {activeComponent === 'userDetails' && <UserDetails />}
      </main>

      <footer style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#282c34', color: 'white', padding: '10px 0', textAlign: 'center' }}>
        <div>
          <a href="#help" style={{ color: 'white', margin: '0 10px' }}>Help</a>
          <a href="#contact" style={{ color: 'white', margin: '0 10px' }}>Contact</a>
        </div>
        <p>Contact us: 123-456-7890 | Address: 123 CarCat Street, AutoCity</p>
      </footer>
    </div>
  );
}

export default App;
