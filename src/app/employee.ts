import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Employee {
  getEmployees(){
    return[{
    id: 101,
    firstname: 'Yuji',
    lastname: 'Itadori',
    email: 'yjitadori@hau.edu.ph',
  },
  {
    id: 102,
    firstname: 'Aoi',
    lastname: 'Todo',
    email: 'aoitodo@hau.edu.ph',
  },
  {
    id: 103,
    firstname: 'Gojo',
    lastname: 'Satoru',
    email: 'strongestalive@hau.edu.ph',
  },
  {
    id: 104,
    firstname: 'Nobara',
    lastname: 'Kugisaki',
    email: 'nbrkugisaki@hau.edu.ph',
  },
];
}

}
