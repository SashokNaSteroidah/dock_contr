import React, {useState} from 'react';
import UserModal from "./UserModal";

interface IUser {
    name: string,
    inn: number,
    organisation: string
}

const INITIAL_USERS: Array<IUser> = [
    {name: "Сашок", inn: 21313123124, organisation: 'ООО "Пушок"'},
    {name: "Сашок", inn: 21313123124, organisation: 'ООО "Пушок"'},
    {name: "Сашок", inn: 21313123124, organisation: 'ООО "Пушок"'}
]

function CabinetItem() {

    const [users, setUsers] = useState<IUser[]>(INITIAL_USERS);
    const [showModal, setShowModal] = useState(false);

    const addUser = (newUser: IUser) => {
        setUsers([...users, newUser]);
        setShowModal(false);
    }

    return (
        <>
            <div className="cabinetNameField">
                <span>ФИО</span>
                <span>ИНН</span>
                <span>Название</span>
            </div>
            {users.map((user: IUser, index) =>
                <div className="cabinetItem" key={index}>
                    <h2>{user.name}</h2>
                    <h3>{user.inn}</h3>
                    <span>{user.organisation}</span>
                </div>
            )}
            <span style={{cursor: "pointer", margin: "0 0 20px"}} className="button" onClick={() => setShowModal(true)}>
                Добавить организацию
            </span>

            {showModal &&
                <UserModal
                    onAdd={addUser}
                    onCancel={() => setShowModal(false)}
                />
            }
        </>
    );
}

export default CabinetItem