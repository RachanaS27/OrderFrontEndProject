import { IAddress } from "./IAddress";
import { ICustomer } from "./ICustomer";
import { IProduct } from "./IProduct";

export interface IOrder{
    orderId:number,
    orderDate:Date,
    orderStatus:number,
    customer:ICustomer,
    address:IAddress,
    product:IProduct
}