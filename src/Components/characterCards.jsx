const CharacterCards = ({ characters }) => {
    return characters.map((character) => {
        return(
        <article className="character-card">
            <img src={character.imagen} alt="Imagen del personaje"/>
            <h1>{character.nombre}</h1>
            <p className="description">{character.descripcion}</p>
        </article>
        )
    })
}

export default CharacterCards;