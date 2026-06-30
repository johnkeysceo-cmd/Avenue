import { Module } from "@medusajs/framework/utils"
import { AvenueModules } from "@avenuejs/types"

import CommissionModuleService from "./service"

export default Module(AvenueModules.COMMISSION, {
  service: CommissionModuleService,
})
