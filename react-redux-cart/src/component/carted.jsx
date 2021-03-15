import React from 'react'

let Carted=({CartedData,increase,decrease,removex})=>{
    return(
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">image</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th>Quantity</th>
      <th>Inc/dec</th>
      <th>Remove</th>
    </tr>
  </thead>
  <tbody>

      {
          CartedData.map(sig =><tr>
              <th>1</th>
      <td ><img style={{maxWidth:'70px'}} src={sig.img} alt=''/></td>
      <td>{sig.name.length>40?sig.name.substr(0,40)+ ' ....':sig.name}</td>
      <td>{'$'}{sig.price}</td>
      <td>{sig.qty}</td>
      <td >
          <button className='mx-1 btn btn-outline-success' onClick={()=>increase(sig.id)}>+</button>
          <button className=' mx-1 btn  btn-outline-success'  onClick={()=>decrease(sig.id)}>-</button>
      </td>
      <td><i onClick={()=>removex(sig.id)} style={{fontSize:'20px',cursor:'pointer'}} className="fas fa-trash-alt"></i></td>
      </tr>
          )
      }
    
  </tbody>
</table>
    )
}

export default Carted;