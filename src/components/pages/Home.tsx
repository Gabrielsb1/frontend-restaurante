import Carrosel from '../layout/Carrosel';
import Cards from '../layout/Cards';
import Footer from '../layout/Footer';
import styles from './Home.module.css';
import './Home.module.css';


function Home() {

    return (
        <div className="my_body">
        <Carrosel />
        <Cards />
        
        <div className={styles.my_Container}></div>

        <Footer />
        
      
  
      </div> 
       
    );
}

export default Home;