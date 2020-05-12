import React from 'react';
import './hero.css';
import './App.css';


class Stem extends React.Component {
  state = {
    loading: true,
    error: false,
    fetchedData: [],
  }

  componentDidMount() {
  /*  this.setState({
      fetchedData: "",
      loading: false,
      status : "Loading",
    }) */
    fetch("/api/GetJamStem")
    .then(response => {
      try {
        const nonJsonFunction = false;
        if (nonJsonFunction) {
          console.log("noJson");
          var result = response.text();
          return JSON.parse(result);
        } else {
          console.log("TipoJson");
          return response.json();
        }
      } catch (e) {
          console.error(e);
          return {
            results: [
              {
                name: "Science",
                description: "Learn the fundamentals for what makes the world spin",
                url: "https://en.wikipedia.org/wiki/Science",
                image: "https://dgdemoassets.blob.core.windows.net/demoimages/science.jpg?sp=rl&st=2020-04-28T07:08:43Z&se=2021-04-29T07:08:00Z&sv=2019-10-10&sr=b&sig=6WrtgoRgLyPfbVvyXqTkTRoF4oWkp1fVNlijvl%2BdxFs%3D"
              },
              {
                name: "Technology",
                description: "Go learn how to make the wildest inventions reality",
                url: "https://en.wikipedia.org/wiki/Technology",
                image: "https://dgdemoassets.blob.core.windows.net/demoimages/code.jpg?sp=rl&st=2020-04-28T06:34:10Z&se=2021-04-28T06:34:00Z&sv=2019-10-10&sr=b&sig=ztWCK8NA1qI2%2BnaiVV4NeyCa6x2osumJR6MrBNV%2Bz0Y%3D"
              },
              {
                name: "Engineering",
                description: "Do it once, do it reliable, build the next generation unified virtual reality",
                url: "https://en.wikipedia.org/wiki/Engineering",
                image: "https://dgdemoassets.blob.core.windows.net/demoimages/engineering.jpg?sp=rl&st=2020-04-28T07:06:11Z&se=2021-04-29T07:06:00Z&sv=2019-10-10&sr=b&sig=3ml4rzUBjhAc95v1mVdqCUjHrdQDnrWGFqIhh6BYAYE%3D"
              },
              {
                name: "Math [local]",
                description: "Learn how to love the numbers that power the world.",
                url: "https://en.wikipedia.org/wiki/Mathematics",
                image: "https://dgdemoassets.blob.core.windows.net/demoimages/math.jpg?sp=rl&st=2020-04-28T07:07:23Z&se=2021-04-29T07:07:00Z&sv=2019-10-10&sr=b&sig=Ak4CNN3ayp1KEtUrgRxmooWqOe1vTrXlml4qGEf2m58%3D"
              }
            ]
          };

        }
      }
      ).then(json => {
        this.setState({
          fetchedData: json.results,
          loading: false,
        })
      })
  }

  render() {
    const { loading, fetchedData } = this.state
    return (
      <div className="">
        <header className="">
          {/* <h1>STEM Learning</h1> */}
          {loading ? (
            <p>Searching for STEM resources for education ..... </p>
          ) :
            (
              <div class="columns features is-flex">
              { fetchedData.map(learningActivity => (
                
                  <div class="column is-3 is-flex">
                    <div class="card is-shady">
                      <div class="card-image">
                        <figure class="image is-4by3">
                          <img src={learningActivity.image} alt="" />
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="content">
                          <h2><a className="App-link" href={learningActivity.url}>{learningActivity.name}</a></h2>
                          <h3>{learningActivity.description}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
              )
              )
              }
              </div>
            )
          }
        </header>
      </div>
    )
  }
}

export default Stem
