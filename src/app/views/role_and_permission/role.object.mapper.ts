
export class RolesPaginator{
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
    public data: Role[];

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
export class PermissionsPaginator{
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
    public data: Permission[];

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
export class Role {
    public id: number;
    public name: string;
    public created_at: string;
    public updated_at: string;

    constructor() {
    this.id = null;
    this.name = '';
    this.created_at = '';
    this.updated_at = '';

    }
}
export class Permission {
    public id: number;
    public name: string;
    public display_name: string;
    public description: string;
    public created_at: string;
    public updated_at: string;

    constructor() {
    this.id = null;
    this.name = '';
    this.display_name = '';
    this.description = '';
    this.created_at = '';
    this.updated_at = '';

    }
}
export class RolePer{
    public role: string;
    public permission: string;

    constructor(){
    this.role = '';
    this.permission = '';
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
