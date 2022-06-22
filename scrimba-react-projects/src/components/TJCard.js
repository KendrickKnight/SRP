export default function TJCard(props){

    return (
        <div>
            <img src={props.img} alt=""></img>

            <div>
                <div>
                    <p>{props.country}</p>
                    <a href="google.com">View on google map</a>
                    <br></br>
                    <h1>{props.name}</h1>
                </div>

                <div>
                    <b>{props.date}</b>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )

};