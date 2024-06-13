import { SkillCreateNestedManyWithoutProjectsInput } from "./SkillCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  description?: string | null;
  skills?: SkillCreateNestedManyWithoutProjectsInput;
  title?: string | null;
  url?: string | null;
};
