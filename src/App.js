import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';

class App extends Component{
  state ={
    course :[
      {name: "HTML" },
      {name: "CSS" },
      {name: "BootStrap"},
      {name: "JS"}

    ],

    current : ""
  }

  // Update Courses list
  updateCourse =(e) =>{
    this.setState({
     current: e.target.value
    })
  }

  // Add new Couese to courses list
  addCourse =(e) =>{
    e.preventDefault();
       let currentValue = this.state.current;
      let allCourses = this.state.course;
    if(currentValue  === "") {
      return alert("Please Enter Any Data");
    }
    else{
      
      allCourses.push({name: currentValue})
      this.setState({
        course : allCourses,
        current : ""
      })  
    }
  }




  //Delete course from courses list 
  deleteCourse = (index) =>{
    let all_courses = this.state.course; 
    all_courses.splice(index, 1);
    this.setState(
      {all_courses}
      )
  }


  //Edit Course Function :
  editCourse = (index, value) =>{
    let {course} = this.state;
    let coursesIndex = course[index];
    coursesIndex['name'] = value;
    this.setState({
      course
    })
   }

   
    render() {
            const x= this.state.course;
            const length  = x.length;
            const courseList = length ? ( x.map( (course , index) => {
              
            return <CourseList details={course} key={index}  i={index} update={this.handleChaneg} delete={this.deleteCourse} editCourses ={this.editCourse}/>;
            })
            ) : (
              <p className="paragraph">There is no courses to show</p>
            )
            
            
      return (
        <section className="App">
          <h2>Add Courses</h2>
          <CourseForm update={this.updateCourse} add={this.addCourse} newCurrent={this.state.current} />
          <ul>
             {courseList}   
          </ul>
        </section>
    );
  }
}

export default App;
