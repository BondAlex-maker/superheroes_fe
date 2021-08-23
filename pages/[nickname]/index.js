import axios from "axios";
import ProfileForm from '../../components/ProfileForm/ProfileForm'
import Link from 'next/link';

const Profile = ({superhero}) => {
    return (
        <>
            <Link href={'/'}>home</Link>
                <ProfileForm superhero={superhero}/>
        </>
    )
}

export default Profile;

export const getServerSideProps = async (context) => {
    console.log(context.query.nickname)
    try {
        const {data: superhero} = await axios.get(`http://localhost:8000/api/${context.query.nickname}`);
        return {
            props: {
                superhero,
            },
        }
    } catch (err) {
        console.log(err)
    }


}
