import { useState } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

type FoodProps = {
  id: number;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

interface ModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (data: FoodProps) => void;
}

export default function ModalAddFood({ isOpen, setIsOpen, handleAddFood }: ModalAddFoodProps) {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');


  async function handleSubmit(data: FoodProps) {
    handleAddFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" value={image} onChange={(event: any) => setImage(event.target.value)} />

        <Input name="name" placeholder="Ex: Moda Italiana" value={name} onChange={(event: any) => setName(event.target.value)} />
        <Input name="price" placeholder="Ex: 19.90" value={price} onChange={(event: any) => setPrice(event.target.value)} />

        <Input name="description" placeholder="Descrição" value={description} onChange={(event: any) => setDescription(event.target.value)} />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
