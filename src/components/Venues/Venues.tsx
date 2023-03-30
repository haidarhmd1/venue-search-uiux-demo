import { Item } from "./Item/Item"
import jsonData from '../../json_db/db.json'

export const Venues = ({isOpen}: {isOpen?: boolean}) => {
    console.log('jsonData',jsonData)
    return(
    <div className="flex flex-col">
        <div className={ isOpen ? 'mt-20' : 'mt-1' }><h1>Venues</h1></div>
        <div className={isOpen ? "flex flex-col h-128 divide-y divide-solid divide-gray-light mt-4 overflow-auto" : "flex flex-col mt-4"}>
        {jsonData.data.map(items => 
            <Item key={items.id} title={items.title} description={items.description} image={items.image} />
        )}
        </div>
    </div>)
}