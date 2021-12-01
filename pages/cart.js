import Head from 'next/head'
import ItemCard from '../components/ItemCard'
import { useItems } from '../context/ItemContext'
import { useUser } from '../context/UserContext'
import styles from '../styles/cart.module.css'

export default function Checkout() {
  const { user, setUser } = useUser()

  const { items, setItems } = useItems()

  //function to get all the info for the plant, since we only have the name
  const getFullPlantInfo = (plantName) => {
    
    // let index = items.indexOf(plantName);
    // console.log(index);
    let index = -1;
    for(let i = 0; i < items.length; ++i)
    {
      if(items[i].name == plantName)
      {
        index = i;
        break;
      }
    }
    return items[index];
  }

  const GetTotalPrice = () => {
    let total = 0;
    user.cart.forEach(element => {
        total += getFullPlantInfo(element).price;
    });

    return total;
  }

  return (
    <div>
      <Head>
        <title>Checkout</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>{user.name}, let's checkout!</h1>
        <p>You have {user.cart.length} items in your cart.</p>
        <div>
          {/* TODO: Style the checkout page so the cart maps through
            * to a component for each item in the cart
          */}
          {/* rather than stringify, we need to map */}
          
          {/* <p>{JSON.stringify(user.cart)}</p> */}

          {user.cart.map( (cartItemName) =>
            (
              <ItemCard name={getFullPlantInfo(cartItemName).name} 
              img={getFullPlantInfo(cartItemName).img}
              // stock={getFullPlantInfo(cartItemName).stock}
              stock={0}
              price={getFullPlantInfo(cartItemName).price} inCart={true} />
            ))}
        </div>
        <div>
          <p className="TotalPrice">Total: ${GetTotalPrice()}</p>
        </div>
      </main>
    </div>
  )
}
