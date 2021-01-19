import React from 'react'

import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown.styles.scss'

function CartDropdown() {
    return (
        <div className="cart-dropdown">
            <div className="cart-items" />
            <CustomButton>Go to Checkout</CustomButton>
        </div>
    )
}

export default CartDropdown
