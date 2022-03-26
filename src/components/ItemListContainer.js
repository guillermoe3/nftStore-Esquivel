import ItemCount from "./ItemCount"
import Item from "./Item"
import ItemList from "./ItemList"


function ItemListContainer(props) {

    return (
        <div>
            <h2 style={{textAlign:"center"}}>{props.greeting}</h2>
            <ItemList/>
           

        </div>

    )
}

export default ItemListContainer;