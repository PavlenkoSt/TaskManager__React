import { JSXElementConstructor } from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'
import './withTransition.scss'

const withTransition = (Component: JSXElementConstructor<{}>) => {
    return ({match}: CSSTransitionProps) => {
        return (
            <CSSTransition in={match !== null} classNames='page' timeout={300} unmountOnExit mountOnEnter >
                <Component/>
            </CSSTransition>
        )
    }
}


export default withTransition