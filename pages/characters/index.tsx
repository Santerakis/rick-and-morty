import {useCharacters} from "@/assets/hooks/useCharacters";
import {CharacterCart} from "@/components/CharacterCart/CharacterCart";
import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import {getLayout} from "@/components/Layuot/Layuot";

function Characters() {
    const characters = useCharacters()

    return (
        <>
            <HeadMeta title={'Characters'}/>
                {characters && characters.map(character =>
                    <CharacterCart key={character.id} character={character}/>
                )}
        </>
    );
}

Characters.getLayout = getLayout
export default Characters

