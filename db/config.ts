import { defineDb, defineTable, column, NOW } from 'astro:db'

const User = defineTable({
  columns: {
    _id: column.text({ primaryKey: true }),
    username: column.text(),
    password: column.text(),
    email: column.text(),
    role: column.text({ default: 'user' }),
    birthday: column.date(),
    createdAt: column.date({ default: NOW }),
    updatedAt: column.date({ default: NOW })
  }
})

const Post = defineTable({
  columns: {
    _id: column.text({ primaryKey: true }),
    title: column.text(),
    content: column.text(),
    author: column.text({ references: () => User.columns._id }),
    hasJobPost: column.boolean({ default: false }),
    createdAt: column.date({ default: NOW }),
    updatedAt: column.date({ default: NOW })
  }
})

const Contact = defineTable({
  columns: {
    _id: column.text({ primaryKey: true }),
    name: column.text(),
    email: column.text(),
    message: column.text(),
    read: column.boolean({ default: false }),
    createdAt: column.date({ default: NOW })
  }
})

export default defineDb({
  tables: {
    User,
    Post,
    Contact
  }
})
