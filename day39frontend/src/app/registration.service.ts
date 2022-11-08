import { Injectable } from "@angular/core";

import Dexie from "dexie";
import { Register } from "./models";

@Injectable()
export class RegistrationService extends Dexie {

  // Dexie.Table<Object, Datatype>
  reg!: Dexie.Table<Register, string>

  constructor() {
    // Create database 'myregistration'
    super('myregistration')
    // Create tables
    this.version(1).stores({
      // table_name: primary key
      registration: 'email'
    })

    this.reg = this.table('registration')
  }

  save(r: Register) {
    return this.reg.put(r)
  }

}
