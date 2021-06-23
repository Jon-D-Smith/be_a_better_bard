const Character = ({name, url}) => {
    return ( 
        <>
        <img className="headshot" src={url} />
        <h2 >{name}</h2>
        </>
     );
}
 
export default Character;