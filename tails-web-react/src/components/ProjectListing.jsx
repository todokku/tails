import React from 'react'

import { space, typography, color, layout, border } from 'styled-system'
import styled from '@emotion/styled'
import ProjectCard from '../components/ProjectCard'

const Box = styled.div({
  boxSizing: 'border-box',
}, typography, space, color, layout, border)

export default class ProjectView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loadStatus: 'notLoaded'
    }
  }

  async componentWillMount() {
    const query = `{ projects { name, isSymbolicLink } }`
     try {
      const res = await fetch('/graphql', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ query })
      })
      if (res.statusText !== 'OK') return
      const json = await res.json()
      console.log(json)
      this.setState({
        projectData: json.data,
        loadStatus: 'loadSuccess'
      });
    } catch (err) {
      console.error(err)
      this.setStat({
        loadStatus: 'loadError'
      })
    }
  }

  render() {
    return ( this.state.loadStatus === 'notLoaded' ? (
        <Box>loading please wait</Box>
      ) : (this.state.loadStatus === 'loadSuccess') ? (
        <ProjectCard
          name='some crap'>
        </ProjectCard>
      ) : (
        'failed to load'
      )
    )
  }
}
