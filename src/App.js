import { Component } from "react";
import { CardList } from "./components/cardList/cardListComponents";
import "./App.css";
import { SearchBox } from "./components/search-box/search-box";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFeilds: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ monsters: users });
      });
  }

  handleChange = (e) => {
    this.setState({ searchFeilds: e.target.value });
    console.log(this.state);
  };

  render() {
    const { monsters, searchFeilds } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFeilds.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="Main-heading">Monster Rolodex</h1>
        <SearchBox
          placeholder="Search Monster"
          handleChange={this.handleChange}
        ></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
