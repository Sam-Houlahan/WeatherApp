import React from 'react'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            errorMsg: null,
            searchTerm:''
        }
    }
handleSubmit(e) {
    e.preventDefault()
    const term = this.state.searchTerm
    this.props.handleSearchClick(term)
}
handleChange(e) {
this.setState({
    [e.target.name]: e.target.value
    })
}

render() {
    return (
      <div className="searchForm form-group text-center">
          <form onSubmit = {this.handleSubmit.bind(this)}>
              <label for ="search">Location:</label>
                <input type = 'text'  name= "searchTerm"  className = "form-control" placeholder="Show me the weather in... city" onChange = {this.handleChange.bind(this)}></input>
                <br/>
                <button className = " btn btn-lg btn-primary btn-block">Search</button>
           </form>
      </div>
    )
  }
}
export default Search
