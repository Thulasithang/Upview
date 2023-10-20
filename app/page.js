import Image from 'next/image'
import Tables from '@components/Tables'

async function getOrders(){
  const res = await fetch('https://my-json-server.typicode.com/dsrishi/orders/orders')
  const data = await res.json()
  return data
}

export default async function Home() {
  const orders = await getOrders()
  // console.log(orders) 
  return (
    <section className="m-10">
      <h1 className="text-left font-satoshi">Orders</h1>
      <Tables orders={orders} />
    </section>
    
  )
}
