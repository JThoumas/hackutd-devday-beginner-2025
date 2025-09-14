import React from 'react'
import CourseCard from './coursecard'
import data from '../data.json'

// const data = [
//   {
//     "courseCode": "CS 1200",
//     "title": "Introduction to Computer Science and Computer Software",
//     "description": "Overiew of computer science",
//     "creditHours": 2
//   }
// ];

function Courses() {
  return (
    <div className="py-12 bg-gray-100">
      {data.courses.map((course, idx) => (
        <div key={idx} className="mb-6">
          <CourseCard
            courseCode={`${course.course_tag} ${course.course_number}`}
            title={course.course_name}
            desciption={course.course_description}
            creditHours={course.course_credits}
          />

        </div>
      ))}

    </div>
  )
};

export default Courses