import { db, User } from 'astro:db'

export default async function () {
  await db.insert(User).values([
    {
      _id: crypto.randomUUID(),
      username: 'admin',
      password: 'admin',
      email: 'admin@admin.com',
      role: 'admin',
      birthday: new Date('1990-01-01')
    },
    {
      _id: crypto.randomUUID(),
      username: 'user',
      password: 'user',
      email: 'user@user.com',
      birthday: new Date('1990-01-01')
    }
  ])
}
