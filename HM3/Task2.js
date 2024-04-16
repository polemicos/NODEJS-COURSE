const persons =[
    {firstName: "Mikita", lastName: "Rakovich",},
    {firstName: "Jakub", lastName: "Kowal"},
    {firstName: "John", lastName: "Cena"}
];

const getFullName = person => `${person.firstName} ${person.lastName}`;
console.log(persons.map(getFullName));
///////////////////


const findUnique = (regex) => (str) => {
    return str.replace(regex, '').split(/\s+/);
};

const alphabeticOrder = (words) => {
    return words.sort();
};

const pipe = (...funcs) => (value) => {
    return funcs.reduce((currentValue, currentFunc) => {
        return currentFunc(currentValue);
    }, value);
};

const filterUniqueWords = pipe(findUnique(/\b(\w+)\b(?=.*\b(\1)\b)/gi), alphabeticOrder);

console.log(filterUniqueWords("banana apple zombie apple air grape grape string grape Apple"));
//////////////////

const getGrades = (students) => students.map(student => student.grade);

const calculateAverage = (grades) => {
    const sum = grades.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / grades.length;
};


const getAverageGrade = pipe(getGrades, calculateAverage);

const students = [
    { name: "Mikita", grade: 4 },
    { name: "Jakub", grade: 5 },
    { name: "John", grade: 3.5 }
];

console.log(getAverageGrade(students));


