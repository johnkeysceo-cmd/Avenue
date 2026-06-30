import { Module } from "@medusajs/framework/utils"
import { AvenueModules } from "@avenuejs/types"

import VendorProductAttributeModuleService from "./service"

export const VENDOR_PRODUCT_ATTRIBUTE_MODULE =
  AvenueModules.VENDOR_PRODUCT_ATTRIBUTE
export { VendorProductAttributeModuleService }

export default Module(VENDOR_PRODUCT_ATTRIBUTE_MODULE, {
  service: VendorProductAttributeModuleService,
})
