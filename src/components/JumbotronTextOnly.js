import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    @media(min-width: 900px) {
        display: none;
    }
`

export default class JumbotronTextOnly extends React.Component {
    render() {
        return (
            <Div>
                <p
                    style={{
                        color: 'white',
                        backgroundColor: 'rgb(56, 38, 40)',
                        fontSize: '2.5em',
                        margin: '20px',
                    }}　
                    >
                    Hi, I'm Nori.
                </p>
                <p
                    style={{
                        color: 'white',
                        backgroundColor: 'rgb(56, 38, 40)',
                        fontSize: '2.5em',
                        margin: '20px',
                    }}　
                    >
                    florist x art director
                </p>
            </Div>
        )
    }
}