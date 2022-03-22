export interface ExerciseFieldProps {
    exercise: string;
    sets: number;
    reps: {
        min: number;
        max: number;
    };
}
