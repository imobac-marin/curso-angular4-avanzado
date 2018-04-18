import { User } from './user.model';

export class Animal {

  constructor(
    public _id: string,
    public name: string,
    public description: string,
    public year: number,
    public image: string,
    public user: User
  ) {

  }
}
