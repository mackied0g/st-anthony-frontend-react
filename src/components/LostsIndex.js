import React from 'react'
import LostsCollection from './LostsCollection'
import LostForm from './LostForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class LostsIndex extends React.Component {
  state = {
    lostCollection: [],
    searchTerm: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/losts')
      .then(res => res.json())
      .then(lostsCollection => this.setState({ lostsCollection: lostsCollection }))
      .catch(e => console.error(e))
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ searchTerm: value })
  }

  toggleImage = losts => {
    const col = this.state.lostsCollection
    const i = col.indexOf(losts)
    this.setState({
      lostsCollection: [
        ...col.slice(0, i),
        // initially pokemon.isClicked is undefined; inverting that falsey value makes it true
        { ...losts, isClicked: !losts.isClicked },
        ...col.slice(i + 1)
      ]
    })
  }

  addLosts = losts => {
    this.setState({ lostsCollection: [...this.state.lostsCollection, losts] })
  }

  render() {
    const desiredLost = this.state.lostsCollection.filter(l =>
      l.name.includes(this.state.searchTerm)
    )
    return (
      <div>
        <h1>Lost Item Searcher</h1>
        <br />
        <LostsForm addLosts={this.addLosts} />
        <br />
        <Search onSearchChange={_.debounce(this.handleSearchChange, 500)} showNoResults={false} />
        <br />
        <LostsCollection losts={desiredLost} toggleImage={this.toggleImage} />
      </div>
    )
  }
}

export default LostsIndex