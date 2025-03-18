export default function Productitem(props) {
    return (
        <>
       <div className="product-item">
            <img className="product-image" src={props.imageUrl} alt={props.name} />
            <hr />
            <h4>{props.name}</h4>
            <h5>₹{props.price}</h5>
        </div>
        </>
    )
}