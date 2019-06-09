import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actionCreator'
import {bindActionCreators} from 'redux'

class CreateTodo extends Component {
    constructor(props){
        super(props)
        this.state = {
            todotext: '',
            todoinformation: '',
            todoname: '',
            tododate: ''
        }
        this.onChangeTodoText = this.onChangeTodoText.bind(this);
        this.onChangeTodoInformation = this.onChangeTodoInformation.bind(this);
        this.onChangeTodoName = this.onChangeTodoName.bind(this);
        this.onChangeTodoDate = this.onChangeTodoDate.bind(this);
    }

    onChangeTodoText(e){
        this.setState({
            todotext: e.target.value
        })
    }
       onChangeTodoInformation(e){
        this.setState({
            todoinformation: e.target.value
        });
    }
    onChangeTodoName(e){
        this.setState({
            todoname: e.target.value
        });
    }
     onChangeTodoDate(e){
            this.setState({
            tododate: e.target.value
        });
         
    }
    render(){
        return (
                  <div className="form-group row"> 
                    <div className="col-sm-10">
                      <h4>Add a new TODO at list:</h4>
                    <input onChange={this.onChangeTodoName} value={this.state.todoname} type="text" className="form-control" id="inputEmail3" placeholder="исполнитель"/>
                    <input onChange={this.onChangeTodoText} value={this.state.todotext} type="text" className="form-control" id="inputEmail3" placeholder="задача"/>
                    <input onChange={this.onChangeTodoInformation} value={this.state.todoinformation} type="text" className="form-control" id="inputEmail3" placeholder="описание задачи"/>
                    <input onChange={this.onChangeTodoDate} value={this.state.tododate} type="date"  className="form-control" id="inputEmail3" />
            
                    <button type="button" onClick={ () => this.setState({ todotext: '', todoinformation: '' }) } style={{marginTop: "25px", marginRight: "15px"}} className="btn btn-danger">Cancel</button>
                    <button type="button" onClick={() =>{ 
                      this.props.addTodo(this.state.todotext, this.state.todoinformation, this.state.todoname, this.state.tododate ); 
                      this.setState({ todotext: '' }); this.setState({ todoinformation: '' });this.setState({ todoname: '' });this.setState({ tododate: '' });
                                                           } } style={{marginTop: "25px"}} className="btn btn-success">Add Todo</button>
                    </div>
                  </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTodo
    }, dispatch)
}



export default connect(null, mapDispatchToProps)(CreateTodo)