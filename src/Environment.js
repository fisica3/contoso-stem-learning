import React from 'react';
import './App.css';
import './hero.css';

class Environment extends React.Component {
  state = {
    loading: true,
    error: false,
    fetchedData: "",
    status : "Initializing",
  }

  componentDidMount() {
    this.setState({
      fetchedData: "",
      loading: false,
      status : "Loading",
    })
    fetch("/api/GetEnvironmentVariable?name=ENV")
      .then(response => {
        try {
            let respuesta = response.text();
            //console.debug(response);
            console.log(respuesta);
            return respuesta; //response.text();
           
          } catch (e) {
            console.error(e);
            return "Development placeholder"
          };
        }
      ).then(result => {
        if (result.includes("!DOCTYPE html")) { // doctype html - the URL is not served by the function but instead is served by a static HTML page
          result = "Development environment variable";
        } 
        this.setState({
          fetchedData: result,
          loading: false,
          status : "Loaded",
        });
      })
  }

  render() {
    const {status, loading, fetchedData } = this.state
    const result = loading ? (
      <p>{status}....</p>
      ) :
      (
        <div className="App">
          <div class="intro column is-8 is-offset-2">
                    <h2 class="title">Env Value:</h2><br/>
                    <p class="subtitle">{fetchedData}</p>
          </div>
        </div>
      );
    return result;
  }
}

export default Environment;
