import { useEffect, useState } from "react"
import Search from "./Search"
const CharacterCards = ({ characters, setCharacters, filter }) => {

    const get = async () => {
        const response = await fetch("http://localhost:5000/mainCharacters");
        const res = await response.json();
        setCharacters(res.filter((character) => character.nombre.toLowerCase().includes(filter.toLowerCase())
        ))
    }

    console.log(characters)
    useEffect(() => {
        get();
    }, [filter])
    return characters.map((character) => {
        return (
            <>
                <article className="character-card">
                    <img src={character.imagen} alt="Imagen del personaje" />
                    <div className="character-information">
                        <h1>{character.nombre}</h1>
                        <p className="description">{character.descripcion}</p>
                    </div>
                </article>
            </>
        )
    })
}

export default CharacterCards;