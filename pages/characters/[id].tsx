import {useCharacters} from "@/assets/hooks/useCharacters";
import {CharacterCart} from "@/components/CharacterCart/CharacterCart";
import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import {getLayout} from "@/components/Layuot/Layuot";
import {useCharacter} from "@/assets/hooks/useCharacter";

function Character() {
    const character = useCharacter()

    return (
        <>
            <HeadMeta title={'Character '}/>
            {character && <CharacterCart character={character}/>}
        </>
    );
}

Character.getLayout = getLayout
export default Character

