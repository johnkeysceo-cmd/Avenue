import { SellerMemberDTO } from "@avenuejs/types"

export interface SellerContext {
  seller_id: string
  currency_code: string
  seller_member: SellerMemberDTO
}

declare module "express" {
  interface Request {
    seller_context?: SellerContext
  }
}
