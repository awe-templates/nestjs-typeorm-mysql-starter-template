export interface UserModel {
  id: number
  name: string
  surname: string
  email: string
  password: string
  is_active: boolean
  created_at: Date
  created_by: number | null
  updated_at: Date
  updated_by: number | null
  deleted_at: Date | null
  deleted_by: number | null
}
