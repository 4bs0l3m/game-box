export class Store <T>{
    private store:Map<number,T>;
    private name:string;
    constructor(_name:string){
        this.name=_name;
        this.store=new Map()
    }
    getItem(key:number){
        return this.store.get(key);
    }
    setItem(key:number,value:T){
        this.store.set(key,value);
    }
    deleteItem(key:number){
        this.store.delete(key);
    }
    save(){
        localStorage.setItem(this.name,JSON.stringify(this.store));
    }
    getSize(){
        return this.store.size;
    }

}
