import { FC, ReactNode } from 'react'
import s from './Body.module.scss'

type BodyPropsType = {
    getValidCalendar: () => ReactNode
}

const Body: FC<BodyPropsType> = ({ getValidCalendar }) => {
    return (
        <tbody className={s.tbody}>
            {getValidCalendar()}
        </tbody>
    )
}

export default Body