import { memo } from 'react'

interface ProductItemProps {
    product: {
        id: number;
        price: number;
        priceFormatted: string,
        title: string;
    }
    onToWishList: (id: number) => void
}

function ProductItemComponent({ product, onToWishList }: ProductItemProps) { 
    return (
        <div>
            {product.title} - <strong>{product.priceFormatted}</strong>
            <button onClick={() => onToWishList(product.id)}>Add to wishlist</button>
        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product)
})