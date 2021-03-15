import React, { useEffect, useState } from 'react'
import Carted from './carted'
import {connect} from 'react-redux'
let CartPayment=({CartedData,increase,decrease,removex})=>{
    let [qty,setQty]=useState(0)
    let [price,setprice]=useState(0)
    
    useEffect(()=>{
        let totalQty=0;
        let totalPrice=0;
        CartedData.forEach(sig =>{
            totalQty+=sig.qty;
             totalPrice+=sig.qty*sig.price
        })
        setQty(totalQty)
        setprice(totalPrice)
    },[CartedData])

    return(
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-7 '>
                    <div className='py-3 mt-3'>
                    <Carted CartedData={CartedData} increase={increase} decrease={decrease} removex={removex}/>
                    </div>
               
                </div>
                    <div className='col-md-3 offset-md-1'>
                        <div>
                        <div className="card shadow-lg p-3 mb-5 bg-body rounded">
                    <div className="card-body">
                        <p>Total Items:{qty}</p>
                       <p>Total value:{price}</p>
                       <button className='btn btn-success'>Check Out</button>
                    </div>
                    </div>
                        </div>
                    </div>
            </div>
            
        </div>
    )
}
let mapStateToProps=(state)=>{
    return{
        CartedData:state.inCart,
        
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        increase:(id)=>{
            dispatch({type:'increase',cartedId:id})
        },
        decrease:(id)=>{
            dispatch({type:'decrease',cartedId:id})
        },
        removex:(id)=>{
            dispatch({type:'remove',forRemove:id})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartPayment);