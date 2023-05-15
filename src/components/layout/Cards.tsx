import styles from './Cards.module.css';
import banner1 from '../img/CardP.png';
import banner2 from '../img/CardS.png';
import banner3 from '../img/CardB.png';

function Cards() {

    return (
        
        <section className={styles.actor_Cards_Container}>
            <div className={styles.cards_content}>
                <img  src={banner1} className={styles.card}></img>
                <img  src={banner2} className={styles.card}></img>
                <img  src={banner3} className={styles.card}></img>
            </div>
        </section>
  
              
          

    );
}

export default Cards;