import { Module } from "@medusajs/framework/utils"
import VendorUIModuleService from "./services/vendor-ui-module-service"
import { AvenueModules } from "@avenuejs/types"

export default Module(AvenueModules.VENDOR_UI, {
    service: VendorUIModuleService,
})