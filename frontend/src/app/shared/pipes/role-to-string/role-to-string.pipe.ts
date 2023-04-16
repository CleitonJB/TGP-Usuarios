import { Pipe, PipeTransform } from '@angular/core';

import { RolesID, RolesString } from 'src/app/models/Role';

@Pipe({
  name: 'roleToString'
})
export class RoleToStringPipe implements PipeTransform {

  transform(value: RolesID | undefined, ...args: unknown[]): unknown {
    return RolesString[value as any];
  }
}