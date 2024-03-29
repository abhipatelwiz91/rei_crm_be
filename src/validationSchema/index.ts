import { string, object, boolean, number, enum as enum_, array } from "zod";

export const registerUserSchema = object({
  body: object({
    fullname: string({ required_error: "fullname is required." }),
    email: string({ required_error: "email is required." }).email(),
    password: string({ required_error: "password is required." }).min(4, "password must be 4 char long."),
  }),
});

export const loginUserSchema = object({
  body: object({
    email: string({ required_error: "email is required." }).email(),
    password: string({ required_error: "password is required." }),
  }),
});

export const updateAgentSchema = object({
  body: object({
    fullname: string().optional(),
    email: string().email().optional(),
    password: string().min(4, "password must be 4 char long.").optional(),
    isVerified: boolean().optional(),
    isBlocked: boolean().optional(),
  }),
});

// ###########  Super admin's routes input validation Schema #######

export const addAdminSchema = object({
  body: object({
    fullname: string({ required_error: "fullname is required." }),
    email: string({ required_error: "email is required." }).email(),
    password: string({ required_error: "password is required." }).min(4, "password must be 4 char long."),
  }),
});

export const updateAdminSchema = object({
  body: object({
    fullname: string().optional(),
    email: string().email().optional(),
    password: string().min(4, "password must be 4 char long.").optional(),
    isVerified: boolean().optional(),
    isBlocked: boolean().optional(),
  }),
});

const EnumType = enum_(["Monthly", "Yearly"]);

export const createPlanSchema = object({
  body: object({
    title: string({ required_error: "title is required." }),
    type: EnumType,
    users: number({ required_error: "users is required." }),
    price_permonth: number({ required_error: "price is required." }),
    description: string({ required_error: "description is required." }),
    details: array(
      object({
        title: string(),
        description: string(),
      }),
    ),
  }),
});

export const createCampaignSchema = object({
  body: object({
    title: string({ required_error: "title is required." }),
    type: enum_(["Email", "SMS"]),
    status: string({ required_error: "status is required." }),
    isCompleted: boolean().optional(),
    isActive: boolean(),
    startDate: string({ required_error: "startDate is required." }),
    endDate: string({ required_error: "endDate is required." }),
    budgetedCost: number({ required_error: "budgetedCost is required." }),
    actualCost: number({ required_error: "actualCost is required." }),
    note: string({ required_error: "note is required." }),
  }),
});

export const updateCampaignSchema = object({
  body: object({
    title: string().optional(),
    type: enum_(["Email", "SMS"]).optional(),
    status: string().optional(),
    isCompleted: boolean().optional(),
    isActive: boolean().optional(),
    startDate: string().optional(),
    endDate: string().optional(),
    budgetedCost: number().optional(),
    actualCost: number().optional(),
    note: string().optional(),
    createdby: string().optional(),
  }),
});

export const createTaskSchema = object({
  body: object({
    assignToId: string({ required_error: "assignToId is required." }),
    taskOwner: string({ required_error: "taskOwner is required." }),
    subject: string({ required_error: "subject is required." }),
    status: string({ required_error: "status is required." }),
    isCompleted: boolean().optional(),
    isActive: boolean().optional(),
    startDate: string({ required_error: "startDate is required." }),
    dueDate: string({ required_error: "dueDate is required." }),
    priority: string({ required_error: "priority is required." }),
    reminder: string({ required_error: "reminder is required." }),
    repeat: string({ required_error: "repeat is required." }),
    discription: string({ required_error: "discription is required." }),
  }),
});

export const updateTaskSchema = object({
  body: object({
    assignToId: string().optional(),
    taskOwner: string().optional(),
    subject: string().optional(),
    status: string().optional(),
    isCompleted: boolean().optional(),
    isActive: boolean().optional(),
    startDate: string().optional(),
    dueDate: string().optional(),
    priority: string().optional(),
    reminder: string().optional(),
    repeat: string().optional(),
    discription: string().optional(),
  }),
});
