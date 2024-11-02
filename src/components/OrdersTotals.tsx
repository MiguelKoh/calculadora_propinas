import { useMemo } from "react"
import type { OrderItem } from "../types/types"
import formatearCantidad from "../helpers/convertirAmoneda"

 
 type OrdersTotalsProps = {
    order:OrderItem[],
    tip:number,
    placeOrder: () => void
 }

function OrdersTotals({order,tip,placeOrder}:OrdersTotalsProps) {

    const subTotalAmount = useMemo(()=>order.reduce((acumulador,item )=>{
        return acumulador + item.price * item.quantity
    },0),[order])

    const tipAmount = useMemo(()=>subTotalAmount*tip,[order,tip])
    
    const totalAmout = useMemo(()=>subTotalAmount + tipAmount,[order,tip])

    

  return (
    <>
    <div className="space-y-3">
       <h2 className="font-black text-2xl">Totales y propinas</h2>
       <p>Subtotal a pagar: {' '}
         <span className="font-bold">{formatearCantidad(subTotalAmount)}</span>
       </p>
       <p>Propina:
         <span className="font-bold">{formatearCantidad(tipAmount)}</span>
       </p>
       <p>Total a pagar:
         <span className="font-bold">{formatearCantidad(totalAmout)}</span>
       </p>
    </div>
    <button 
      className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-50"
      disabled={totalAmout===0}
      onClick={placeOrder}
      >
      guardar orden
    </button>
    </>
  )
}

export default OrdersTotals