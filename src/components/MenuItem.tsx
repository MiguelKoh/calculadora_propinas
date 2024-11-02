import type { MenuItem } from "../types/types"
import formatearCantidad from "../helpers/convertirAmoneda"
type MenuItemProps = {
    item:MenuItem,
    addItem: (item:MenuItem) => void,
    
}

function MenuItem({item,addItem}:MenuItemProps) {
  return (
    <button onClick={()=>addItem(item)} className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between ">
     <p>{item.name}</p>
     <p className="font-black">{formatearCantidad(item.price)}</p>
    </button>
  )
}

export default MenuItem