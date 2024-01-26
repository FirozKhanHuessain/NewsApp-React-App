import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor(){
    super()
    this.state={
      search:""
    }
  }
  getdata(e){
    this.setState({search:e.target.value})
  }
  postdata(e){
    e.preventDefault()
    this.props.changeSearch(this.state.search)
    this.setState({search:""})
  }
  render() {
    return (
      <>
        
          <nav className="navbar navbar-expand-lg background sticky-top">
            <div className="container-fluid">
              <Link className="navbar-brand text-light" to="/">Navbar</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active text-light" aria-current="page" to="/" onClick={()=>this.props.changeSearch()}>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-light" to="/politics" onClick={()=>this.props.changeSearch()}>Politics</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-light" to="/education" onClick={()=>this.props.changeSearch()}>Education</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-light" to="/science" onClick={()=>this.props.changeSearch()}>Science</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Other
                    </Link>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/world" onClick={()=>this.props.changeSearch()}>World</Link></li>
                      <li><Link className="dropdown-item" to="/cricket" onClick={()=>this.props.changeSearch()}>Cricket</Link></li>
                      <li><Link className="dropdown-item" to="/football" onClick={()=>this.props.changeSearch()}>Football</Link></li>
                      <li><Link className="dropdown-item" to="/sports" onClick={()=>this.props.changeSearch()}>Sports</Link></li>
                      <li><Link className="dropdown-item" to="/technology" onClick={()=>this.props.changeSearch()}>Technology</Link></li>
                      <li><Link className="dropdown-item" to="/covid" onClick={()=>this.props.changeSearch()}>Covid</Link></li>
                      <li><Link className="dropdown-item" to="/jokes" onClick={()=>this.props.changeSearch()} >Jokes</Link></li>
                      <li><Link className="dropdown-item" to="/cricket" onClick={()=>this.props.changeSearch()}>Cricket</Link></li>
                      <li><Link className="dropdown-item" to="/economy" onClick={()=>this.props.changeSearch()}>Economy</Link></li>
                      <li><Link className="dropdown-item" to="health" onClick={()=>this.props.changeSearch()}>Health</Link></li>
                      <li><Link className="dropdown-item" to="/bollywood" onClick={()=>this.props.changeSearch()}>Bollywood</Link></li>
                      <li><Link className="dropdown-item" to="/fashoin" onClick={()=>this.props.changeSearch()}>Fashion</Link></li>

                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Language
                    </Link>
                    <ul className="dropdown-menu">
                      <li><button className="dropdown-item" onClick={() => this.props.changelanguage('hi')}>Hindi</button></li>
                      <li><button className="dropdown-item" onClick={() => this.props.changelanguage('en')}>English</button></li>
                    </ul>
                  </li>
                </ul>
                <form className="d-flex" role="search" onSubmit={(e)=>this.postdata(e)}>
                  <input className="form-control me-2" type="search" placeholder="Search" name="search" value={this.state.search} onChange={(e)=>this.getdata(e)} aria-label="Search" />
                  <button className="btn btn-outline-light" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
        
      </>
    )
  }
}