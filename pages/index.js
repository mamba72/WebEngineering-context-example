import Head from 'next/head'
import Link from 'next/link'
import ItemCard from '../components/ItemCard'
import { useItems } from '../context/ItemContext'
import { useUser } from '../context/UserContext'
import {useState} from "react"

export default function Home() {
  /* Get access to the User Context 
   * In this case, we don't need the u
   */
  const { user, setUser } = useUser()

  /* TODO: import your useItems context
   * and map through all of the items
   * to create a gallery of ItemCard components
  */
 const { items, setItems } = useItems()


 //stop people from adding multiple plants to the cart
 const cartAlreadyContainsCheck = (itemName) =>
 {
   var index = user.cart.indexOf(itemName);
   if(index == -1)
    return false;
  else
    return true;
 }

  const [cartCount, setCartCount] = useState(0);

  const addToCart = (itemName) => {
    /* TODO: Write function that updates the
     * user context object's cart 
     * to include the added item
    */
    
    //stop people from adding the same plant to the cart
    if(cartAlreadyContainsCheck(itemName))
    {
      console.log("Cart already contains that item.")
      return;
    }
    console.log("adding " + itemName + " to cart")
    setUser({
      name: user["name"],
      cart: [...user["cart"], itemName]
    })

    //increment cart count
    setCartCount(cartCount + 1);
    console.log("Cart Count: " + cartCount);
  }

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="top">
        <h1>Hey there, {user["name"]}</h1>
        <Link href="/cart" >
          <div class="cart">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <p>{cartCount}</p>
        </div>
        </Link>
        </div>
        <div class="gallery">
          {/* TODO: Map through the items in context 
          * to display an ItemCard with the data for each
          */
          }
          
            {items.map((item) =>
            (
              <ItemCard name={item.name} img={item.img} stock={item.stock} price={item.price} add={addToCart}>
              </ItemCard>
            ))} 
            {/* end iterating through items */}
          
        </div>
      </main>
    </div>
  )
}
