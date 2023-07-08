import "./ItemListContainer.css";

function ItemListContainer(props) {
    return (
        <div className="text-container">
            <p className="text-item-list-container">{props.greeting}</p>
        </div>
    );
}

export default ItemListContainer;
