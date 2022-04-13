import { ProductItem } from "./ProductItem";
import { useMemo } from 'react'
interface SearchResultsProps {
    totalPrice: number
    results: Array<{
        id: number;
        price: number;
        priceFormatted: string,
        title: string;
    }>
    onToWishList: (id: number) => void
}

export function SearchResults({ results, onToWishList, totalPrice }: SearchResultsProps) {

    return (
        <div>
            <h2>{totalPrice}</h2>

            {results.map(product => {
                return (
                    <ProductItem
                        key={product.id}
                        product={product}
                        onToWishList={onToWishList}
                    />
                )
            })}
        </div>
    )
}

/** --use/memo
 * 1. calculos pesados
 * 2. igualdade referencial (quando a gente repassa aquela info a um componente filho)
 */