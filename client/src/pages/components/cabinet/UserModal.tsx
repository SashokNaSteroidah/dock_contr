import React, {useState} from 'react';

interface IUser {
    name: string;
    inn: number;
    organisation: string;
}

interface UserModalProps {
    onAdd: (user: IUser) => void;
    onCancel: () => void;
}

function UserModal({onAdd, onCancel}: UserModalProps) {

    const [name, setName] = useState('');
    const [inn, setInn] = useState(0);
    const [organisation, setOrganisation] = useState('');

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleInnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const inn = Number(value);
        setInn(inn);
    }

    const handleOrganisationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrganisation(e.target.value);
    }

    const handleSubmit = () => {
        onAdd({
            name,
            inn,
            organisation
        });
    }

    return (
        <div className="modalBack">
            <div className="modal">
                <h2>Добавить новую огранизация</h2>
                <input
                    placeholder="Имя владельца"
                    value={name}
                    onChange={handleNameChange}
                />

                <input
                    placeholder="ИНН"
                    value={inn}
                    onChange={handleInnChange}
                />

                <input
                    placeholder="Название организации"
                    value={organisation}
                    onChange={handleOrganisationChange}
                />

                <div onClick={handleSubmit}>Добавить</div>
                <div onClick={onCancel}>Отмена</div>
            </div>
        </div>

    );
}

export default UserModal