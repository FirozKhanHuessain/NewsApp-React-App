import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            language: "hi",
            search: ""
        }
    }
    changelanguage = (data) => {
        this.setState({ language: data })
    }
    changeSearch = (data) => {
        this.setState({ search: data })
    }
    render() {
        return (
            <>
                <BrowserRouter>
                    <Navbar changelanguage={this.changelanguage} changeSearch={this.changeSearch} />
                    <Routes>
                        <Route path="" element={<Home search={this.state.search} language={this.state.language} q="All" />} />

                        <Route path="/All" element={<Home search={this.state.search} language={this.state.language} q="All" />} />
                        <Route path="/politics" element={<Home search={this.state.search} language={this.state.language} q="Politics" />} />
                        <Route path="/education" element={<Home search={this.state.search} language={this.state.language} q="Education" />} />
                        <Route path="/science" element={<Home search={this.state.search} language={this.state.language} q="Science" />} />
                        <Route path="/world" element={<Home search={this.state.search} language={this.state.language} q="World" />} />
                        <Route path="/sports" element={<Home search={this.state.search} language={this.state.language} q="Sports" />} />
                        <Route path="/cricket" element={<Home search={this.state.search} language={this.state.language} q="Cricket" />} />
                        <Route path="/technology" element={<Home search={this.state.search} language={this.state.language} q="Technology" />} />
                        <Route path="football" element={<Home search={this.state.search} language={this.state.language} q="Football" />} />
                        <Route path="/jokes" element={<Home search={this.state.search} language={this.state.language} q="Jokes" />} />
                        <Route path="/covid" element={<Home search={this.state.search} language={this.state.language} q="Covid" />} />
                        <Route path="/economy" element={<Home search={this.state.search} language={this.state.language} q="Economy" />} />
                        <Route path="/fashion" element={<Home search={this.state.search} language={this.state.language} q="Fashion" />} />
                        <Route path="/bollywood" element={<Home search={this.state.search} language={this.state.language} q="Bollywood" />} />
                        <Route path="/health" element={<Home search={this.state.search} language={this.state.language} q="Health" />} />

                    </Routes>
                </BrowserRouter>
                <Footer />

            </>
        )
    }
}