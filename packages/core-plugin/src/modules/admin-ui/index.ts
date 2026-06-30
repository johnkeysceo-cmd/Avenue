import { Module } from "@medusajs/framework/utils"
import AdminUIModuleService from "./services/admin-ui-module-service"
import { AvenueModules } from "@avenuejs/types"

export default Module(AvenueModules.ADMIN_UI, {
    service: AdminUIModuleService,
})
