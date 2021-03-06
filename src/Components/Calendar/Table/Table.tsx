import BodyContainer from "./Body/BodyContainer"
import Head from "./Head/Head"
import s from './Table.module.scss'

const Table = () => {

    return (
        <table className={s.table}>
            <Head />
            <BodyContainer />
        </table>
    )
}

export default Table