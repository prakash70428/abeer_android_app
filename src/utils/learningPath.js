// A lesson unlocks only once the lesson before it (in unit order) is
// completed; the first lesson in a unit is always open. Status is always
// derived from this rule plus the completed-set — never stored — so a
// lesson can't end up "unlocked" while the one before it is still locked.
export function getLessonStatus(unit, lessonIndex, completedLessonIds) {
  const lesson = unit.lessons[lessonIndex];
  if (completedLessonIds[lesson.id]) {
    return 'completed';
  }

  const previousLesson = unit.lessons[lessonIndex - 1];
  const isUnlocked = lessonIndex === 0 || Boolean(completedLessonIds[previousLesson.id]);
  return isUnlocked ? 'in_progress' : 'locked';
}

export function getUnitProgress(unit, completedLessonIds) {
  const completedCount = unit.lessons.filter((lesson) => completedLessonIds[lesson.id]).length;
  return completedCount / unit.lessons.length;
}
