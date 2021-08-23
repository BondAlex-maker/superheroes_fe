import styles from './ProfileForm.module.css';
import Images from '../Images/Images'

const ProfileForm = ({superhero}) => {
    const {data} = superhero;
    const {nickname, real_name, origin_description, superpowers, catch_phrase,image} = data;
    console.log(image[0].path);
    return (<>
            <div className={styles.profileForm_container}>
                <div className={styles.profileForm_avatarContainer}>
                    <img className={styles.profileForm_avatar} src={"http://localhost:8000/uploads/" + data.image[0].image_name} alt=""/>
                </div>

                <div className={styles.profileForm_infoContainer}>
                    <div className={styles.profileForm_info}>
                        <div className={styles.profileForm_info_username}>{nickname}</div>
                        <div className={styles.profileForm_info_username}>{real_name}</div>
                        <div className={styles.profileForm_info_username}>{origin_description}</div>
                        <div className={styles.profileForm_info_username}>{superpowers}</div>
                        <div className={styles.profileForm_info_username}>{catch_phrase}</div>
                    </div>
                </div>

            </div>
            <Images superhero={data}/>
        </>
    )
}

export default ProfileForm;