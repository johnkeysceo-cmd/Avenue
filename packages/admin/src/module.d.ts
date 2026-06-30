declare const __BASE__: string

declare module "virtual:avenue/routes" {
    import { Route } from './utils/routes'
    export const customRoutes: Route[]
}

declare module "virtual:avenue/config" {
    import { AvenueConfig } from '@avenuejs/dashboard-sdk'
    const config: AvenueConfig
    export default config
}

declare module "virtual:avenue/components" {
    import { ComponentType } from 'react'
    const components: Record<string, ComponentType>
    export default components
}

declare module "virtual:avenue/menu-items" {
    import { MenuItem } from './utils/routes'
    const menuItems: { menuItems: MenuItem[] }
    export default menuItems
}

declare module "virtual:avenue/i18n" {
    const i18nResources: Record<string, { translation: Record<string, any> }>
    export default i18nResources
}

