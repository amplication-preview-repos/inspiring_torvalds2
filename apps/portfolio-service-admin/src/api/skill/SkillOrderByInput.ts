import { SortOrder } from "../../util/SortOrder";

export type SkillOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  proficiency?: SortOrder;
  projectId?: SortOrder;
  updatedAt?: SortOrder;
};
