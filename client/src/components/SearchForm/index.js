import React from "react";
import { Container } from "../Grid";


const SearchForm = props => {
  return (
      <Container>
      <form>
          <div className="form-group">
              <label className=""><h3>Search For Book</h3></label>
              <br></br>
              <input className="col-12 form-control"
                  value={props.search}
                  type="text"
                  name="searchBook"
                  placeholder="Enter Book's Name"
                  onChange={props.handleInputChange}
              />
          </div>
          <button type="submit" className="btn btn-info text-white" onClick={props.handleFormSubmit}>
              Submit
          </button>
      </form>
      </Container>
  )
}



export default SearchForm