import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {

    const cart=props.cart;
    console.log(cart);

    let total=0;
    for (let i =0;i<cart.length;i++){
        const product=cart[i];
        total=total+product.price;


    }

    let shippingCost=0;

    if(total>100){
        shippingCost=0
    }

    else if(total>15){
        shippingCost=2.50

    }

    else if(total>0){
        shippingCost=12.66
    }

    const tax=(total/10).toFixed(2);
    const grandTotal=(total+shippingCost+Number(tax)).toFixed(2);

    const formatNumber=num=>{
        const precision=num.toFixed(2);

        return Number( precision);
    }

    


    return (
        <div>

            <h4>Order Summary</h4>
            <p>Item Ordered:{cart.length} </p>

            <p>Product Price:{formatNumber( total)}</p>
            <p>Shipping Cost:{shippingCost}</p>
            <p>Tax+VAT:{tax}</p>

            <p>Total Price:{grandTotal}</p>

            <button className='main-button' > <FontAwesomeIcon icon={faShoppingCart}/>Add to cart</button>
            
        </div>
    );
};

export default Cart;