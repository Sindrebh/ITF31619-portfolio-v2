import type { PropsWithChildren } from "react";
import type { Streak as StreakType } from "./types";

export default function Streak(props: Readonly<PropsWithChildren<StreakType>>) {
  const { children, streakCount, experienceId } = props;

  return (
    <section className="flex justify-between flex-row-reverse mt-8">
      {children}
      <p>
        HabitId: {experienceId}. HabitStreak {streakCount}
      </p>
    </section>
  );
}