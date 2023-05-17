import styles from './Sobre.module.css';;
import foto_chefe from '../img/Chefe.png';
import card1 from '../img/galinha mineira.png';
import card2 from '../img/baião de dois.png';
import card3 from '../img/arroz carreteiro.png';
import card4 from '../img/moqueca capixaba.png';




function Sobre() {

    return (

    <div className="my_body">
 
        <div className={styles.my_Container}></div>
        <div className={styles.session} id={styles.session}>

            <div className={styles.photo}>
                <img src={foto_chefe} alt="Foto" />
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>Sobre nós</h2>
                <p className={styles.description}> O Portal Gourmet é um restaurante especializado em comidas típicas e tradicionais,<br />
            servindo como um verdadeiro portal para uma viagem gastronômica pelo Brasil.<br />
            Nosso cardápio apresenta pratos autênticos, cuidadosamente elaborados por nossa equipe<br />
            de chefs experientes.<br />
            <br />
            Buscamos constantemente inovar, trazendo novidades para o menu e explorando as diversas<br />
            regiões do país. Além do ambiente aconchegante do nosso restaurante, também oferecemos<br />
            serviços de delivery e catering para eventos especiais, levando a autêntica culinária<br />
            do Portal Gourmet onde quer que seja necessário.
                </p>
            </div>

        </div>


        <div className={styles.session2}>
            <h2 className={styles.title2}>Recomendações do Chefe</h2>
        </div>
   
        <div className={styles.car_linha}>
            <div className={styles.card1}>
            <img src={card1} alt="Foto1" />
                <h3>Galinha Mineira</h3>
                <p>Servido com acompanhamentos como quiabo refogado, couve, angu e uma boa pimenta.</p>
            </div>
            <div className={styles.card1}>
            <img src={card2} alt="Foto2" />
                <h3>Baião de dois</h3>
                <p>É um prato rico e reconfortante, cheio de sabores marcantes e texturas incríveis.</p>
            </div>
            <div className={styles.card1}>
            <img src={card3} alt="Foto3" />
                <h3>Arroz Carreteiro</h3>
                <p>É um prato saboroso e substancial, perfeito para os amantes de uma boa comida caseira.</p>
            </div>
            <div className={styles.card1}>
            <img src={card4} alt="Foto4" />
                <h3>Moqueca Capixaba.</h3>
                <p>É servida com arroz branco soltinho e pirão, proporcionando um sabor tropical e delicioso.</p>
            </div>
        </div>
    </div>

    );
}

export default Sobre;