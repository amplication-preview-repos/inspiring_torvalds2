import { Project } from "../project/Project";

export type Skill = {
  createdAt: Date;
  id: string;
  name: string | null;
  proficiency: number | null;
  project?: Project | null;
  updatedAt: Date;
};
