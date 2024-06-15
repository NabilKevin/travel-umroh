import { useContext } from "react";
import { AppContext } from "../../App";

const Cards = () => {
    const {dummyData, margin, cardStyle, sizes, mode} = useContext(AppContext);
    return (
        <div className="container-lg d-flex justify-content-center cards mt-5 mb-5">
            {
            dummyData.map((data, i) => {
            return (
            <div className={`card ${margin[i][1] === 1.25 ? 'z-2' : ''}`} key={i} style={
                { 
                transform: `translateX(${margin[i][0]}px) scale(${margin[i][1]})`,
                color: cardStyle.color,
                backgroundColor: cardStyle.backgroundColor,
                width: sizes.card
                }}>
                <img src={`/src/images/PAKET ${data[0]}.png`} className="card-img-top" alt='...'  />
                <div className="card-body d-flex flex-column justify-content-between align-items-center" style={{ padding: sizes.cardBody }}>
                    <h5 className="card-title" style={{ fontSize: sizes.title }}>Paket {data[0]}</h5>
                    <a href={`/prices/${data[0]}`} className={`btn btn-${mode === 'dark' ? 'light' : 'dark'}`} style={{ fontSize: sizes.button }}>See more..</a>
                </div>
            </div>
            )})
        }
        </div>
    )
}

export default Cards;