import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  date,
  numeric,
  primaryKey,
} from "drizzle-orm/pg-core";
import { AdapterAccountType } from "next-auth/adapters";

// cant enableRLS. have to do it manually on supabase
export const usersTable = pgTable("users_table", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name").notNull(),
  age: integer("age").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: timestamp("email_verified", { mode: "date" }),
  image: text("image"),
});

export const accountsTable = pgTable(
  "account_table",
  {
    userId: text("userId")
      .notNull()
      .references(() => usersTable.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccountType>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => [
    {
      compoundKey: primaryKey({
        columns: [account.provider, account.providerAccountId],
      }),
    },
  ],
);

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
