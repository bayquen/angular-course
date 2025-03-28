import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
    
    courses = COURSES;

    title = COURSES[0].description;

    price = 9.99;

    rate = 0.67;

    course = COURSES[0]

    startDate = new Date(2025, 3, 1); // Year, Month (zero-index-based), Day

    onCourseSelected(course:Course) {
        console.log('App component', course);
    }

    trackCourse(index:number, course:Course) {
        return course.id;
    }

}
