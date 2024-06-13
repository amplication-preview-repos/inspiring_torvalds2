import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type SkillCreateInput = {
  name?: string | null;
  proficiency?: number | null;
  project?: ProjectWhereUniqueInput | null;
};
