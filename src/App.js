import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DressDetails from './components/DressDetails';
import './style.css';

const dressDetailsData = {
  101: {
    material: 'Denim',
    careInstructions: 'Cold machine wash , Wash inside out',
    sustainability: 'Made from recycled denim materials',
    origin: 'India',
    brand: 'Tokyo Talkies',
    garment: 'High-Rise Jeans',
    size: '32',
    price: '740',
  },
  102: {
    material: 'Lycra',
    careInstructions: 'Machine wash in cold water, hang dry',
    sustainability: 'Certified organic lycra, ethically sourced',
    origin: 'India',
    brand: 'Sugr',
    garment: 'T-Shirt',
    size: 'L-40',
    price: '400',
  },
  103: {
    material: 'Rayon',
    careInstructions: 'Machine wash in cold water, hang dry',
    sustainability: 'Made from recycled rayon materials',
    origin: 'India',
    brand: 'STAR LINK',
    garment: 'Kurthi',
    size: 'L',
    price: '800',
  },
  104: {
    material: 'Cotton',
    careInstructions: 'Do not wring , Wash and dry inside out',
    sustainability: 'Made from recycled cotton materials',
    origin: 'India',
    brand: 'Indigo Plus',
    garment: 'Shirt',
    size: 'L-40',
    price: '1895',
  },
  105: {
    material: 'Polyester',
    careInstructions: 'Warm hand wash , Avoid direct sunlight',
    sustainability: 'Made from recycled polyester materials',
    origin: 'India',
    brand: 'SR__Creation',
    garment: 'Crop Top',
    size: 'M',
    price: '200',
  },
  106: {
    material: 'Cotton',
    careInstructions: 'Do not wring , Wash and dry inside out',
    sustainability: 'Made from recycled cotton materials',
    origin: 'India',
    brand: 'Midaz',
    garment: 'Briefs',
    size: '85cm',
    price: '175',
  },
  107: {
    material: 'Silk',
    careInstructions: 'Dry clean only',
    sustainability: 'Made from recycled silk materials',
    origin: 'India',
    brand: 'Kanchipuram-silk',
    garment: 'Saree',
    size: 'free-size',
    price: '740',
  },
  108: {
    material: 'Silk',
    careInstructions: 'Dry clean only',
    sustainability: 'Made from recycled silk materials',
    origin: 'India',
    brand: 'Kanchipuram-silk',
    garment: 'Saree',
    size: 'free-size',
    price: '740',
  },
  109: {
    material: 'Silk',
    careInstructions: 'Dry clean only',
    sustainability: 'Made from recycled silk materials',
    origin: 'India',
    brand: 'Kanchipuram-silk',
    garment: 'Saree',
    size: 'free-size',
    price: '740',
  },
  110: {
    material: 'Silk',
    careInstructions: 'Dry clean only',
    sustainability: 'Made from recycled silk materials',
    origin: 'India',
    brand: 'Kanchipuram-silk',
    garment: 'Saree',
    size: 'free-size',
    price: '740',
  },  
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {Object.keys(dressDetailsData).map((dressID) => (
            <Route
              key={dressID}
              path={`/qr-scan/${dressID}`}
              element={<DressDetails details={dressDetailsData[dressID]} />}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
