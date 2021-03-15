import React from 'react'
import {connect} from 'react-redux'
let Product=({ProductData,AddToCart})=>{
    return(
        <div className='d-flex'>
            {
                
                ProductData.map(sig => <div>
                    <div className="card mx-5" style={{width: '18rem'}}>
            <img className="card-img-top" src={sig.img} alt=".." />
                <div className="card-body">
                  <p className="card-text">{sig.name}</p>
                  <p>{'$'}{sig.price}</p>
                  <p>color:{sig.color}</p>
                  <button onClick={()=>AddToCart(sig.id)} className='btn btn-outline-success'>Add to Cart</button>
                </div>
              </div>
                </div>
                )
            }
        </div>
    )
}

let mapStateToProps=(state)=>{
    return{
        ProductData:state.data
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        AddToCart:(id)=>{
            dispatch({type:'AddToCart',proId:id})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Product);

