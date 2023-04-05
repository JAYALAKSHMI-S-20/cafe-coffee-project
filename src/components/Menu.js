
import React from "react";

function Category(props){
    return(
        <div>
            <p>{props.name} - Rs.{props.price}</p>
        </div>
    )
}

const tea=10;
const milk=60;
const coffee=20;
const custard=150;
const cake=70;
const pie=120;


function Menu(){
    const [count,setCount]=React.useState(0);
    const [price,setPrice]=React.useState(0);
   const Coffee=()=>{
     setCount(count+1);
     setPrice(price+coffee);
   }
   const milkshake=()=>{
    setCount(count+1)
    setPrice(price+milk)
  }
  const Tea=()=>{
    setCount(count+1)
    setPrice(price+tea)
  }
  const Apple=()=>{
    setCount(count+1)
    setPrice(price+pie)
  }
  const cakes=()=>{
    setCount(count+1)
    setPrice(price+cake)
  }
  const caramel=()=>{
    setCount(count+1)
    setPrice(price+custard)
  }
 

    return(
       
            <div>
            {/*<center>
            <h1 id='head'>Coffee Day</h1>
    <img id='logo' alt='' src='https://tse3.mm.bing.net/th?id=OIP.i6ycQkqVK2IVEeaiSloN_gHaHa&pid=Api&P=0'></img>
    <h3 id='info'>Café Coffee Day (CCD) is an Indian multinational chain of coffeehouses headquartered in Bengaluru, Karnataka. It is a subsidiary of Coffee Day Enterprises Limited. Internationally, CCDs are present in Austria, Czech Republic, Malaysia, Nepal and Egypt.</h3>
    <ul><a class='pro' href='https://en.wikipedia.org/wiki/Caf%C3%A9_Coffee_Day'>About</a></ul>
    <hr/>*/}
            
            <hr/>
            <div className="section" style={{fontSize:"large"}}>
                <div>
                
                <Category name = "Coffee" price = {coffee} />
                <button onClick={Coffee}>Add to cart</button>
                <Category name = "Tea" price = {tea} />
                <button onClick={Tea}>Add to cart</button>
                <Category name = "Milkshake" price = {milk} />
                <button onClick={milkshake}>Add to cart</button>
                </div>
                <div>
                
                <Category name = "Cold Coffee" price = {pie} />
                <button onClick={Apple}>Add to cart</button>
                <Category name = "Choco Lava" price = {cake}/>
                <button onClick={cakes}>Add to cart</button>
                <Category name = "Cup Cake" price = {custard}/>
                <button onClick={caramel}>Add to cart</button>
                </div>
  </div>
            <div className="cart">
                <h2>Total items = {count}</h2>
                <h2>Total Price = {price}</h2>
                <h2>Thanks for visiting</h2>
            </div>
            
            </div>
        )
    
}
export default Menu;
