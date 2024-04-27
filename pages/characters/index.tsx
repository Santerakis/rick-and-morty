import Head from "next/head";
import {Inter} from "next/font/google";
import styles from "@/styles/Home.module.css";
import {useCharacters} from "@/assets/hooks/useCharacters";
import {CharacterCart} from "@/components/CharacterCart/CharacterCart";
import {HeadMeta} from "@/components/HeadMeta/HeadMeta";

const inter = Inter({ subsets: ["latin"] });

export default function Characters() {
    const characters = useCharacters()

  return (
    <>
        <HeadMeta title={'Characters'} />
      <main className={`${styles.main} ${inter.className}`}>
          {characters && characters.map(character =>
              <CharacterCart key={character.id} character={character} />
          )}
      </main>
    </>
  );
}

