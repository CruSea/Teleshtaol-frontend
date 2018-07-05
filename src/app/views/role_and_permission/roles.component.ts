import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Role, RolesPaginator, RolePer, PermissionsPaginator, Permission } from 'app/views/role_and_permission/Role.object.mapper';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { RoleService } from 'app/views/role_and_permission/role.service';
import { AuthService } from 'app/auth.service';

@Component({
  templateUrl: 'roles.component.html'
})
export class RoleComponent implements OnInit {
  roles = new RolesPaginator();
  rolenew = new Role();
  pernew = new Permission();
  permissions: Permission;
  rolepers = new RolePer();
  roleper = new RolePer();
  permissionsPaginator = new PermissionsPaginator();

  token = this.auth.getUserToken();
  // form: NgForm;
  // roleperArray: RolePer[] = this.form.controls['permission'].value;

  constructor(private roleservice: RoleService, private auth: AuthService, private router: Router ) { }

  ngOnInit(){
    if(this.token){
      this.UpdatepagePaginator();
      this.UpdatePerPaginator();
    }
    else{ this.router.navigate(['/login']); }
    
  }
  onSubmit(){
    this.roleservice.addRole(this.rolenew).subscribe(
    response => { this.UpdatepagePaginator()} );
  }
  onSubmitPermission(form: NgForm){
    this.roleservice.addPermission(form.value)
    .subscribe(response => { this.UpdatePerPaginator()} );
      form.reset();
  }
  UpdatepagePaginator(){
    this.roleservice.getRoles().subscribe(res => this.roles = res);
    this.roleservice.getPermissions().subscribe(res => this.permissions = res);
  }
  UpdatePerPaginator(){
    this.roleservice.getPaginatedPermissions().subscribe(res => this.permissionsPaginator = res);
  }
  getPaginatedRole(url: string){
    this.roleservice.getRolesAtUrl(url)
    .subscribe(response=>this.roles = response);
  }
  onedit(role) {
    this.rolenew = role;
  }
  oneditPermission(permission){
    this.pernew = permission;
  }
  onupdate() {
    this.roleservice.updateRole(this.rolenew)
    .subscribe(response => {this.UpdatepagePaginator()});
  }
  onupdatePer(){
    this.roleservice.updatePermission(this.pernew)
    .subscribe(response => {this.UpdatePerPaginator()});
  }
  ondelete() {
    this.roleservice.deleteRole(this.rolenew.id)
    .subscribe(response => {this.UpdatepagePaginator()});
  }
  ondeletePer(){
    this.roleservice.deletePermission(this.pernew.id)
    .subscribe(response => {this.UpdatepagePaginator()});
  }
  onassignPer(role){
    this.rolenew = role;
    this.roleper.role =this.rolenew.name;
    this.rolepers.role =this.rolenew.name;
  }
  onassign() {
    // this.roleservice.assignPermission(this.roleper)
    // .subscribe(response => {this.UpdatepagePaginator()});
    for(let i=0; i<this.rolepers.permission.length;i++){
      this.roleper.permission = this.rolepers.permission[i];
      this.roleservice.assignPermission(this.roleper)
      .subscribe(response => {this.UpdatepagePaginator()});
    }
    
  }
  viewPermission(role){
    this.rolenew = role;
    this.roleservice.viewRolePermission(role.name).subscribe(res => this.pernew = res);
  }
}