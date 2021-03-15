let inState={
    data:[
        {img:'https://m.media-amazon.com/images/I/41OsuIxmpaL._AC_SR320,320_.jpg',
        name:'Amazon Basics Humidifier, 4 L, Black ',
        price:30,
        color:'Black',
        id:1
    },
    {img:'https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL._AC_SX679_.jpg',
    name:'Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA Port), Black ',
    price:93,
    color:'Black',
    id:2
    },
    {img:'https://images-na.ssl-images-amazon.com/images/I/51R2a9p-vNL._AC_SL1000_.jpg',
    name:'TP-Link AC1750 Smart WiFi Router (Archer A7) - Dual Band Gigabit Wireless Internet Router for Home, Works with Alexa, VPN Server, Parental Control and QoS ',
    price:56,
    color:'Black',
    id:3
    }

    ],
    inCart:[]
}
//[...state.inCart,forinCart]
let reducer=(state=inState,action)=>{
    if(action.type==='AddToCart'){
        //
        //let iscart=state.cart.find(sig => sig.id===action.payload.id ? true : false)
        let forinCart=state.data.find(sig=>sig.id===action.proId)
        // let isInCart=state.inCart.find(sig =>sig.id===action.proId?true:false)
        let isInCart=state.inCart.some(sig =>sig.id===action.proId)
        
        console.log(isInCart);
        return{
            ...state,
            inCart:isInCart?[...state.inCart]:[...state.inCart,{...forinCart,qty:1}]
        }
    }else if(action.type==='increase'){

        //it is a good way to change array objrct value through maping state.inCart.map(sig =>sig.id===action.cartedId?{...sig,qty:sig.qty+=1}:sig)
      let newCart=[...state.inCart]
      let indexofCart=state.inCart.findIndex(sig =>sig.id===action.cartedId)
      newCart[indexofCart].qty+=1
        console.log('updateQTY2',indexofCart);
        return{
            ...state,
            inCart:newCart
            
            
        }
    }else if(action.type==='decrease'){
        let newCart=[...state.inCart]
      let indexofCart=state.inCart.findIndex(sig =>sig.id===action.cartedId)
      if(newCart[indexofCart].qty>1){
        newCart[indexofCart].qty-=1
      }else{
          console.log();
      }
      
        
        return{
            ...state,
            inCart:newCart
            
            
        }
    }else if(action.type==='remove'){
        let withoutRemove=state.inCart.filter(sig =>sig.id!==action.forRemove)
        return{
            ...state,
            inCart:withoutRemove
        }
    }

return state;
}

export default reducer;