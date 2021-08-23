import SuperheroesList from "../components/SuperheroesList/SuperheroesList";
import axios from 'axios';
import { Pagination } from 'antd';
import {useRouter} from "next/router";

export default function Home({superheroes}) {
    const router = useRouter();
    const handleChange = (page) => {
        const path = router.pathname;
        const query = router.query;
        query.page = page
        console.log(page);
        router.push({
            pathname : path,
            query: query,
        })
    }

    return (<>
            <SuperheroesList superheroes={superheroes}/>
            <Pagination defaultCurrent={1} onChange={handleChange} total={50}/>
        </>

    );
};


export const getServerSideProps = async ({query}) => {
    const page = query.page || 1;
    console.log(page);
    try {
        const {data: superheroes} = await axios.get(`http://localhost:8000/api/superheroes?page=${page}`);
        console.log(superheroes);
        return {
            props: {
                superheroes,
            },
        }
    } catch (err) {
        console.log(err)
    }
}