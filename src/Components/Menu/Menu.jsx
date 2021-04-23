import './Menu.css'
import s from './Menu.module.css'
import React from "react"
import { toast } from 'react-toastify'
import { changeActiveDateToCurrentDate, changeActiveMonthAndYear } from '../../Redux/calendarReducer'
import { connect } from 'react-redux'
import { elastic as Nav } from 'react-burger-menu'
import { NavLink } from 'react-router-dom'
import Search from './Search/Search'


class Menu extends React.Component{

    constructor (props) {
        super(props)
        this.state = {
          menuOpen: false
        }
    }

    componentDidMount(){
      toast.configure()
    }

    handleStateChange = (state) => {
      this.setState({menuOpen: state.isOpen})  
    }
      
    closeMenu = () => {
      this.setState({menuOpen: false})
    }

    getCurrentDate = () => {
      this.props.changeActiveDateToCurrentDate()
      this.closeMenu()
    }

    onSubmit = (formData) => {
      if(formData.year){
        this.props.changeActiveMonthAndYear(+formData.year, +formData.month)
        this.closeMenu()
      }else{
        this.getToast('Ошибка! Введите год!', false)
      }
    }

    getToast = (text, success) => {
      const options = { autoClose: 3000 }
      success ? toast.success(text, options) : toast.error(text, options)
    }

    onStateChange = (state) => this.handleStateChange(state)

    getLinkAdressForTodayTasks = () => {
        const date = new Date()
        return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`
    }

    render(){
      return (
        <div>
          <Nav 
            isOpen={this.state.menuOpen}
            onStateChange={this.handleStateChange}
            customBurgerIcon={<img src='./menu.svg' alt='Menu'/>}
            outerContainer={this.props.outerContainer}
            pageWrapId={this.props.pageWrapId}
          >
            <button className={s.btn} onClick={this.getCurrentDate}>К текущему месяцу</button>
            <NavLink className={s.btn} onClick={() => this.closeMenu()} to={`/day/${this.getLinkAdressForTodayTasks()}`}>Задачи на сегодня</NavLink>
            <NavLink className={s.btn} onClick={() => this.closeMenu()} to='/taskList'>Список всех задач</NavLink>
            <Search months={this.props.months} activeDate={this.props.activeDate} onSubmit={this.onSubmit}/>
          </Nav>
        </div>
      )
    }
}

const mapStateToProps = state => ({
    activeDate: state.calendar.activeDate,
    currentDate: state.calendar.currentDate
})

export default connect(mapStateToProps, { changeActiveDateToCurrentDate, changeActiveMonthAndYear })(Menu)