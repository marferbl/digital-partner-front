import { pgTable, text, serial, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Base user schema
export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    username: text("username").notNull().unique(),
    password: text("password").notNull(),
    userType: text("user_type").notNull(), // "talent" or "recruiter"
});

export const insertUserSchema = createInsertSchema(users).pick({
    username: true,
    password: true,
    userType: true,
});

// Technology schema for talent profiles
const technologySchema = z.object({
    name: z.string(),
    level: z.string(),
});

// Study schema for talent profiles
const studySchema = z.object({
    title: z.string(),
    institution: z.string(),
    startYear: z.number(),
    endYear: z.number().optional(),
});

// Experience schema for talent profiles
const experienceSchema = z.object({
    position: z.string(),
    company: z.string(),
    startYear: z.number(),
    endYear: z.number().optional(),
    current: z.boolean().default(false),
    description: z.string(),
    technologies: z.array(z.string()).optional(),
});

// Talent profiles schema
export const talents = pgTable("talents", {
    id: serial("id").primaryKey(),
    fullName: text("full_name").notNull(),
    country: text("country").notNull(),
    city: text("city").notNull(),
    job: text("job").notNull(),
    email: text("email").notNull(),
    introduction: text("introduction").default(""),
    studies: jsonb("studies").default([]),
    technologies: jsonb("technologies").default([]),
    aboutMe: text("about_me").default(""),
    web: text("web").default(""),
    telephone: text("telephone").default(""),
    skills: jsonb("skills").default([]),
    languages: jsonb("languages").default([]),
    prefferedWork: jsonb("preffered_work").default([]),
    openPrefferedWork: boolean("open_preffered_work").default(false),
    salary: integer("salary").default(0),
    openSalary: boolean("open_salary").default(false),
    experience: jsonb("experience").default([]),
    userId: integer("user_id").references(() => users.id),
});

export const insertTalentSchema = createInsertSchema(talents, {
    studies: technologySchema.array(),
    technologies: technologySchema.array(),
    skills: z.array(z.string()),
    languages: z.array(z.string()),
    prefferedWork: z.array(z.string()),
    experience: z.array(experienceSchema),
}).omit({ id: true });

// For searches made by recruiters
export const searches = pgTable("searches", {
    id: serial("id").primaryKey(),
    position: text("position").notNull(),
    location: text("location"),
    technologies: jsonb("technologies").default([]),
    salary: text("salary"),
    userId: integer("user_id").references(() => users.id),
    createdAt: text("created_at").notNull(), // ISO string format
});

export const insertSearchSchema = createInsertSchema(searches).omit({
    id: true,
    userId: true,
    createdAt: true
});

// For saved/liked candidates by recruiters
export const savedTalents = pgTable("saved_talents", {
    id: serial("id").primaryKey(),
    recruiterId: integer("recruiter_id").references(() => users.id),
    talentId: integer("talent_id").references(() => talents.id),
    createdAt: text("created_at").notNull(),
});

export const insertSavedTalentSchema = createInsertSchema(savedTalents).omit({
    id: true,
    createdAt: true
});

// Re-export schemas if needed
export const technologySchemaExport = technologySchema;
export const studySchemaExport = studySchema;
export const experienceSchemaExport = experienceSchema;
