import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type SkillWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  proficiency?: IntNullableFilter;
  project?: ProjectWhereUniqueInput;
};
