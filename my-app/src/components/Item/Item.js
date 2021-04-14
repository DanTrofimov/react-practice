import "../Item/Item.css"

function Item({ itemName }) {
    return <h2 className="item">{ itemName }</h2>
}

export default Item;