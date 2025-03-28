import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {COURSES} from '../../db-data'
import {Course} from '../model/course';
import { CommonModule, NgStyle } from '@angular/common';

@Component({
  selector: 'course-card',
  imports: [CommonModule, NgStyle],
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
  
  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed() {

    console.log("card component - button clicked ...");

    this.courseEmitter.emit(this.course);
  }

  cardClasses() {
    if (this.course.category == 'BEGINNER') {
      return 'beginner';
    }
  }

  cardStyles() {
    return {'background-image': 'url(' + this.course.iconUrl + ')'

    };
  }

}
