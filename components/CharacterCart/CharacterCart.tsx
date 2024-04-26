import Image from "next/image";
import {Character} from "@/assets/hooks/useCharacters";
import s from './CharacterCart.module.scss'

type PropsType = {
    character: Character
}

export const CharacterCart = ({character}: PropsType) => {
    return (
        <div className={s.card}>
            <div>{character.name}</div>
            <Image src={character.image} alt={`Picture of ${character.name}`} width={300} height={300}/>
        </div>
    )
}