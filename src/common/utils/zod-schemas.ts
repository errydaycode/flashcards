import { z } from 'zod'

export const emailSchema = z.string().trim().email('Invalid email address')

export const passwordSchema = z.string().min(3, 'Too short password')
