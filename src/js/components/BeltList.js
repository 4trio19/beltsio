import React, { Component } from 'react';
import BeltForm from './BeltForm';
import belts from '../belts';
class BeltList extends Component {
  constructor (props) {
    super (props);
    this.state = {
      belts
    }
  }
  _removeBelt (index){
    let indexToRemove = index;
    let toRemove = this.state.belts.filter((belt) => {
      return belt.id !== indexToRemove;
    });

    this.setState ({
      belts : toRemove
    });
  }
  updateBeltsList(belt) {
    this.setState({
      belts: [...this.state.belts, belt]
    });
  }
  render() {

    return (
      <div>
        <div className="row">
          <div className="col-md-4">
      <BeltForm handleSubmit={this.updateBeltsList.bind(this)} />
      </div>
      <div className="col-md-8">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Qty.</th>
            <th>Length (cut)</th>
            <th>Material</th>
            <th>Machine</th>
            <th className="col-md-1 text-center">X</th>
          </tr>
        </thead>
        <tbody>
      {this.state.belts.map((belt)=>{
        return (
          <tr key={belt.id}>
            <td>{belt.qty}</td>
            <td>{parseFloat((belt.length /25.4)+8).toFixed(2)}</td>
            <td>{belt.length} x {belt.width} x {belt.thickness}</td>
            <td>{belt.machine}</td>
            <td className="col-md-1 text-center"><button className="btn btn-warning" onClick= {() => this._removeBelt(belt.id)}><i className="fa fa-trash" aria-hidden="true"></i></button></td>
          </tr>
        )
      })}
      </tbody>
      </table>
    </div>
    </div>
    </div>
    );
  }
}

export default BeltList;
