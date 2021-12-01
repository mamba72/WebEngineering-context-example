
/* TODO: style me! */
export default function ItemCard({ name, img, stock, price, add, inCart }) {
    let styleCard;
    if(inCart)
        styleCard = "cart-card";
    else
        styleCard = "card";
    
    return <article className={styleCard}>
        <div className="img-wrapper">
            <img src={img} alt={name} />
        </div>
        <div className="content">
        <h2 className="plant-name">{name}</h2>
        <p className="price">${price}</p>
        {/* if this item is in the cart, do not show button */}
        {!inCart ? (
            <button onClick={() => add(name)} className={stock <= 0 ? 'disabled' : ''}>Add to Cart</button>
        ) : (<div></div>)}
        {/* <button onClick={() => add(name)} className={stock <= 0 ? 'disabled' : ''}>Add to Cart</button> */}
        </div>
    </article>
}