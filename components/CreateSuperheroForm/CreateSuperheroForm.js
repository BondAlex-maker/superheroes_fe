import {useState} from "react";
import styles from './CreateSuperheroForm.module.css';
import UploadFilesForm from "../ImageUpload/ImageUpload";

const initialError = {
    status: "",
    message: "",
    error: "",
}

function CreateSuperheroForm({onCreate}){
    const [superhero, setSuperhero] = useState({
        nickname: '',
        real_name: '',
        origin_description: '',
        superpowers: '',
        catch_phrase: '',
        image: "",
    });
    const [image, setImage] = useState([]);
    const [error, setError] = useState(initialError);

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

    const handleCreate = (e) => {
        e.preventDefault();
        onCreate({
                nickname,
                real_name,
                origin_description,
                superpowers,
                catch_phrase,
                image
        })
    }

    // image onchange handler
    const handleChange = (e) => {
        const imagesArray = [];
        let isValid = "";

        for (let i = 0; i < e.target.files.length; i++) {
            isValid = fileValidate(e.target.files[i]);
            imagesArray.push(e.target.files[i]);
        }
        setImage(imagesArray);
    };

    const {nickname,real_name, origin_description, superpowers, catch_phrase } = superhero;
    const onChange = (e) => setSuperhero({ ...superhero, [e.target.name]: e.target.value });
    return (
        <>
        <h1 className={styles.h1}>Create superhero</h1>
    <form className={styles.form}  onSubmit={handleCreate}>
        <label className={styles.label} htmlFor="nickname">Nick name</label>
        <input
            className={styles.input}
            onChange={onChange}
            type='text'
            name='nickname'
            value={nickname}
            required
        />
        <label className={styles.label} htmlFor="real_name">Real name</label>
        <input
            className={styles.input}
            onChange={onChange}
            type='text'
            name='real_name'
            value={real_name}
            required
        />
        <label className={styles.label} htmlFor="origin_description">Origin Description</label>
        <input
            className={styles.input}
            onChange={onChange}
            type='text'
            name='origin_description'
            value={origin_description}
            required
        />
        <label className={styles.label} htmlFor="superpowers">Superpowers</label>
        <input
            className={styles.input}
            onChange={onChange}
            type='text'
            name='superpowers'
            value={superpowers}
            required
        />
        <label className={styles.label} htmlFor="catch_phrase">Catch Phrase</label>
        <input
            className={styles.input}
            onChange={onChange}
            type='text'
            name='catch_phrase'
            value={catch_phrase}
            required
        />

        <UploadFilesForm error={error} handleChange={handleChange} />

        <input
            className={styles.sign_up}
            onChange={onChange}
            type='submit'
            value='Submit'
        />
    </form>
    </>
    )
}

export default CreateSuperheroForm;
