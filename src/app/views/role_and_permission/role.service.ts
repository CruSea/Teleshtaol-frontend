import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthService } from './../../auth.service';
import { HttpService } from 'app/http.service';
import { Role, RolesPaginator, Permission, RolePer, PermissionsPaginator } from 'app/views/role_and_permission/role.object.mapper';
import { Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { directiveDef } from '@angular/core/src/view/provider';

@Injectable()
export class RoleService {
  headers = new Headers({'Content-Type': 'application/json'});
  token = this.auths.getUserToken();

constructor(private http: Http, private auths: AuthService) { }

addRole(role: Role){
  return this.http.post('http://localhost:8000/admin/roles?token='+this.token, role, {headers: this.headers});
}

getRoles(){
  return this.http.get('http://localhost:8000/admin/roles?token='+this.token).map(
    response => response.json() as RolesPaginator
  );
}
getRolesAtUrl(url: string){
  return this.http.get(url + '&token=' + this.token)
  .map(response => response.json() as RolesPaginator);
}
getPaginatedPermissions(){
  return this.http.get('http://localhost:8000/admin/permissions?token='+this.token).map(
    response => response.json() as PermissionsPaginator
  );
}
getPermissionsAtUrl(url: string){
  return this.http.get(url + '&token=' + this.token)
  .map(response => response.json() as PermissionsPaginator);
}
updateRole(role: Role){
  return this.http.put('http://localhost:8000/admin/roles?token=' + this.token, role, {headers: this.headers});
}
deleteRole(id: number){
  return this.http.delete('http://localhost:8000/admin/roles/'+ id+ '?token=' + this.token);
}
deletePermission(id: number){
  return this.http.delete('http://localhost:8000/admin/permissions/'+ id+ '?token=' + this.token);
}
getPermissions(){
  return this.http.get('http://localhost:8000/admin/permissions/all?token='+this.token).map(
    response => response.json() as Permission
  );
}
assignPermission(roleper: RolePer){
  return this.http.post('http://localhost:8000/admin/attach-permission?token=' + this.token, roleper, {headers: this.headers});

}
addPermission(permission: Permission){
  return this.http.post('http://localhost:8000/admin/permissions?token=' + this.token, permission, {headers: this.headers});
}
updatePermission(permission: Permission){
  return this.http.put('http://localhost:8000/admin/permissions?token=' + this.token, permission, {headers: this.headers});
}
viewRolePermission(role_name: string){
  return this.http.post('http://localhost:8000/admin/check-permissions?token=' + this.token, role_name, {headers: this.headers}).map(
      response => response.json() as Permission
  );
}

}
