import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type SkillUpdateInput = {
  name?: string | null;
  proficiency?: number | null;
  project?: ProjectWhereUniqueInput | null;
};
