import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {COURSES} from '../../db-data'
import {Course} from '../model/course';

@Component({
  selector: 'course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  // Note: Use these two lines for latest Angular core.
  // @Input({required: true})
  // index: number;


  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor() { 
  }

  ngOnInit() {
  }
  
  onCourseViewed() {

    console.log("card component - button clicked ...");

    this.courseEmitter.emit(this.course);
  }

}
