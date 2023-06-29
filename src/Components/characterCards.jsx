const CharacterCards = ({ characters }) => {
    return characters.map((character) => {
        return(
        <article className="character-card">
            <img src={character.imagen} alt="Imagen del personaje"/>
            <div className="character-information">
            <h1>{character.nombre}</h1>
            <p className="description">{character.descripcion}</p>
            </div>
        </article>
        )
    })
}

export default CharacterCards;