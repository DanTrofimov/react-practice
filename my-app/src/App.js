import './App.css';
import Item from './components/Item/Item';
import ItemList from "./components/ItemList/ItemList"

function App() {
  const listOfItems = [
      { itemName: "test1" }, 
      { itemName: "test2" }, 
      { itemName: "test3" }, 
      { itemName: "test4" }, 
      { itemName: "test5" }, 
  ];

  return (
    <div className="App">
      <ItemList title="List of items">
        { listOfItems.map((item) => <Item itemName={item.itemName} key={item.itemName}/>) }
      </ItemList>
    </div>
  );
}

export default App;