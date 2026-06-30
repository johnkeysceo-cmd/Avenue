import { DashboardModuleOptions } from "@avenuejs/types"
import { DashboardBase } from "../../../utils/dashboard/dashboard-base"

export default class AdminUIModuleService extends DashboardBase {
    protected readonly appName = "Admin"

    constructor(container, options: DashboardModuleOptions) {
        super(container, {
            ...options,
            viteDevServerPort: options.viteDevServerPort ?? 7000
        })
    }
}
