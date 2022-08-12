export class ObjectRegistiry {
  private objects: { name: string; object: Path2D }[];
  constructor() {
    this.objects = [];
  }
  register(_name: string, _object: Path2D) {
    this.objects.push({
      name: _name,
      object: _object,
    });
  }
  public get length(): number {
    return this.objects.length;
  }
  getItem(_name:string){
    return this.objects.find(x=>x.name);
  }
  deleteItem(_name:string){
    this.objects=this.objects.filter(x=>x.name !== _name);
  }
}
