import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Monkey Luffy',
    email: 'luffy@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Zoro Strawhat',
    email: 'zoro@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
