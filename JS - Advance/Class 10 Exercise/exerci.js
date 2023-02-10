console.log("Exercise 1")

class Academy {
    constructor(name, students, subjects, start, end) {
      this.Name = name;
      this.Students = students;
      this.Subjects = subjects;
      this.Start = start;
      this.End = end;
      this.NumberOfClasses = subjects.length * 10;
    }

    PrintStudents() {
      console.log(`Students in ${this.Name}:`);
      this.Students.forEach((student) => {
        console.log(student);
      });
    }

    PrintSubjects() {
      console.log(`Subjects in ${this.Name}:`);
      this.Subjects.forEach((subject) => {
        console.log(subject);
      });
    }
  }

  class Subject {
    constructor(title, isElective, academy, students) {
      this.Title = title;
      this.NumberOfClasses = 10;
      this.isElective = isElective;
      this.Academy = academy;
      this.Students = students;
    }

    OverrideClasses(num) {
      if (num < 3) {
        console.log("The number of classes is too small, it must be at least 3");
      } else {
        this.NumberOfClasses = num;
      }
    }
  }

  class Student {
    constructor(firstName, lastName, age) {
      this.FirstName = firstName;
      this.LastName = lastName;
      this.Age = age;
      this.CompletedSubjects = [];
      this.Academy = null;
      this.CurrentSubject = null;
    }

    StartAcademy(academy) {
      this.Academy = academy;
    }

    StartSubject(subject) {
      if (!this.Academy) {
        console.log("Error: Student doesn't have an academy");
        return;
      }

      if (!this.Academy.Subjects.includes(subject)) {
        console.log("Error: Subject doesn't exist in academy");
        return;
      }

      this.CurrentSubject = subject;
    }
  }

  let academy = new Academy("SEDC", ["Djoko", "Lili"], ["Math", "Geography"], "2023-02-22", "2023-04-15");

let subject = new Subject("Math", true, academy,["Lili"]);

let student = new Student("Djoko", "Lili", 25);
student.StartAcademy(academy);
student.StartSubject(subject);

console.log(academy);
console.log(subject);
console.log(student);


console.log("Exercise 2")
/*
Make the functions StartAcademy and StartSubject dynamic.

StartAcademy - When the student calls StartAcademy, the student should also be added to the Academy property Students ( The academy that he is starting )
StartSubject - When the student calls StartSubject the student should also be added to the Subject property Students ( The subject that he is starting ). If there was another subject in the CurrentSubject property, that subject should be transferred to CompletedSubjects and then add the new Subject
*/