import { User } from '@/core/models/user.model';


export const USERS: User[] = [
  {
    firstName: 'Javier',
    lastName: 'Garcia',
    username: 'javi',
    token: '',
    roles: [{ id: 1, description: 'Administrador', code: 'ADMIN' }],
    password: '111111',
    id: 0
  },
  {
    firstName: 'Mario',
    lastName: 'García',
    username: 'Mariete',
    token: '',
    roles: [
      { id: 0, description: 'Usuario', code: 'USER' },
      { id: 1, description: 'Administrador', code: 'ADMIN' }
    ],
    password: '777777',
    id: 1
  }
];

