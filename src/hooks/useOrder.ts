import { useState } from "react";
import type { MenuItem, OrderItem } from "../types/types";

function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([])
  const [tip, setTip] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)

  const addItem = (item: MenuItem) => {
    const itemExist = order.find(orderItem => orderItem.id === item.id);

    if (itemExist) {
      const updateItem = order.map(((orderItem) => {
        if (orderItem.id === item.id) {

          return {...orderItem,quantity:orderItem.quantity + 1}

        } else {
          return orderItem
        }
      }
      ))
      setOrder(updateItem)
    } else {
      const newItem: OrderItem = { ...item, quantity: 1 }
      setOrder([...order, newItem])
    }

   
    //console.log(order)

  }

  const revomeItem = (item:MenuItem)=> {
    const removeItem = order.filter((orderItem)=>{
     return orderItem.id !== item.id
    })
    setOrder(removeItem)
  }

  const placeOrder = ()=>{
    setOrder([])
    setTip(0)
  }


  return {
    order,
    tip,
    setTip,
    addItem,
    revomeItem,
    placeOrder
  }
}

export default useOrder