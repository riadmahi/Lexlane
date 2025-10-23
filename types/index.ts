/**
 * Common types and interfaces for the application
 */

export type Status = "idle" | "loading" | "success" | "error";

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export type Theme = "light" | "dark" | "system";

export interface ErrorResponse {
  error: string;
  message: string;
  statusCode: number;
}
