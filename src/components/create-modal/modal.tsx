import { useEffect, useState } from 'react';
import { useFoodDataMutate } from '../hooks/useFoodDataMutate';
import { FoodData } from '../interface/FoodData';
import styles from "./modal.module.css";

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}   

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal({ closeModal }: ModalProps){
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [urlimg, setImage] = useState("");
    const { mutate, isSuccess, isLoading } = useFoodDataMutate();

    const submit = () => {
        const foodData: FoodData = {
            title, 
            price,
            urlimg
        }
        mutate(foodData)
    }

    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [isSuccess])

    const handleGoBack = () => {
        closeModal();
    }

    return(
        <div className={styles.modal_overlay}>
            <div className={styles.modal_body}>
                <h2>Cadastre um novo item no cardápio</h2>
                <form className={styles.input_container}>
                    <Input label="title" value={title} updateValue={setTitle}/>
                    <Input label="price" value={price} updateValue={setPrice}/>
                    <Input label="image" value={urlimg} updateValue={setImage}/>
                </form>
                <div className={styles.button_container}>
                    <button onClick={submit} className={`${styles.btn_secondary} ${styles.btn_submit}`}>
                        {isLoading ? 'postando...' : 'Postar'}
                    </button>
                    <button onClick={handleGoBack} className={`${styles.btn_secondary} ${styles.btn_back}`}>
                        Voltar
                    </button>
                </div>
            </div>
        </div>
    )
}
