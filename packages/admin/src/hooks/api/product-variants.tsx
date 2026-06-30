import {
  ClientError,
  InferClientInput,
  InferClientOutput,
} from "@avenuejs/client";
import { QueryKey, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { sdk } from "../../lib/client";
import { queryKeysFactory } from "../../lib/query-key-factory";
import { AdminProductVariantResponse } from "@avenuejs/types";

const PRODUCT_VARIANT_QUERY_KEY = "product_variant" as const;
export const productVariantQueryKeys = queryKeysFactory(
  PRODUCT_VARIANT_QUERY_KEY,
);

export const useVariants = (
  query?: InferClientInput<typeof sdk.admin.productVariants.query>,
  options?: Omit<
    UseQueryOptions<
      AdminProductVariantResponse,
      ClientError,
      AdminProductVariantResponse,
      QueryKey
    >,
    "queryFn" | "queryKey"
  >,
) => {
  const { data, ...rest } = useQuery({
    queryFn: () => sdk.admin.productVariants.query({ ...query }),
    queryKey: productVariantQueryKeys.list(query),
    ...options,
  });

  return { ...data, ...rest };
};
