import { Pipe, PipeTransform } from '@angular/core';

import { Role, RolesString } from 'src/app/models/Role';

@Pipe({
  name: 'roleToString'
})
export class RoleToStringPipe implements PipeTransform {

  transform(value: Role | undefined, ...args: unknown[]): unknown {
    return RolesString[value as any];
  }
}