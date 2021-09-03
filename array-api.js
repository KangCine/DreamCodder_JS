// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(' ');
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  let result = fruits.split(', ');
  result.forEach((result) => console.log(result));
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.reverse());
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  console.log(result);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    const result = students.find((student) => student.score === 90);
    console.log(result);
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    // some: 하나만 있어도 true
    const result = students.some((student) => student.score < 50);
    console.log(result);

    // every: 모든게 다 맞아야 true
    const result2 = students.every((student) => student.score < 50);
    console.log(result2);
}

// Q9. compute students' average score
{
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students.map(student => student.score).filter(score => score >= 50).join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students.map((student) => student.score).sort((a, b) => a - b);
    console.log(result);
}





const product_data = {
	options: {
        values: [
            {
                code: '',
                name: '플토2.0',
            },
            {
                code: '',
                name: '비락',
            },
        ],
    },
};

// 문제9
// : product_data.options.values는 배열이죠? .map함수를 써서,
//      [
//         '플토2.0',
//         '비락'
//      ]
// 와 같은 새로운 배열을 만들어보세요.

const res1 = product_data.options.values.map((product) => product.name);
console.log(res1);


// 문제10
// : .reduce함수 사용해서, 
//       "플토2.0/비락"
// 와 같은 문자열을 만들어보세요.

const res2 = product_data.options.values.reduce((prev, curr) => prev.name + '/' + curr.name);
console.log(res2);