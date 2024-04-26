import {useEffect, useState} from "react";
import axios from "axios";

export const useCharacters = () => {
    const [characters, setCharacters] = useState<null | Character[]>(null)
    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(res => setCharacters(res.data.results))
    }, []);

    return characters
}

//types
export type Character = {
    id: number
    name: string
    image: string
}