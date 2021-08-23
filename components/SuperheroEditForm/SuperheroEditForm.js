import React, {useState} from "react";
import styles from './SuperheroEditForm.module.css';
import Images from "../Images/Images";
import UploadFilesForm from '../ImageUpload/ImageUpload'
const initialError = {
    status: "",
    message: "",
    error: "",
}

const SuperheroEditForm = ({superhero, onSave, onCancel}) => {
    const [superheroData, setSuperheroData] = useState(superhero);
    const [image, setImage] = useState([]);
    const [error, setError] = useState(initialError);

    const handleFormEdit = (e) => {
        e.preventDefault();
        onSave({
            id: superhero.id,
            nickname,
            real_name,
            origin_description,
            superpowers,
            catch_phrase,
            image
        })
    }

    const fileValidate = (file) => {
        if (
            file.type === "image/png" ||
            file.type === "image/jpg" ||
            file.type === "image/jpeg"
        ) {
            setError(prevState => ({...prevState, error: ""}));
            return true;
        } else {
            setError(prevState => ({...prevState, error: "File type allowed only jpg, png, jpeg"}))
            return false;
        }
    };
    const handleChange = (e) => {
        const imagesArray = [];
        let isValid = "";

        for (let i = 0; i < e.target.files.length; i++) {
            isValid = fileValidate(e.target.files[i]);
            imagesArray.push(e.target.files[i]);
        }
        setImage(imagesArray);
    };

    const {nickname, real_name, origin_description, superpowers, catch_phrase} = superheroData;
    const onChange = (e) => setSuperheroData({ ...superheroData,[e.target.name]: e.target.value });
    return (<>
        <form onSubmit={handleFormEdit}>
            <textarea className={styles.form_input} autoFocus={true} name='nickname' onChange={onChange} id="nickname" value={nickname}
                      required/>
            <textarea className={styles.form_input} onChange={onChange} name='real_name' id="real_name" value={real_name} required/>
            <textarea className={styles.form_input} onChange={onChange} name='origin_description' id="origin_description"
                      value={origin_description} required/>
            <textarea className={styles.form_input} onChange={onChange} name='superpowers' id="superpowers" value={superpowers} required/>
            <textarea className={styles.form_input} onChange={onChange} name='catch_phrase' id="catch_phrase" value={catch_phrase}
                      required/>
            <UploadFilesForm error={error} handleChange={handleChange}/>
            <div>
                <input type="submit" value='Save'/>
                <input type="submit" value='Cancel' onClick={onCancel}/>
            </div>
        </form>
        <Images superhero={superhero}/>
        </>
    )
}

export default SuperheroEditForm;