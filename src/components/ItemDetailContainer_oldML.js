import ItemDetail from "./ItemDetail"
import {useState, useEffect} from "react"




function ItemDetailContainer(props) {
    
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")

    /*
    useEffect(()=> {
        fetch("https://api.mercadolibre.com/sites/MLA/search?q=notebook")
            .then(response => {
                return response.json();
            })
            .then (data => {
                setProducts(data.results)
                console.log(data.results)
                
            })
    }, [])*/


    console.log(search)

    const fetchProducts = () => {
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`)
            .then(response => {
                return response.json();
            })
            .then (data => {
                setProducts(data.results)
                console.log(data.results)
                
            })
    }





    return (
        <div>
            <h2 style={{textAlign:"center"}}>Item detail</h2>
            <ItemDetail/>
            <input type="text" onChange={ (e) => setSearch(e.target.value)}/>
            <button onClick={fetchProducts}> Buscar </button>
            <ul>
                {products ? products.map((prod)=> <li key={prod.id}> {prod.title} </li> ) : <h2>Cargando...</h2>}
            </ul>
        </div>

    )
}

export default ItemDetailContainer;