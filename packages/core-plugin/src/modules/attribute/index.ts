import { Module } from "@medusajs/framework/utils"
import { AvenueModules } from "@avenuejs/types"

import AttributeModuleService from "./service"

export const ATTRIBUTE_MODULE = AvenueModules.ATTRIBUTE
export { AttributeModuleService }

export default Module(ATTRIBUTE_MODULE, {
  service: AttributeModuleService,
})
