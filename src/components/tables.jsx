import React from 'react';

class IDGenerator {
    constructor() {
      this.count = 0
    }
    
    getID() {
      this.count++
      if (this.count === 10) {
        this.count = 0
      }
      return Date.now().toString() + this.count.toString()
    }
  }
  
  var uniqueID = new IDGenerator()
  
  class ReactTableFieldInput extends React.Component {
    constructor(props) {
      super(props)
      
      this.state = { data: this.props.data }
      this.prevValue = this.props.data
      this.handleChange = this.handleChange.bind(this)
      this.handleKeyDown = this.handleKeyDown.bind(this)
      this.saveData = this.saveData.bind(this)
      this.cancelSave = this.cancelSave.bind(this)
    }
    
    componentDidMount() {
      this.refs.text.focus()
    }
    
    handleChange(e) {
      this.props.onChange(e.target.value)
    }
    
    handleKeyDown(e) {
      if (e.keyCode === 13) {
        this.saveData()
      } else if (e.keyCode === 27) {
        this.cancelSave()
      }
    }
    
    saveData() {
      this.prevValue = this.refs.text.value
      this.props.onSave()
    }
    
    cancelSave() {
      this.props.onChange(this.prevValue)
      this.refs.text.value = this.prevValue
      this.props.onSave()
    }
    
    render() {
      return ( <span>
          <input ref="text" className="form-control" type="text" value={this.props.data} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
        <button type="button" className="btn btn-primary" onClick={this.saveData}>OK</button>
        <button type="button" className="btn btn-danger" onClick={this.cancelSave}>X</button>
        </span> )
    }
  }
  
  class ReactTableField extends React.Component {
    constructor(props) {
      super(props)
      
      this.state = { data: this.props.data, editing: false }
      this.handleClick = this.handleClick.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.handleSave = this.handleSave.bind(this)
    }
    
    handleClick(e) {
      if (this.state.editing === false) {
        this.setState({ editing: true })
      }
    }
    
    handleChange(val) {
      this.setState({ data: val })
    }
    
    handleSave() {
      this.setState({ editing: false })
    }
    
     render() {
       if (this.state.editing === false) {
          return (
            <td onClick={this.handleClick}>
              {this.state.data}
            </td>
          )
       } else {
         return (
            <td>
             <ReactTableFieldInput ref="text" onChange={this.handleChange} onSave={this.handleSave} data={this.state.data} />
            </td>
          )
       }
     }
  }
  
  class ReactTableRow extends React.Component {
    constructor(props) {
      super(props)
      
      this.state = { fields: this.props.fields }
      //this.deleteRow = this.deleteRow.bind(this)
    }
    
    deleteRow(e) {
      e.preventDefault
      
      this.props.onDelete(this.props.index)
    }
    
    render() {
      const fields = this.state.fields.map((el, i) => {
        return <ReactTableField key={uniqueID.getID()} data={el} />
      })
      return (
        <tr>
          {fields}
        </tr>
      )
    }
  }
  
  export class ReactTable extends React.Component {
    constructor(props) {
      super(props)
      
      this.state = { data: this.props.data, headers: this.props.headers }
      //this.addData = this.addData.bind(this)
      //this.deleteData = this.deleteData.bind(this)
    }
    
    addData() {
      let arrLength = this.state.data[0].length
      let newRow = Array(arrLength).fill("New")
      let newArr = this.state.data
      newArr.push(newRow)
      this.setState({ data: newArr })
    }
    
    deleteData(id) {
      this.setState({
        data: this.state.data.filter((el, i) => {
          console.log(el)
          // el.props.index !== id 
        })
      })
    }
    
    render() {
      const rows = this.state.data.map((el, i) => {
        return <ReactTableRow key={uniqueID.getID()} index={uniqueID.getID()} fields={el} />
      })
      var tableHeaders = this.state.headers.map((el, i) => {
        return <th key={i}>{el}</th>
      })
      
      return (<div className="col-12">
          
          <table className="table">
            <thead><tr>{tableHeaders}</tr></thead>
            <tbody>{rows}</tbody>
          </table>
        </div>)
    }
  }
  
  /* Raw data set */
  const data = [
    ["Michael", 32, "Male"],
    ["Rita", 32, "Female"],
    ["John", 40, "Male"],
    ["Jane", 27, "Female"]
  
  ]
  
  const headers = [
    "Name", "Age", "Gender"
  ]
   
export class Tables extends React.Component{
    render(){
        return(
            <div className="container">
            <div className="row">
                <ReactTable data={data} headers={headers} />
            </div>
            </div>
        )
    }
}  

export default Tables;

//ReactDOM.render(<ReactTable data={data} headers={headers} />, document.getElementById('app'));
  
  