import { AxiosResponse } from "axios";
import { instance } from "../config";
import { FormDataType, ImportDataType, ProductResponseType, ProductsFilterType } from "shared/models";

const ProductService = {
  importProductByFile: async (formData: FormDataType): Promise<AxiosResponse> => {
    return instance.post("/api/v1/match-management/import-products/matching", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  },
  importProductByString: async (importData: ImportDataType): Promise<AxiosResponse> => {
    return instance.post("/api/v1/match-management/import-products/matching/on", importData);
  },
  loadMyProducts: async (filters: ProductsFilterType, to_excel = false): Promise<AxiosResponse<ProductResponseType>> => {
    // const {
    //   brand,
    //   price_from,
    //   price_to,
    //   nm_id,
    //   offset,
    //   limit = 20,
    // } = filters;

    // let body: ProductsFilterType = {
    //   limit
    // };

    return instance.post("/api/v1/match-management/get-my-products", filters, {
      params: {
        to_excel
      }
    });
  },
};

export default ProductService;
