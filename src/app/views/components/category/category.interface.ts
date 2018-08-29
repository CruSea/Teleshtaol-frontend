
export class CategoryArray{
  public categories: Category[];

  constructor(){

  }
}



export class Category {
    public id: number;
    public name: string;
    public description: string;
    
    // 
    public cover_image: string;
    constructor() {
      this.id = null;
      this.name = '';
      this.description = '';
    
  
    }
  }