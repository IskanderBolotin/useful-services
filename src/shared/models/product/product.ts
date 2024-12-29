export type ProductsFilterType = {
  brand?: string;
  price_from?: number;
  price_to?: number;
  nm_id?: number;
  offset?: number;
  limit?: number;
};

export type ProductCharacteristicsOptionType = {
  name?: string;
  value?: string;
  charc_type?: number;
};

export type ProductCharacteristicsListType = {
  group_name?: string;
  options?: ProductCharacteristicsOptionType[];
};

export type ProductType = {
  title?: string;
  nm_id?: number;
  vendor_code?: string;
  brand?: string;
  subj_name?: string;
  subj_root_name?: string;
  price?: number;
  description?: string;
  photos?: string[];
  characteristics?: ProductCharacteristicsListType[];
  status?: string;
  is_auto?: boolean;
  match_rate?: string;
};
