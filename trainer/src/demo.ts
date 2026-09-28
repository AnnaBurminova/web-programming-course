import {
    type Answer,
    type TrainingSet,
    calculateProgress,
    filterTasksByTopic,
    findTask,
} from "./domain";

const trainingSet: TrainingSet = {
    id: "typescript-basics",
    title: "Основы TypeScript",
    tasks: [
        {
            id: "task-1",
            kind: "single-choice",
            topic: "types",
            prompt: "Какой тип используется для строк?",
            options: [
                {
                    id: "option-1",
                    label: "string",
                },
                {
                    id: "option-2",
                    label: "number",
                },
            ],
        },
        {
            id: "task-2",
            kind: "short-text",
            topic: "types",
            prompt: "Что такое TypeScript?",
        },
        {
            id: "task-3",
            kind: "short-text",
            topic: "functions",
            prompt: "Что возвращает функция?",
        },
    ],
};

const answers: Answer[] = [
    {
        taskId: "task-1",
        kind: "single-choice",
        optionId: "option-1",
    },
    {
        taskId: "task-2",
        kind: "short-text",
        text: "TypeScript — язык с поддержкой статической типизации.",
    },
];

console.log("Найденное задание:");
console.log(findTask(trainingSet, "task-1"));

console.log("Задания по теме types:");
console.log(filterTasksByTopic(trainingSet, "types"));

console.log("Прогресс:");
console.log(calculateProgress(trainingSet, answers));
