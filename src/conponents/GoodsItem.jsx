export const GoodsItem = (props) => {
    const { mainId, offerId, displayName, displayDescription, price, displayAssets, addToBasket } = props

    return <div className="card" id={mainId}>
        <div className="card-image">
          <img src={displayAssets[0].background} alt={displayName} />
          <span className="card-title">{displayName}</span>
        </div>
        <div className="card-content">
          <p>{displayDescription}</p>
        </div>
        <div className="card-action">
            <button className="btn" onClick={() => addToBasket ({offerId, displayName, price:price.regularPrice})}>Купить</button>
            <span className='right' style={{fontSize: '1.8rem'}}>{price.regularPrice} pуб.</span>
        </div>
      </div>
}