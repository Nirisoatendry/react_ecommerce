export default interface Product{
    id : number,
    nom : string,
    quantite_stock: number,
    seuil_minimal: number,
    categorie: string,
    region_du_ressource: string,
    prix: number
}