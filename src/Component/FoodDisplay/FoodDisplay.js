import React, { useContext } from 'react'
import { StoreContext } from '../../context/Storecontext'
import FoodItem from '../FoodItem/FoodItem'

export default function FoodDisplay({ category }) {

  const { food_list } = useContext(StoreContext)
  return (
    <>
      <div className="food-display mt-7" id='food-display'>
        <h2 className='text-2xl font-semibold'>Top dishes near you</h2>
        <div className="food-display-list grid mt-8 gap-8 " style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))' }}>
          {food_list.map((item, index) => {
            if (category === "All" || category === item.category) {
              return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
            }
          })}
        </div>
      </div>
    </>
  )
}
