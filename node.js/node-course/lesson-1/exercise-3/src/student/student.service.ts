import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students: any[] = [];

    deleteStudent(studentId: number) {
        let index = this.students.findIndex(student => student.ID == studentId);
        if (index >= 0) {
            this.students.splice(index,1)
        }
    }
    updateStudent(studentData: any) {
        let index = this.students.findIndex(student => student.ID == studentData.ID);
        if (index >= 0) {
            this.students[index] = studentData;
        }
    }
    addStudent(studentData: any) {
        this.students.push(studentData);
    }
    getStudent(studentId: number): any {
        console.log(typeof(studentId));
        const matchingStudents = this.students.filter(student => {
            console.log(student);
            console.log(typeof(student.ID));

            return student.ID == studentId
        })
        return matchingStudents.length > 0 ? matchingStudents[0] : {};
    }
    getAllStudents() : any[] {
        return this.students;
    }
}
