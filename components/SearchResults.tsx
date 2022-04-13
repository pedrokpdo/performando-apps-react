import { ProductItem } from "./ProductItem";
import { useMemo } from 'react'
interface SearchResultsProps {
    results: Array<{
        id: number;
        price: number;
        title: string;
    }>
}

export function SearchResults({ results }: SearchResultsProps) {
    const totalPrice = useMemo(() => {
        return results.reduce((total, product) => {
            return total + product.price
        }, 0)
    }, [results])
    return (
        <div>
            <h2>{totalPrice}</h2>

            {results.map(product => {
                return (
                    <ProductItem product={product} />
                )
            })}
        </div>
    )
}

/** --use/memo
 * 1. calculos pesados
 * 2. igualdade referencial (quando a gente repassa aquela info a um componente filho)
 */