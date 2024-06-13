import { SkillUpdateManyWithoutProjectsInput } from "./SkillUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  description?: string | null;
  skills?: SkillUpdateManyWithoutProjectsInput;
  title?: string | null;
  url?: string | null;
};
