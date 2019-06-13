import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class User {

    constructor(

        public name: string,
        public username: string,
        public email: string,
        public phone: string,
        public website: string,
        public company: string

    ) { }

}

@Injectable({

    providedIn: 'root'

})

export class UserAdapter implements Adapter<User> {

    adapt(item: any): User {

        return new User(

            item.name,
            item.username,
            item.email,
            item.phone,
            item.website,
            item.company['name']

        );

    }

}
