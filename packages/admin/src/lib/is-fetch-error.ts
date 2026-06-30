import { ClientError } from "@avenuejs/client"

export const isClientError = (error: any): error is ClientError => {
  return error instanceof ClientError
}

export const isFetchError = (error: any): error is Error & { status: number } => {
  return error instanceof Error && "status" in error
}
