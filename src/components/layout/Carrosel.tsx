import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styles from './Carrosel.module.css';


function Carrosel() {
  useEffect(() => {
    document.body.style.background = '#453528';
    return () => {
      document.body.style.background = '';
    };
  }, []);
  
  return (
    <div className={styles.container}>
      <div id="carouselExampleIndicators" className="carouselExampleIndicators carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className={`${styles.banner1} carousel-image d-block w-100 bg-dark`} ></div>
          </div>
          <div className="carousel-item">
            <div className={`${styles.banner2} carousel-image d-block w-100 bg-dark`} ></div>
          </div>
          <div className="carousel-item">
            <div className={`${styles.banner3} carousel-image d-block w-100 bg-dark`} ></div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Carrosel;
