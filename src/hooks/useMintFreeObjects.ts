import { usePrepareContractWrite } from "wagmi";
import { Polygon } from "../contracts";

export const useMintFreeObjects = () => {
  const { config } = usePrepareContractWrite({
    ...Polygon.PhiShop,
    functionName: "shopBuyAndDepositObject",
    args: [],
  });
};
