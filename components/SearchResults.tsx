import { ProductItem } from "./ProductItem";
import { List, ListRowRenderer } from 'react-virtualized'
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
    const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
        return (
            <div key={key} style={style}>
                <ProductItem
                    product={results[index]}
                    onToWishList={onToWishList}
                />
            </div>
        )
    }

    return (
        <div>
            <h2>{totalPrice}</h2>
        
            <List
                height={300}
                rowHeight={30}
                width={900}
                overscanRowCount={5}
                rowCount={results.length}
                rowRenderer={rowRenderer}
            />
        </div>
    )
}   