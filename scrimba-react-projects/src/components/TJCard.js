import "./TJCard.css"

export default function TJCard(props){

    return (
        <div className="tj-wrapper">
            <img src={props.img} alt=""></img>

            <div className="tj-text">
                <div className="tj-heading">
                    <span>
                        <p>{props.country} </p>
                        <a href="google.com">View on google map</a>
                    </span>
                    <br></br>
                    <h1>{props.name}</h1>
                </div>

                <div className="tj-info">
                    <b>{props.date}</b>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )

};