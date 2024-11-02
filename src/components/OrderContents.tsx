import type { OrderItem } from "../types/types"
import formatearCantidad from "../helpers/convertirAmoneda"

type OrderContentsProps = {
    order: OrderItem[],
    revomeItem: (item:OrderItem) => void,
}

function OrderContents({order,revomeItem}:OrderContentsProps) {
  return (
    <div>
        <h2 className="font-black text-4xl">Consumo</h2>
        <div className="space-y-3 mt-10">
            {
                order.map((item)=> {
                    return (
                        <div key={item.id} className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b">
                           <div>
                            <p className="text-lg">
                                {item.name} - {formatearCantidad(item.price)}
                            </p>
                            <p className="font-black">
                                Cantidad:{item.quantity} - {formatearCantidad(item.quantity*item.price)}
                            </p>
                            </div>

                            <button onClick={()=>revomeItem(item)} className="bg-red-600 hover:bg-red-500 w-8 h-8 rounded-full text-white font-black">
                                X
                            </button>
                        </div>
                    )
                })
            
            }
        </div>
    </div>
  )
}

export default OrderContents