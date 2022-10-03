export interface Mistake{
    commonMistakeType: number,
    id: string,
    idQuestion: string,
    numberQuestion: number,
    questionType: number,
    title:string
}

export interface SavedQuestion{
    addedStamp: any,
    changedStamp: any,
    codeSentence: string,
    id: string,
    idQuestion: string,
    learnerId: string,
    lessonType: number,
    orther: number,
    questionType: number,
    title: string
}