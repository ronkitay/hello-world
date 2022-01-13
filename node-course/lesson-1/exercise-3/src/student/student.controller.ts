import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {

    constructor (private readonly svc: StudentService) {}

    @Get()
    getAllStudents() {
        return this.svc.getAllStudents();
    }

    @Get(":id")
    getStudent(@Param("id") studentId: number) {
        return this.svc.getStudent(studentId);
    }

    @Post()
    addStudent(@Body() studentData: any) {
        this.svc.addStudent(studentData);
        return "Student added";
    }

    @Put()
    updateStudent(@Body() studentData: any) {
        this.svc.updateStudent(studentData);
        return "Student updated";
    }

    @Delete(":id")
    deleteStudent(@Param("id") studentId: number) {
        this.svc.deleteStudent(studentId);
        return "Student deleted";
    }



}
