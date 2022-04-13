import { memo, useState } from 'react'
import lodash from 'lodash'
import dynamic from 'next/dynamic';
import { AddProductToWishListProps } from './AddProductToWishList';
// import { AddProductToWishList } from './AddProductToWishList';

const AddProductToWishList = dynamic<AddProductToWishListProps>(() => {
    return import('./AddProductToWishList').then(mod => mod.AddProductToWishList)
}, {
    loading: () => <span>Carregando</span>
})

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
    const [isAddingToWishList, setIsAddingToWishList] = useState(false)
    return (
        <div>
            {product.title} - <strong>{product.priceFormatted}</strong>
            <button onClick={() => setIsAddingToWishList(true)}>Adicionar aos Favoritos</button>
            {isAddingToWishList && (
                <AddProductToWishList
                    onToWishList={() => onToWishList(product.id)}
                    onRequestClose={() => setIsAddingToWishList(false)}
                />
            )}
        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    return lodash.isEqual(prevProps.product, nextProps.product)
})