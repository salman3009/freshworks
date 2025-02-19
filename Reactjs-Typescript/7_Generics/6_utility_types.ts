//Partial means optional

interface CourseGoal{
    title:string,
    description:string,
    date:Date
}

function createSeconds(title:string,description:string,date:Date):CourseGoal{
       let courseGoal:Partial<CourseGoal>={};
       courseGoal.title = title;
       courseGoal.description = description;
       courseGoal.date = date;
       return courseGoal as CourseGoal;
}

const names:Readonly<string[]>=["manu","anna"];

