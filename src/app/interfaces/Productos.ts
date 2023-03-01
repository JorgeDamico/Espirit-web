export interface Producto{
    id:string;
    nombre:string;
    categoria: string;
    precio: number;
    imagen: string;
}
export interface ResponseProductos{
    site_id:string;
    query:string|number;
    country_default_time_zone:string;
    sort:{
        id:string;
        name:string
    };
    paging:{[k:string]:string|number};
    results:Producto[]
}
