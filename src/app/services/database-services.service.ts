import { Injectable } from '@angular/core';
import { Sequelize} from 'sequelize';

@Injectable()
export class DatabaseServicesService {

  sequelize

  constructor() {
    console.log('Database Services Service constructor.');
    this.sequelize = new Sequelize('mysql://root:123456@127.0.0.1:3306/fatbone');
    this.sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err);
      });
  }

}
