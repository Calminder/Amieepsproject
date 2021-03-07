export interface ICoordinate
{
    latitude: number;
    longitude: number;
    id?: number;
}

export interface IAllquestion
{
    id?: number;
    type: string;
    source: string;
    title: string;
    possibleAnswers: string;
    correctAnswer: string;
    score: number;
}

export interface ILocation
{
    city: string;
    street: string;
    number: string;
    coordinate: ICoordinate;
    allquestions?: IAllquestion[];
    id?: number;
}