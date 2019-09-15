
import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Div = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(7, 1fr);
    height: 100vh;
    grid-gap: 10px;
    padding-bottom: 20px;
    position: relative;
`


export default class Jumbotron extends React.Component {
    render() {
        return (
            <Div>
                <Img
                    fluid={this.props.flowers}
                    alt="Beautiful flowers"
                    durationFadeIn={1000}
                    style={{
                        gridColumn: '1 / 8',
                        gridRow: '1 / 8'
                    }}
                />
                <p
                    style={{
                        gridColumn: '3 / 7',
                        gridRow: '4',
                        position: 'absolute',
                        color: 'rgb(56, 38, 40)',
                        backgroundColor: 'white',
                        fontSize: '2.5em',
                        maxWidth: '100vw'
                    }}　
                    >
                    Hi, I'm Nori.
                </p>
                <p
                    style={{
                        gridColumn: '3 / 7',
                        gridRow: '5',
                        position: 'absolute',
                        color: 'rgb(56, 38, 40)',
                        backgroundColor: 'white',
                        fontSize: '2.5em',
                    }}　
                    >
                    florist x art director
                </p>
            </Div>
        )
    }
}