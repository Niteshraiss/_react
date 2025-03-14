export default function Productitem(props) {
    return (
        <>
        <div className="product-item">
            <h4>{props.name} </h4>
            <h5> {props.price}</h5>
        </div>
        </>
    )
}