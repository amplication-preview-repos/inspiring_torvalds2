import { Skill } from "../skill/Skill";

export type Project = {
  createdAt: Date;
  description: string | null;
  id: string;
  skills?: Array<Skill>;
  title: string | null;
  updatedAt: Date;
  url: string | null;
};
