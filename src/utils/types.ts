// types.ts (global)

import { z } from "zod"
import { atLeastOne } from "./array"

// must match the models and enums in the database (schema.prisma)
// TODO: auto generate these types and zod schemas from the database

export enum Gender {
  male = 'male',
  female = 'female',
}
export const GenderSchema = z.enum(['male', 'female']);

export enum GradeLevel {
  preK = 'preK',
  kindergarten = 'kindergarten',
  first = 'first',
  second = 'second',
  third = 'third',
  fourth = 'fourth',
  fifth = 'fifth',
  sixth = 'sixth',
  seventh = 'seventh',
  eighth = 'eighth',
  ninth = 'ninth',
  tenth = 'tenth',
  eleventh = 'eleventh',
  twelfth = 'twelfth',
  thirteenth = 'thirteenth',
  technicalSchool = 'technicalSchool',
  undergraduate = 'undergraduate',
  masters = 'masters',
  phd = 'phd',
}
export const GradeLevelSchema = z.enum([
  GradeLevel.preK,
  GradeLevel.kindergarten,
  GradeLevel.first,
  GradeLevel.second,
  GradeLevel.third,
  GradeLevel.fourth,
  GradeLevel.fifth,
  GradeLevel.sixth,
  GradeLevel.seventh,
  GradeLevel.eighth,
  GradeLevel.ninth,
  GradeLevel.tenth,
  GradeLevel.eleventh,
  GradeLevel.twelfth,
  GradeLevel.thirteenth,
  GradeLevel.technicalSchool,
  GradeLevel.undergraduate,
  GradeLevel.masters,
  GradeLevel.phd,
]);

export enum DonationType {
  individual = 'individual',
  family = 'family',
  orphanage = 'orphanage',
  general = 'general',
}
export const SponsorshipTypeSchema = z.enum([
  DonationType.individual,
  DonationType.family,
  DonationType.orphanage,
  DonationType.general,
]);
export type SponsorshipType = z.infer<typeof SponsorshipTypeSchema>
export type TSponsorshipOption = {
  id: string
  title: string
  type: SponsorshipType,
  description: string
  icon: React.ReactNode
  highlight: boolean
  coverImage: string
  content: React.ReactNode
}
export enum SponsorshipToggle {
  sponsor = 'sponsor',
  donate = 'donate'
}
export type TSponsorshipToggle = keyof typeof SponsorshipToggle
// must match the Frequency enum in the database (schema.prisma)
// TODO: auto generate this from the database
export enum Frequency {
  monthly = 'monthly',
  yearly = 'yearly',
  once = 'once',
}
export type TFrequency = keyof typeof Frequency
export type DonationState = {
  sponsorshipToggle: SponsorshipToggle
  typeSelected: SponsorshipType
  sponsorshipSelected: TSponsorshipOption | null
  donationsSelected: string[]
  enterInfo: boolean
  moneyDonationAmount: number | null
  frequency: Frequency,
  coverTransactionFee: boolean
  totalCost: number
}
export type DonorData = {
  name?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  comment: string;
};
// Donation Session
export type DonationSession = {
  type: DonationType
  frequency: TFrequency
  coverTransactionFee: boolean
  amount: number
  quantity: number
  firstName: string
  email: string
  donationIdsSelected: string[]
  completedCheckout: boolean
}
export const DonationSessionSchema = z.object({
  donationSession: z.object({
    type: z.enum(atLeastOne([
      DonationType.individual,
      DonationType.family,
      DonationType.orphanage,
      DonationType.general,
    ])),
    frequency: z.enum(atLeastOne([
      Frequency.monthly,
      Frequency.yearly,
      Frequency.once,
    ])),
    coverTransactionFee: z.boolean(),
    amount: z.number(),
    quantity: z.number(),
    firstName: z.string(),
    email: z.string().email(),
    donationIdsSelected: z.array(z.string()),
    completedCheckout: z.boolean(),
  }),
})

// families
export const FamilySchema = z.object({
  familyName: z.string(),
  email: z.string().optional(),
  fullAddress: z.string().optional(),
})
export type TFamily = z.infer<typeof FamilySchema>
export const FullFamilySchema = FamilySchema.extend({
  id: z.string(),
  updatedAt: z.string(),
  createdAt: z.string().optional(),
})
export type TFullFamily = z.infer<typeof FullFamilySchema>

// students
export const StudentSchema = z.object({
  firstName: z.string(),
  lastName: z.string().nullable(),
  age: z.number(),
  gender: GenderSchema,
  imageUrl: z.string(),
  fullAddress: z.string().nullable(),
  gradeLevel: z.any(), // GradeLevelSchema.nullable(), // TODO: fix this
  email: z.string().email().nullable(),
  familyId: z.string().nullable(),
  family: FamilySchema.optional(),
})
export type TStudent = z.infer<typeof StudentSchema>
export const FullStudentSchema = StudentSchema.extend({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
})
export type TFullStudent = z.infer<typeof FullStudentSchema>
export const UpdateStudentSchema = z.object({
  id: z.string(),
  updatedAt: z.string(),
  createdAt: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().nullable(),
  age: z.number().optional(),
  gender: GenderSchema.optional(),
  imageUrl: z.string().optional(),
  fullAddress: z.string().optional(),
  gradeLevel: z.any().optional(), // GradeLevelSchema.nullable(), // TODO: fix this
  email: z.string().optional(),
  familyId: z.string().optional(),
})
export type TUpdateStudent = z.infer<typeof UpdateStudentSchema>
