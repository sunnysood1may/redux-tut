function Home() {
  return (
    <div className="App">
`     <div className="add-to-cart">
        <img src="https://img.icons8.com/?size=50&id=23169&format=png" />
       </div>`

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
            <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
