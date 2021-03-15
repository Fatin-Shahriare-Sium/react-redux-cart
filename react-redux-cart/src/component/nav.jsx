import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
let Nav=({forQty})=>{
    let [qty,setQty]=useState(0)
    useEffect(()=>{
        let totalQty=0;
        forQty.forEach(sig => totalQty+=sig.qty)
        setQty(totalQty)

    },[forQty])
    return(
        <div>
            <Link to='/cart'>
        <i style={{fontSize:'30px',color:'black'}} class="fas fa-shopping-cart">{qty}</i>
        </Link>
        </div>
    
    )
}
let mapStateToProps=(state)=>{
    return{
        forQty:state.inCart
    }
}
export default connect(mapStateToProps)(Nav);