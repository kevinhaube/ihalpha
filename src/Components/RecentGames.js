import React, { useContext, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import lol from '../img/lol-logo.png'
import RadialChart from './Subcomponents/RadialChart.js'
import MatchCard from './Subcomponents/MatchCard'
import { DummyContext } from '../Context/DummyState.js'

const useStyles = makeStyles(theme => ({
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '0 8px',
        scrollbarWidth: 'none',

        '&::-webkit-scrollbar': {
            display: 'none',
        },

        [theme.breakpoints.down('sm')]: {
            overflowX: 'scroll',
            margin: '8px'
        }
    },
    logoContainer: {
        margin: '8px 16px',
        maxWidth: '200px',
        maxHeight: '200px',
        height: 'auto',
        display: 'flex',

        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    logo: {
        maxWidth: '100%',
        height: 'auto',
        display: 'block'
    },
    radialContainer: {
        width: 'auto',
        
        [theme.breakpoints.down('sm')]: {
            // width: '33vw'
        }
    },
    matchesContainer: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: 'auto',
        margin: '2px 0px 2px 16px',
        scrollbarWidth: 'none',

        '&::-webkit-scrollbar': {
            display: 'none'
        },

        [theme.breakpoints.up('md')]: {
            overflowX: 'scroll'
        },

        [theme.breakpoints.down('sm')]: {
            margin: 0
        }
    }
}))

function RecentGames() {

    let classes = useStyles()
    let { matchHistory } = useContext(DummyContext)

    let matches = matchHistory.map(game =>
        <MatchCard 
            win={game.win} 
            champ={game.champ} 
            k={game.k} d={game.d} a={game.a} 
        />
    );

    return (
        <div className={classes.container}>
            <div className={classes.logoContainer}>
                <img className={classes.logo} src={lol} />
            </div>
            <div className={classes.radialContainer}>
                <RadialChart
                    size='140'
                    progress={43}
                />
            </div>
            <div className={classes.matchesContainer}>
                {matches}
            </div>
        </div>
    )
}

export default RecentGames
