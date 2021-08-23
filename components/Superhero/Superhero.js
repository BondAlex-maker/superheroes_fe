import React, {useState} from "react";
import styles from './Superhero.module.css'
import SuperheroActionsDropDown from "../SuperheroActionsDropDown/SuperheroActionsDropDown";
import SuperheroEditForm from "../SuperheroEditForm/SuperheroEditForm";
import Link from 'next/link'
export default function Superhero({superhero, onEdit, onDelete}) {
    const [superheroData, setSuperheroData] = useState(superhero);
    const [editing, setEditing] = useState(false);
    let formatter = new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit"
    });

    const handleEdit = (data) => {
        setSuperheroData(data);
        onEdit(data);
        setEditing(!editing);
    }
    const handleDelete = () => {
        onDelete({id: superhero.id});
    }

    const handleShowEditField = () => {
        setEditing(!editing);
    }
    return (<>
        <div>
            <div className={styles.superhero}>
                <div className={styles.superhero_photo_wrapper}>
                    <Link passHref href={`/${superhero.nickname}`}>
                    <img className={styles.superhero_photo} src={"http://localhost:8000/uploads/" + superhero.image[0].image_name} width={60} height={60}  alt="userPhoto"/>
                    </Link>
                </div>
                <div className={styles.superhero_info}>
                    <div className={styles.superhero_info_user}>
                        <Link passHref href={`/${superhero.nickname}`}>
                            <div className={styles.superhero_info_user_name}>{superhero.nickname}</div>
                        </Link>
                        <div className={styles.superhero_dropdown}>
                            <SuperheroActionsDropDown superheroId={superhero.id} onDelete={handleDelete}
                                                      onEdit={() => setEditing(true)}/>
                        </div>
                    </div>
                    <div>
                        {editing
                            ?
                            <SuperheroEditForm onCancel={handleShowEditField} superhero={superhero} onSave={handleEdit}/>
                            : ''
                            }
                    </div>
                </div>


            </div>
        </div>

    </>)
}