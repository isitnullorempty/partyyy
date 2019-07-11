import React from "react";

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "RJRJRJRJRJRJ",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1
  },
  {
    title: "Ronnie",
    url: "https://ronnie.js.org/",
    author: "Danniie Abramov, Andrew Clark",
    num_comments: 22,
    points: 77,
    objectID: 2
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list, inputText:'', filteredList: list
    };
    this.onDismiss = this.onDismiss.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onDismiss(objectID) {
    this.setState({
      list: this.state.list.filter(item => item.objectID != objectID)
    });
  }
  onInputChange(event) {
    console.log(event.target.value)
    const filteredList = this.state.list.filter(item=>item.title.toLowerCase().includes(event.target.value.toLowerCase()))
    this.setState({inputText: event.target.value, filteredList,})
  }
  render() {

    return (
      <div>
        <form>
          <input type="text" onChange={this.onInputChange} value={this.state.inputText}/>
        </form>
        {this.state.filteredList.map(item => (
          <div key={item.objectID}>
            <span>{item.title}</span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <button onClick={() => this.onDismiss(item.objectID)}>
                Dismiss
              </button>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
