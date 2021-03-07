export interface IQuestion
{
    id?: number;
    type: string;
    source: string;
    title: string;
    possibleAnswers: string;
    correctAnswer: string;
    score: number;
    destination?: any;
}