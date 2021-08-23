import {useEffect, useState} from "react";
import CreateSuperheroForm from "../CreateSuperheroForm/CreateSuperheroForm";
import Superhero from "../Superhero/Superhero";
import axios from "axios";

const SuperheroesList = ({superheroes}) => {
    const [superheroesList, setSuperheroesList] = useState(superheroes);
    useEffect(()=>{
        setSuperheroesList(superheroes);
    },[superheroes]);

    async function editPost({id, nickname, real_name, origin_description, superpowers, catch_phrase, image}) {
        const data = new FormData();
        for (let i = 0; i < image.length; i++) {
            data.append("images[]", image[i]);
        }
        data.append('nickname', nickname);
        data.append('real_name', real_name);
        data.append('origin_description', origin_description);
        data.append('superpowers', superpowers);
        data.append('catch_phrase', catch_phrase);
        const {data: updatedSuperhero} = await axios.post(`http://localhost:8000/api/superheroes/edit/${id}`, data);
        const updatedList = superheroesList.map((superhero) => {
            return superhero.id === updatedSuperhero.id ? updatedSuperhero : superhero;
        })
        setSuperheroesList(updatedList);
    }

    async function deleteSuperhero({id}) {
        await axios.delete(`http://localhost:8000/api/superheroes/${id}`);

        setSuperheroesList(superheroesList.filter((superhero) => superhero.id !== id));
    }

    const createSuperhero = async ({nickname, real_name, origin_description, superpowers, catch_phrase, image}) => {

        const data = new FormData();
        for (let i = 0; i < image.length; i++) {
            data.append("images[]", image[i]);
        }
        data.append('nickname', nickname);
        data.append('real_name', real_name);
        data.append('origin_description', origin_description);
        data.append('superpowers', superpowers);
        data.append('catch_phrase', catch_phrase);

        const {data: createdSuperhero} = await axios.post('http://localhost:8000/api/superheroes', data);
        setSuperheroesList([createdSuperhero, ...superheroesList]);

    }

    return (
        <div>
            <CreateSuperheroForm onCreate={createSuperhero}/>
            {
            superheroesList.map((superhero) => (
                <Superhero key={superhero.id} superhero={superhero} onEdit={editPost} onDelete={deleteSuperhero}/>
            ))}
        </div>
    )
}

export default SuperheroesList;