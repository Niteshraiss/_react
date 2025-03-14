import Productitem from "../components/Productitem"
export default function Product() {
    return (
        <>
            <div className="product">
       
                <Productitem name="IQ00 9T" price={45000}/>
                <Productitem name="IQ00 10" price={50000}/>
                <Productitem name="IQ00 11" price={45000}/>
                <Productitem name="IQ00 12" price={6000}/>
        
            </div>
        </>
    )
}