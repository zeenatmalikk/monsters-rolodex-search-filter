import "./App.css";
import { Component } from "react";
import { CardList } from "./Components/card-list/Cards-list.component";
import SearchBox from "./Components/Search-box/SearchBox.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: "",
    };
  }

  //class component gives access to lifecycle methods
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`) //fetching data from url
      .then((response) => response.json()) //converting into json format
      .then((users) => this.setState({ monster: users })); //then taking users from json object that we got and setting it to monster state
  }
  render() {
    const { searchField, monster } = this.state;
    //same as const monster=this.state.monster
    const filteredMonsters = monster.filter(
      //II]refilters after rerender by calling filtermonster by monster.filter which is passed to cardlist which rerenders cardlist
      (mon) => mon.name.toLowerCase().includes(searchField.toLowerCase()) //toLowerCase is done to convert it into lowercase string to avoid case sensitivity//includes checks if string value passed in searchfield is same as string we are searching for from the api
    );
    return (
      <div className="App">
        <h1>Monsters ROLODEX</h1>
        <SearchBox
          placeholder="search monsterss..."
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
