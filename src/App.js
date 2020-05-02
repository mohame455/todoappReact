import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: [],
      text: 'complete',
      isText:false
    };
  }

  addItems = () => {
    if (this.state.term !== "") {
    this.setState({
      items: [...this.state.items,{id:Math.random() ,term:this.state.term,isText:this.state.isText}],
      term:''
    })
  } else {
    alert('please enter a new item')
  }
  }

  handelChange = (e) => {
      this.setState({
        term: e.target.value
      })
    
  }

  changeUndo = (id) => {

    this.setState({
    items:this.state.items.map(el=>(el.id==id)?{id:el.id,term:el.term,isText:true}:el)
    })
  }

  removeItem=(id)=>{
    const filterItems=this.state.items.filter(e=>e.id!==id)
    this.setState({
      items:filterItems
    })
  }

  render() {
    return (
      <div>
        <div className="to-do-list">
          <h1><strong>To-Do App!</strong></h1>
          <h3>Add New To-Do</h3>
          <input id="inputTask" type="text" placeholder="Enter new task" value={this.state.term} onChange={this.handelChange} />
          <button id="addTask" onClick={this.addItems}>Add</button>
        </div>
        <p id="text">Let's get somework done!</p>
        <ul>
        {this.state.items.map((e) => <li key={e.id} className='newElement'>
            <button className='btn' onClick={()=>this.changeUndo(e.id)}>{(e.isText)?'undo':"complete"}</button>
            <button className='btn' onClick={()=>this.removeItem(e.id)}>Delete</button>
            <span className={(e.isText)?"lineTh":'item'}>{e.term}</span>

          </li>
        )}
      </ul>

      </div>
    );
  }
}
export default App;