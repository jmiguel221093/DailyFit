export type ExerciseType = {
    name: string;
    sets: number;
    reps: {
        min: number;
        max?: number;
    };
};

export interface RoutineItemType {
    id: string;
    title: string;
    exercises: ExerciseType[];
}
