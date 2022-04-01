import { Injectable } from '@angular/core';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: User[] = [];

  constructor() { 
    this.users.push({
      username: "keyorodriguezgo",
      password: "1234"
    },
    {
      username: "koyorogo",
      password: "1234"
    })
  }

  public async loginSync(username: string, password: string) {
    await this.users.forEach((user, i) => {
      if(user.password === password && user.username === username){
        return true;
      } else {
        if(i===(this.users.length-1)) {
          return false;
        }
      }
    });
    return false;
  }
}
