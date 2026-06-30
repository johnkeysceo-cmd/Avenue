import { Module } from "@medusajs/framework/utils"
import CodegenModuleService from "./services/codegen-module-service"
import { AvenueModules } from "@avenuejs/types"

export default Module(AvenueModules.CODEGEN, {
    service: CodegenModuleService,
})
