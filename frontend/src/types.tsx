export type Id = ReturnType<typeof crypto.randomUUID>;

export type Experience = {
  id: Id;
  title: string;
  description: string;
};

export type Project = {
  id: Id;
  title: string
  description: string;
}

export type Streak = {
  id: Id;
  experienceId: Id;
  streakCount: number;
};

export const actions = {
  add: "add",
  remove: "remove",
};

export type Action = (typeof actions)[keyof typeof actions];