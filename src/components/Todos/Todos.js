import React, { Component } from 'react';
import { Card, IconButton, Icon, InputBase } from '@material-ui/core';
import Title from './Title/Title';
import TodoList from './TodoList/TodoList';
import Filter from './Filter/Filter';
import './Todos.scss';


export default class Todos extends Component {
  constructor() {
    super();
    this.state = {
      selectedFilter: "all",
      todoList: [],
      filteredTodoList: [],
      todo: ""
    }
  }

  handleInputChange(e) {
    this.setState({ todo: e.target.value });
  }

  handleAddTodo() {
    if (!this.state.todo.length) return;
    this.setState({
      todoList: this.state.todoList.concat({
        tarea: this.state.todo,
        finalizado: false
      }),
      todo: ""
    });
  }

  handleStatusChange(e, index) {
    let arregloFinal = this.state.todoList;
    arregloFinal[index].finalizado = e.target.checked;

    this.setState({ todoList: arregloFinal });
  }

  handleFilterChange = (filter) => {
    this.setState({ selectedFilter: filter });
  }

  render() {
    let faltan = this.state.todoList.filter(todo => {
      return todo.finalizado === false
    }).lenght;

    let filteredTodoList = [];
    switch (this.state.selectedFilter) {
      case "all":
      filteredTodoList = this.state.todoList;
      break;
      case "pending":
      filteredTodoList = this.state.todoList.filter(todo => !todo.finalizado);
      break;
      case "completed":
      filteredTodoList = this.state.todoList.filter(todo => todo.finalizado);
      break;
      default:
      break;
    }

    return (
      <div className="todos-container">
        <Title text="Lista de tareas">{/* Componente funcional {stateless} con propiedad "text"*/}</Title>

        <Card className="todos-card">
          <div className="input-container">
            <IconButton>
              <Icon>arrow_drop_down</Icon>
            </IconButton>
            <InputBase value={this.state.todo} onChange={(e) => this.handleInputChange(e)} className="todo-input" fullWidth={true} placeholder="¿Qué tareas vas a realizar?"></InputBase>

            <IconButton onClick={() => this.handleAddTodo()}>
              <Icon>add</Icon>
            </IconButton>
          </div>

          <TodoList statusChange={this.handleStatusChange.bind(this)} list={filteredTodoList}></TodoList> {/* Se manda como propiedad, el arreglo dentro del estado de este componente*/}

          <Filter filterChange={this.handleFilterChange} missing={faltan}></Filter>

        </Card>
      </div>
    );
  }
}
