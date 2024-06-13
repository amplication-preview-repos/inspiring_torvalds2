import { SortOrder } from "../../util/SortOrder";

export type ExperienceOrderByInput = {
  company?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  role?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
