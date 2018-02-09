
export class Product {
    public _id: string;
    public name: string;
    public description: string;
    public qty: number;
    public price: number;
    public discount: number;
    public img: string;

    constructor(_id: string, name: string, description:string, qty: number, 
        price: number, discount: number, img: string) {
        this._id = _id;
        this.name = name;
        this.description= description;
        this.qty = qty;
        this.price = price;
        this.discount = discount;
        this.img = img;
    }

}