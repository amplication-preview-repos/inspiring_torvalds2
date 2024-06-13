import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SkillListRelationFilter } from "../skill/SkillListRelationFilter";

export type ProjectWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  skills?: SkillListRelationFilter;
  title?: StringNullableFilter;
  url?: StringNullableFilter;
};
