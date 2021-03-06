
export class ArticlesPaginator{
  public  current_page: number;
  public first_page_url: string;
  public from: number;
  public  last_page: number;
  public  last_page_url: string;
  public  next_page_url: string;
  public path: string;
  public per_page: number;
  public  prev_page_url: string;
  public to: number;
  public  total: number;
  public data: Article[];

  constructor(){
    this.current_page = null;
    this.from = null;
    this.last_page = null;
    this.per_page = null;
    this.to = null;
    this.total = null;
    this.first_page_url = '';
    this.last_page_url = '';
    this.next_page_url = '';
    this.prev_page_url = '';
    this.path = '';

  }
}
export class Article {
  public id: number;
  public title: string;
  public body: string;
  public created_at: string;
  public updated_at: string;
  public category_id: number;
  public user_id: number;
  // 
  public cover_image: string;
  constructor() {
    this.id = null;
    this.title = '';
    this.body = '';
    this.created_at = '';
    this.updated_at = '';
    this.category_id = null;
    this.user_id = null;
   
    this.cover_image = '';



  }
}
export class User {
  public id: number; 
  public name: string;
  public email: any;
  constructor(){
    this.id = null;
    this.name = '';
    this.email = '';
  }
  

}
export class Category {
  public id: number; 
  public name: string;
 
  constructor(){
    this.id = null;
    this.name = '';
   
  }
}