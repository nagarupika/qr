import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DressDetails from './components/DressDetails';
import './style.css';

const dressDetailsData = {
  101: {
    material: 'Silk',
    careInstructions: 'Dry clean only',
    sustainability: 'Made from recycled silk materials',
    origin: 'India',
    brand: 'Kanchipuram-silk',
    garment: 'Saree',
    size: 'free-size',
  },
  102: {
    material: 'Linen',
    careInstructions: 'Machine wash in cold water, hang dry',
    sustainability: 'Certified organic linen, ethically sourced',
    origin: 'India',
    brand: 'OTTO',
    garment: 'Shirt',
    size: 'L-40',
  },
  103: {
    material: 'Silk',
    careInstructions: 'Dry clean only',
    sustainability: 'Made from recycled silk materials',
    origin: 'India',
    brand: 'Kanchipuram-silk',
    garment: 'Saree',
    size: 'free-size',
  },
  104: {
    material: 'Silk',
    careInstructions: 'Dry clean only',
    sustainability: 'Made from recycled silk materials',
    origin: 'India',
    brand: 'Kanchipuram-silk',
    garment: 'Saree',
    size: 'free-size',
  },
  105: {
    material: 'Silk',
    careInstructions: 'Dry clean only',
    sustainability: 'Made from recycled silk materials',
    origin: 'India',
    brand: 'Kanchipuram-silk',
    garment: 'Saree',
    size: 'free-size',
  },
  106: {
    material: 'Silk',
    careInstructions: 'Dry clean only',
    sustainability: 'Made from recycled silk materials',
    origin: 'India',
    brand: 'Kanchipuram-silk',
    garment: 'Saree',
    size: 'free-size',
  },
  107: {
    material: 'Silk',
    careInstructions: 'Dry clean only',
    sustainability: 'Made from recycled silk materials',
    origin: 'India',
    brand: 'Kanchipuram-silk',
    garment: 'Saree',
    size: 'free-size',
  },
  108: {
    material: 'Silk',
    careInstructions: 'Dry clean only',
    sustainability: 'Made from recycled silk materials',
    origin: 'India',
    brand: 'Kanchipuram-silk',
    garment: 'Saree',
    size: 'free-size',
  },
  109: {
    material: 'Silk',
    careInstructions: 'Dry clean only',
    sustainability: 'Made from recycled silk materials',
    origin: 'India',
    brand: 'Kanchipuram-silk',
    garment: 'Saree',
    size: 'free-size',
  },
  110: {
    material: 'Silk',
    careInstructions: 'Dry clean only',
    sustainability: 'Made from recycled silk materials',
    origin: 'India',
    brand: 'Kanchipuram-silk',
    garment: 'Saree',
    size: 'free-size',
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
