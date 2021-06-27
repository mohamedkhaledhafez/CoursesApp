import React, { Component , Fragment} from 'react';

class CourseList extends Component{

    state ={
        isEdit : false
    }


    updateCourseItem = e => {
        e.preventDefault();
        this.props.editCourses(this.props.i, this.input.value);
        this.toggleState();
    }

    //The Edit Form :
    editForm =() =>{
        return(
            <form onSubmit={this.updateCourseItem}>
                <input type="text"  ref={(v) => {this.input = v}} defaultValue={this.props.details.name}/>
                <button>Update Course</button>
            </form>
        )
    }

    //toggle the state :
    toggleState = () =>{
        let {isEdit} = this.state;
        this.setState(
            {isEdit : !isEdit}
        )
    }

    renderCourse = () =>{
        return(
        <li>
        <span>
            {this.props.details.name}
        </span>
        <button onClick={() => {this.toggleState()}}>Edit Course</button>
        <button onClick={() => {this.props.delete(this.props.i)}}>Delete Course</button>
        </li>
        )
    }

    render(){
        let Edit = this.state.isEdit;
    return (
    <Fragment>
        {Edit ? this.editForm() : this.renderCourse()}
    </Fragment>
    );
  }
}

export default CourseList;
