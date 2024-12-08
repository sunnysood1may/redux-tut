function Home(props) {
    console.log("Home",props);
  return (
    <div>
      
      <h2>Home Component</h2>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://www.91-img.com/pictures/150247-v6-xiaomi-redmi-note-13-pro-mobile-phone-medium-1.jpg" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
            <button onClick={()=>{
               props.addToCartHandler({pice:1000,name:'i phone 11'}) 
            }}>Add To Cart</button>
            <button className="remove-cart-btn" onClick={()=>{
               props.removeToCartHandler() 
            }}>Remove To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
