// DO NOT ADD THIS TO registry.json - internal use only for type checking in the avenue monorepo
import { createClient, InferClient } from "@avenuejs/client"
import { Routes } from '../../../../.avenue/_generated'

declare const __BACKEND_URL__: string

export const client: InferClient<Routes> = createClient({
  baseUrl: __BACKEND_URL__,
})
