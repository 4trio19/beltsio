import React, {Component} from 'react';
import belts from '../belts';
console.log(belts.length + 1);
class BeltForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'id': 0,
            'qty': 0,
            'length': 0,
            'width': 0,
            'thickness': 0,
            'machine': '',
            'num': 0
        }
        this.updateInputValue = this.updateInputValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateInputValue(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        const id = belts.length + 1;
        console.log(this.state);
        this.setState({[name]: value, id: id});

    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSubmit(this.state);
        this.setState({
            'id': 0,
            'qty': 0,
            'length': 0,
            'width': 0,
            'thickness': 0,
            'machine': '',
            'num': 0
        });
    }
    render() {

        return (
            <form id="belt-form" className="form" onSubmit={this.handleSubmit}>

                <div className="form-group">
                  <label>Quantity:</label>
                <input className="add-belt-input" name="qty" ref="qty" type="number" value={this.state.qty} onChange={this.updateInputValue}/>
                </div>
                <div className="form-group">
                  <label>Length:</label>
                <input className="add-belt-input" name="length" ref="length" type="number" value={this.state.length} onChange={this.updateInputValue}/>
                </div>
                <div className="form-group">
                  <label>Width:</label>
                <input className="add-belt-input" name="width" ref="width" type="number" value={this.state.width} onChange={this.updateInputValue}/>
                </div>

                <div className="form-group">
                  <label>Thickness:</label>
                <input className="add-belt-input" name="thickness" ref="thickness" type="number" value={this.state.thickness} onChange={this.updateInputValue}/>
                </div>
                <div className="form-group">
                  <label>Machine:</label>
                <input className="add-belt-input" placeholder="ex: Vega 1100" name="machine" ref="machine" type="text" value={this.state.machine} onChange={this.updateInputValue}/>
                </div>
                <div className="form-group">
                  <label>Num:</label>
                <input className="add-belt-input" name="num" ref="num" type="number" value={this.state.num} onChange={this.updateInputValue}/>
                </div>
                <div className="form-group">
                <button type="submit" className="btn btn-success">Add Belt</button>
                </div>
            </form>
        );
    }
}

export default BeltForm;
