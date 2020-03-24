import React from 'react';
import './App.css';
import KoreanGenerator from './components/koreanGen';
import Table from './components/table';
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
      "Level 2: Level 1 + Double (accented) consonants",
      "Level 3: Level 2 + Double vertical vowels",
      "Level 4: Level 3 + horizontal and vertical vowels",
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
                <br/>
                <br/>
                <a href="https://github.com/briansan/hangul"><svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg></a>
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
