import { useEffect } from "react"
const CharacterCards = ({ characters, setCharacters, filter }) => {

    useEffect(() => {
        const get = async () => {
            const response = await fetch("https://nintendo-node-js.vercel.app/mainCharacters");
            const res = await response.json();
            setCharacters(res.filter((character) => character.nombre.toLowerCase().includes(filter.toLowerCase())
            ))
        }

        get();

    }, [filter, setCharacters])
    return characters.map((character, index) => {
        return (
            <article key={index} className="character-card">
                <img src={character.imagen} alt="Imagen del personaje" />
                <div className="character-information">
                    <h1>{character.nombre}</h1>
                    <p className="description">{character.descripcion}</p>
                </div>
            </article>
        )
    })
}

export default CharacterCards;