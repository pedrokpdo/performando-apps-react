export interface AddProductToWishListProps {
    onToWishList: () => void
    onRequestClose: () => void
}
 
export function AddProductToWishList  ({
    onToWishList,
    onRequestClose
} :AddProductToWishListProps) {
    return (
        <span>Deseja adicionar aos favoritos?
        <button onClick={onToWishList}>Sim</button>
        <button onClick={onRequestClose}>Nao</button>
        </span>
    )
}