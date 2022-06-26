import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import logoMark from '../assets/brand.png';

import './index.css';

export default function MiniSidebar() {
  
    const navigate = useNavigate();
        
    function goBack() {
         navigate('/menu')
        }
   

  return (
    <aside className="minisidebar">
      <img src={logoMark} alt="Happy" />

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </aside>
  );
}