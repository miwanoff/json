let marks = "[4, 5, 2, 3]";
marks = JSON.parse(marks);
alert(marks[1]); // 5

let student =
  '{"name": "John", "age": 25, "isStudent": false, "marks": [4, 5, 2, 3]}';
student = JSON.parse(student);
alert(student.marks[1]); // 5

let test = {
  title: "Test",
  subject: "JavaScript",
};
let str = JSON.stringify(test); // Преобразование в строку JSON
document.writeln(str);
// test = JSON.parse(str); //Обратное преобразование в объект
// alert(test.title); // Test