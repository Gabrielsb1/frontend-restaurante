import styles from "./card.module.css";

interface CardProps {
    price: number,
    title: string,
    urlimg: string
}

export function Card({ price, urlimg, title } : CardProps){
    return(
        
    <main className={styles.my_Cardapio_Main}>
        <div className={styles.card_Cardapio}>
            <img src={urlimg}/>
            <h2>{title}</h2>
            <p className={styles.descricao_prato}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            numquam asperiores repellendus quasi vel ipsam molestias fugit atque
            qui deserunt</p>
            <p><b>Valor: </b>R${price}</p>
            <button className={styles.button_carrinho}>Opções</button>
        </div>
    </main>
    )
}