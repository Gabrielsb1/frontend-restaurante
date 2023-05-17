import styles from "./Cardapio.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { useState } from 'react'
import { Card } from '../card/card';

import { useFoodData } from '../hooks/useFoodData';
import { CreateModal } from '../create-modal/modal';

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
      <div className={styles.container}>
        {data?.map(foodData => 
          <Card
            price={foodData.price} 
            title={foodData.title} 
            urlimg={foodData.urlimg}
          /> 
        )}
      </div>
      <div className={styles.container}>
        {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
        <button className={styles.button_modal} onClick={handleOpenModal}>Novo</button>
      </div>

        
      
    </body>
  );
}

export default Cardapio;