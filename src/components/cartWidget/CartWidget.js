import "./CartWidget.css";

function CartWidget(props) {
    return (
        <div className="cart-widget-container">
            <a href="#top" className="cart-widget-style d-flex flex-row">
                <i className="fa-solid fa-cart-shopping fa-2x"></i>
                <p className="cart-quantity">{props.cantidad}</p>
            </a>
        </div>
    );
}

export default CartWidget;
