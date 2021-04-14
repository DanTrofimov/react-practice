import "./ItemList.css"
import Item from "../Item/Item.js"

function ItemList({ title, children }) {

    console.log(children);
    const listOfItems = [
        { itemName: "test1" }, 
        { itemName: "test2" }, 
        { itemName: "test3" }, 
        { itemName: "test4" }, 
        { itemName: "test5" }, 
    ];
    const resultItems = listOfItems.map( (item) => 
        <Item itemName={item.itemName} key={item.itemName }/>
    )

    return (
        <div>
            <h2 className="title">{ title }</h2>
            <div className="items-list">
                { children }
            </div> 
        </div>
    )
}

export default ItemList;