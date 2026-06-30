import { Module } from "@medusajs/framework/utils"
import { AvenueModules } from "@avenuejs/types"

import SubscriptionModuleService from "./service"

export default Module(AvenueModules.SUBSCRIPTION, {
  service: SubscriptionModuleService,
})
