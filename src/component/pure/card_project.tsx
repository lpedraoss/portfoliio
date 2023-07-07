import imagen from '../../assets/img/png/character3.png'

function CardProject() {
    return (
        <>
            <article className="card">
               <picture>
                <img src={imagen} alt='mi proyecto 1'></img>
               </picture>
                
            </article>
        </>
    )
}
export default CardProject