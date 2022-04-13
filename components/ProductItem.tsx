interface ProductItemProps {
    products: {
        id: number;
        price: number;
        title: string;
    }
}

export function ProductItem({ product }) { 
    return (
        <div>
            {product.title} - <strong>{product.price}</strong>
        </div>
    )
}