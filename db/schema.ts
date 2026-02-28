import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  date,
  numeric,
} from "drizzle-orm/pg-core";

export const usersTable = pgTable("users_table", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  age: integer("age").notNull(),
  email: text("email").notNull().unique(),
}).enableRLS();

export const categoryTable = pgTable("category_table", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  userId: integer("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
  deleteAt: timestamp("delete_at"),
}).enableRLS();

export const transactionTable = pgTable("transaction_table", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  amount: numeric("amount").notNull(),
  date: date("date").notNull(),
  userId: integer("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
  deleteAt: timestamp("delete_at"),
}).enableRLS();

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

export type InsertPost = typeof transactionTable.$inferInsert;
export type SelectPost = typeof transactionTable.$inferSelect;

export type Insertcategory = typeof categoryTable.$inferInsert;
export type selectcategory = typeof categoryTable.$inferSelect;
