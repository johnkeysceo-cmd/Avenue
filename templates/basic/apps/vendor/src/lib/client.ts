import { createClient, type InferClient } from "@avenuejs/client"
import type { Routes } from '@acme/api/_generated'

declare const __BACKEND_URL__: string

export const client: InferClient<Routes> = createClient({
    baseUrl: __BACKEND_URL__,
    fetchOptions: {
        credentials: 'include',
    }
})
