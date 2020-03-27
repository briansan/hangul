import React from 'react';
import './App.css';
import Table from './components/table';
import Speaker from './components/speaker';
import { headers, letters } from './dat/korean';
import { Bar, Button, View } from './breadinterface';
import GenerateKorean from './store/korean';

export default class App extends React.Component {
  state = {
    level: 1,
    unlockedLevel: 1,
    ch: GenerateKorean(1),
    counter: 1,
    showTable: false,
  }

  showRules = () => {
    var msg = ""
    msg += "top-left : " + String.fromCharCode(0x2630) + " : Toggle pronunciation table\n"
    msg += "top-middle : Hangul : Show this help menu\n"
    msg += "top-right : + : Generate new character\n"
    msg += "bottom-left : < : Go to previous level\n"
    msg += "bottom-middle: Level N : Show instructions for level\n"
    msg += "bottom-right : > : Go to next level\n"
    msg += "\nYou must correct pronounce 10 characters before moving onto the next level"
    alert(msg)
  }

  toggleTable = () => {
    this.setState({showTable: !this.state.showTable, counter: 1})
  }

  generate = () => {
    var next = this.state.counter + (this.state.showTable ? 0 : 1)
    this.setState({
      ch: GenerateKorean(this.state.level),
      counter: next,
    })
    if (next === 10) {
      var next = this.state.unlockedLevel + 1
      this.setState({
        message: "Unlocked Level " + next,
        unlockedLevel: next,
      })
    } 
  }

  descLevel = () => {
    var msg = ["", 
      "Level 1: Single consonants and single vowels", 
      "Level 2: Level 1 + accented consonants",
      "Level 3: Level 2 + double vertical vowels",
      "Level 4: Level 3 + horizontal and vertical vowels",
      "Level 5: Level 4 + single consonant on the bottom",
    ][this.state.level]
    alert(msg)
  }

  nextLevel = () => {
    this.setState({
      level: this.state.level + 1,
      counter: 1,
      message: "",
    })
  }

  prevLevel = () => {
    this.setState({
      level: this.state.level - 1,
      counter: 1,
    })
  }

  render() {
    return (
      <div className="container">
        <Bar pos="top">
          <Button onClick={this.toggleTable} title={String.fromCharCode(0x2630)}/>
          <Button onClick={this.showRules} title="Hangul"/>
          <Button onClick={this.generate} title="+"/>
        </Bar>
        <View>
          <div className="row">
            <div hidden={!this.state.showTable} className="col-8">
            <Table columns={headers()} data={letters()} />
            </div>
            <div className={"col-" + (this.state.showTable ? "4" : "12")}>
              <center>
                <br/>
                <br/>
                <h1>{this.state.ch}</h1>
                {
                  this.state.message ? 
                  <div className="alert alert-success" role="alert">{this.state.message}</div> :
                  ""
                }
                <Speaker ch={this.state.ch}/>
              </center>
            </div>
          </div>
          <br/>
        </View>
        <Bar pos="bottom">
          <Button onClick={this.prevLevel} title={this.state.level > 1 ? "<" : ""} />
          <Button onClick={this.descLevel} title={"Level "+this.state.level+" ("+this.state.counter+"/10)"} />
          <Button onClick={this.nextLevel} title={this.state.level < this.state.unlockedLevel ? ">" : ""} />
        </Bar>
      </div>
    )
  }
}
