import React from 'react'

import styled from 'styled-components'

const Grid = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 2fr 1fr;
`

const LeftSide = styled.section`
    grid-column: 1;
`

const RightSide = styled.section`
    grid-column: 2;
`


class BasketPageContainer extends React.Component {
   render() {
       return(
        <React.Fragment>
            <h1>This is the container</h1>
            <Grid>
                <LeftSide>
                    <h2>Left side</h2>
                </LeftSide>
                <RightSide>
                    <h2>Right side</h2>
                </RightSide>
            </Grid>
        </React.Fragment>
       )
   }
}

export default BasketPageContainer