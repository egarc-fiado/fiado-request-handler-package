export interface IRoutesPort{
    routes:{ [key: string]: (event:any) => void};
}