import { useEffect, useState } from 'react';
import { useFoodDataMutate } from '../hooks/useFoodDataMutate';
import { FoodData } from '../interface/FoodData';
import styles from './modal.module.css';

interface InputProps {
  label: number | string ;
  value: number | string | number ;
  updateValue(value: any): void;
}

interface ModalProps {
  closeModal(): void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input value={value} onChange={(event) => updateValue(event.target.value)}></input>
    </>
  );
};

export function CreateModal({ closeModal }: ModalProps) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [urlimg, setImage] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [id, setId] = useState<number >(0);
  const { mutate, removeItem, isSuccess, isLoading } = useFoodDataMutate();

  const submit = () => {
    const foodData: FoodData = {
      id,
      title,
      price,
      urlimg,
    };
    mutate(foodData);
  };

  useEffect(() => {
    if (!isSuccess) return;
    closeModal();
  }, [isSuccess]);

  const handleGoBack = () => {
    closeModal();
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleDelete = () => {
    if (id) {
      removeItem(id);
    }
  };

  const handleEditSubmit = () => {
    if (id) {
      const foodData: FoodData = {
        id,
        title,
        price,
        urlimg,
      };
      mutate(foodData);
    }
  };

  return(
    <div className={styles.modal_overlay}>
      <div className={styles.modal_body}>
        <h2>Cadastre um novo item no cardápio</h2>
        <form className={styles.input_container}>
          {!editMode ? (
            <>
              <Input label="title" value={title} updateValue={setTitle} />
              <Input label="price" value={price} updateValue={setPrice} />
              <Input label="image" value={urlimg} updateValue={setImage} />
            </>
          ) : (
            <>
              <Input label="ID" value={id} updateValue={setId} />
            </>
          )}
          <div className={styles.button_container}>
            {!editMode ? (
              <>
                <button
                  onClick={submit}
                  className={`${styles.btn_secondary} ${styles.btn_submit}`}
                >
                  {isLoading ? 'Postando...' : 'Postar'}
                </button>
                <button
                  onClick={handleGoBack}
                  className={`${styles.btn_secondary} ${styles.btn_back}`}
                >
                  Voltar
                </button>
                <button
                  onClick={handleEdit}
                  className={`${styles.btn_secondary} ${styles.btn_edit}`}
                >
                  Editar
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleGoBack}
                  className={`${styles.btn_secondary} ${styles.btn_submit}`}
                >
                  Voltar
                </button>
                <button
                  onClick={handleDelete}
                  className={`${styles.btn_secondary} ${styles.btn_delete}`}
                >
                  Deletar
                </button>
                </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

