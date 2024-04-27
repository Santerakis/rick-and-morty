import {useCharacters} from "@/assets/hooks/useCharacters";
import {CharacterCart} from "@/components/CharacterCart/CharacterCart";
import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import {getLayout} from "@/components/Layuot/Layuot";
import Link from "next/link";

function Characters() {
    const characters = useCharacters()

    return (
        <>
            <HeadMeta title={'Characters'}/>
                {characters && characters.map(character =>
                    <Link key={character.id} href={`/characters/${character.id}`}>
                        <CharacterCart character={character}/>
                    </Link>
                )}
        </>
    );
}

Characters.getLayout = getLayout
export default Characters

