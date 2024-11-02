import { menuItems } from "./data/db"
import MenuItem from "./components/MenuItem"
import useOrder from "./hooks/useOrder"
import OrderContents from "./components/OrderContents"
import OrdersTotals from "./components/OrdersTotals"
import TipPercentageForm from "./components/TipPercentageForm"

function App() {
  
  const { order,tip,setTip, addItem, revomeItem,placeOrder} = useOrder() 


  return (
    <>
     <header className="bg-teal-400 py-5">
       <h1 className="text-center text-4xl font-black">
        Calculadora de propinas y consumo
       </h1>
     </header>
     <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
       <div className="pt-5">
        <h2 className="text-4xl font-black">menu</h2>
        <div className="space-y-3 mt-10">
        {menuItems.map((item)=>{
          return (
           <MenuItem key={item.id}
             item={item}
             addItem={()=>addItem(item)}
           />
          )
        })}
        </div>
</div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length > 0 ? (
            <>
            <OrderContents order={order} revomeItem={revomeItem}/>
            <TipPercentageForm setTip={setTip} tip={tip}/>
            <OrdersTotals order={order} tip={tip} placeOrder={placeOrder}/>
          
          </>):(
            <p className="text-center">La orden esta vacia</p>
          )}
            
        </div>
     </main>
    </>
  )
}

export default App
