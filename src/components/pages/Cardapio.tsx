import styles from "./Cardapio.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { useState } from 'react'
import { Card } from '../card/card';

import { FoodData } from '../interface/FoodData';
import { useFoodData } from '../hooks/useFoodData';
import { CreateModal } from '../create-modal/create-modal';

function Cardapio() {

  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }


  return (
    <body className={styles.my_body}>
      
      <div className={styles.h1_Cardapio}>
        <h1>Conheça o Cardápio</h1>
      </div>

        {data?.map(foodData => 
          <Card
            price={foodData.price} 
            title={foodData.title} 
            urlimg={foodData.urlimg}
          />
        )}
      
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>novo</button>
    

        
      
    </body>
  );
}

export default Cardapio;