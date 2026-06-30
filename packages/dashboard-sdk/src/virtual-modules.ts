import path from "path"
import {
    RESOLVED_CONFIG_MODULE,
    RESOLVED_ROUTES_MODULE,
    RESOLVED_COMPONENTS_MODULE,
    RESOLVED_MENU_ITEMS_MODULE,
    RESOLVED_I18N_MODULE,
    VIRTUAL_MODULES,
} from "./constants"
import { generateRoutes } from "./routes"
import { generateMenuItems } from "./menu-items"
import { generateI18n } from "./i18n"
import type { BuiltAvenueConfig } from "./types"

export function isVirtualModule(id: string): boolean {
    return VIRTUAL_MODULES.includes(id)
}

export function resolveVirtualModule(id: string): string {
    return "\0" + id
}

export interface LoadVirtualModuleOptions {
    id: string
    avenueConfig: BuiltAvenueConfig
    cwd: string
}

export function loadVirtualModule({
    cwd,
    id,
    avenueConfig,
}: LoadVirtualModuleOptions): string | null {
    if (id === RESOLVED_CONFIG_MODULE) {
        return loadConfigModule(avenueConfig)
    }

    if (id === RESOLVED_COMPONENTS_MODULE) {
        return loadComponentsModule(avenueConfig, cwd)
    }

    if (id === RESOLVED_ROUTES_MODULE) {
        return loadRoutesModule(avenueConfig)
    }

    if (id === RESOLVED_MENU_ITEMS_MODULE) {
        return loadMenuItemsModule(avenueConfig)
    }

    if (id === RESOLVED_I18N_MODULE) {
        return loadI18nModule(avenueConfig)
    }

    return null
}

function loadConfigModule(avenueConfig: BuiltAvenueConfig): string {
    const { components, ...configWithoutComponents } = avenueConfig
    return `export default ${JSON.stringify(configWithoutComponents)}`
}

function loadComponentsModule(avenueConfig: BuiltAvenueConfig, cwd: string): string {
    const components = avenueConfig.components ?? {}
    const imports: string[] = []
    const exports: string[] = []

    Object.entries(components).forEach(([name, componentPath]) => {
        const resolvedPath = path.resolve(cwd, 'src', componentPath)
        imports.push(`import _${name} from "${resolvedPath}"`)
        exports.push(`${name}: _${name}`)
    })

    return `
${imports.join('\n')}

export default {
    ${exports.join(',\n    ')}
}
`
}

function loadRoutesModule(avenueConfig: BuiltAvenueConfig): string {
    return generateRoutes(avenueConfig)
}

function loadMenuItemsModule(avenueConfig: BuiltAvenueConfig): string {
    return generateMenuItems(avenueConfig)
}

function loadI18nModule(avenueConfig: BuiltAvenueConfig): string {
    return generateI18n(avenueConfig)
}
