import { Role } from './role.model';

export class User {

  constructor(
    public id: number,
    public token: string,
    public firstName?: string,
    public lastName?: string,
    public username?: string,
    public password?: string,
    public roles?: Role[]
  ) {

  }
}
