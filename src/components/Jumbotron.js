import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Div = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-gap: 10px;
    padding-bottom: 20px;
    position: relative;
    @media(max-width: 900px) {
        display: none;
    }
`


export default class Jumbotron extends React.Component {
    render() {
        return (
            <Div>
                <Img
                    fluid={this.props.flowers}
                    alt="Beautiful flowers"
                    durationFadeIn={1000}
                    display='inherit'
                    style={{
                        gridColumn: '1 / 4',
                    }}
                />
                <p
                    style={{
                        gridColumn: '2',
                        position: 'absolute',
                        color: 'rgb(56, 38, 40)',
                        backgroundColor: 'white',
                        fontSize: '2.5em',
                        transform: 'translate(50%, 600%)',
                    }}　
                    >
                    Hi, I'm Nori.
                </p>
                <p
                    style={{
                        gridColumn: '2',
                        position: 'absolute',
                        color: 'rgb(56, 38, 40)',
                        backgroundColor: 'white',
                        fontSize: '2.5em',
                        transform: 'translate(29%, 800%)'

                    }}　
                    >
                    florist x art director
                </p>
            </Div>
        )
    }
}