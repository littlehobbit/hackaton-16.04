import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './css/Task.css';
import './css/Style.css';
import './css/Chat.css';
import './css/Tabs.css';

import micro from "./icons/microphone-solid.svg"
import send from "./icons/paper-plane-solid.svg"


function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}



//Task----------------------------------------------------------------------------------------------------------------------------------------------------------------
function Task_struct(props) {
    return (
        <div className="task">
            <div className="task-header">
                <div className="avatar">
                    <img src={props.task.img}/>
                </div>
                <div className="relationship">
                    <div className="person">
                        <p className="employer-and-employee">
                            <span className="person">{props.task.employer + " "}</span>
                            дал задание
                            <span className="person">{" " + props.task.employee}</span>
                        </p>
                        <p className="resource">
                            {props.task.source}
                        </p>
                        <p className="date">
                            {props.task.date}
                        </p>
                    </div>
                </div>
            </div>
            <div className="task-body">
                <p className="task-description">
                    {props.task.description}
                </p>
            </div>
        </div>
    )
}

class Task extends React.Component {
    state = {
        task: [{
            img : "http://www.youloveit.ru/uploads/posts/2019-08/1565284946_red4.jpg",
            employer: "Борисов",
            employee: "Взводу",
            source: "Teams",
            date : "11.11.1111",
            description : "Отставить гейство!"
        },
            {
                img : "https://static.wikia.nocookie.net/heroes-and-villians/images/e/ec/Flocker_Black_Portrait_001.png/revision/latest?cb=20180811230458",
                employer: "Данила",
                employee: "Мише",
                source: "Teams",
                date : "11.11.1111",
                description : "Мини игры быстро делать!"
            },
            {
                img : "https://i.pinimg.com/originals/51/a1/b3/51a1b34e4d05f27dd269a5c10e08beda.jpg",
                employer: "Саша",
                employee: "Рафику",
                source: "Teams",
                date : "11.11.1111",
                description : "Сам носи свои кровати на второй этаж!"
            },
            {
                img : "https://static.wikia.nocookie.net/heroes-and-villians/images/e/ec/Flocker_Black_Portrait_001.png/revision/latest?cb=20180811230458",
                employer: "Данила",
                employee: "Мише",
                source: "Teams",
                date : "11.11.1111",
                description : "Мини игры быстро делать!"
            },
            {
                img : "https://static.wikia.nocookie.net/heroes-and-villians/images/e/ec/Flocker_Black_Portrait_001.png/revision/latest?cb=20180811230458",
                employer: "Данила",
                employee: "Мише",
                source: "Teams",
                date : "11.11.1111",
                description : "Мини игры быстро делать!"
            },
            {
                img : "https://static.wikia.nocookie.net/heroes-and-villians/images/e/ec/Flocker_Black_Portrait_001.png/revision/latest?cb=20180811230458",
                employer: "Данила",
                employee: "Мише",
                source: "Teams",
                date : "11.11.1111",
                description : "Мини игры быстро делать!"
            },
            {
                img : "https://static.wikia.nocookie.net/heroes-and-villians/images/e/ec/Flocker_Black_Portrait_001.png/revision/latest?cb=20180811230458",
                employer: "Данила",
                employee: "Мише",
                source: "Teams",
                date : "11.11.1111",
                description : "Мини игры быстро делать!"
            },
            {
                img : "https://static.wikia.nocookie.net/heroes-and-villians/images/e/ec/Flocker_Black_Portrait_001.png/revision/latest?cb=20180811230458",
                employer: "Данила",
                employee: "Мише",
                source: "Teams",
                date : "11.11.1111",
                description : "Мини игры быстро делать!"
            },
            {
                img : "https://i.pinimg.com/originals/51/a1/b3/51a1b34e4d05f27dd269a5c10e08beda.jpg",
                employer: "Саша",
                employee: "Рафику",
                source: "Teams",
                date : "11.11.1111",
                description : "Сам носи свои кровати на второй этаж!"
            },
            {
                img : "https://i.pinimg.com/originals/51/a1/b3/51a1b34e4d05f27dd269a5c10e08beda.jpg",
                employer: "Саша",
                employee: "Рафику",
                source: "Teams",
                date : "11.11.1111",
                description : "Сам носи свои кровати на второй этаж!"
            }]
    }
    render() {
        return (
            this.state.task.map(task => {
                return (
                    <Task_struct task={task}/>
                )
            })
        )
    }
}
//Task----------------------------------------------------------------------------------------------------------------------------------------------------------------


//Message----------------------------------------------------------------------------------------------------------------------------------------------------------------
function Message_struct(props) {
    return (
        <div className={props.message.type + " chat"}>
            <img src={props.message.img} alt="Avatar"></img>
            <div className="column">
                <p>{props.message.name}</p>
                <p>{props.message.text}</p>
            </div>
            <span className="time">{props.message.time}</span>
        </div>
    )
}

class Message extends React.Component {
    state = {
        message: [{
            type : "your_message",
            img : "https://static.wikia.nocookie.net/heroes-and-villians/images/e/ec/Flocker_Black_Portrait_001.png/revision/latest?cb=20180811230458",
            time: "11:00",
            name: "Руслан",
            text: "Привет, а кто такой Рафик?"
        },
            {
                type : "other_message",
                img: "https://3dnews.ru/assets/external/illustrations/2020/01/22/1001998/29.jpg",
                time: "11:00",
                name: "Руслан",
                text: "Привет, а кто такой Рафик?"
            },
            {
                type : "other_message",
                img: "https://3dnews.ru/assets/external/illustrations/2020/01/22/1001998/29.jpg",
                time: "11:00",
                name: "Руслан",
                text: "Привет, а кто такой Рафик?"
            },
            {
                type : "other_message",
                img: "https://3dnews.ru/assets/external/illustrations/2020/01/22/1001998/29.jpg",
                time: "11:00",
                name: "Руслан",
                text: "Привет, а кто такой Рафик?"
            },
            {
                type : "your_message",
                img: "https://3dnews.ru/assets/external/illustrations/2020/01/22/1001998/29.jpg",
                time: "11:00",
                name: "Руслан",
                text: "Привет, а кто такой Рафик?"
            },
            {
                type : "other_message",
                img: "https://3dnews.ru/assets/external/illustrations/2020/01/22/1001998/29.jpg",
                time: "11:00",
                name: "Руслан",
                text: "Привет, а кто такой Рафик?"
            },
            {
                type : "other_message",
                img: "https://3dnews.ru/assets/external/illustrations/2020/01/22/1001998/29.jpg",
                time: "11:00",
                name: "Руслан",
                text: "Привет, а кто такой Рафик?"
            },
            {
                type : "other_message",
                img: "https://3dnews.ru/assets/external/illustrations/2020/01/22/1001998/29.jpg",
                time: "11:00",
                name: "Руслан",
                text: "Привет, а кто такой Рафик?"
            },
            {
                type : "your_message",
                img: "https://3dnews.ru/assets/external/illustrations/2020/01/22/1001998/29.jpg",
                time: "11:00",
                name: "Руслан",
                text: "Привет, а кто такой Рафик?"
            },
            {
                type : "other_message",
                img: "https://3dnews.ru/assets/external/illustrations/2020/01/22/1001998/29.jpg",
                time: "11:00",
                name: "Руслан",
                text: "Привет, а кто такой Рафик?"
            },
            {
                type : "other_message",
                img: "https://3dnews.ru/assets/external/illustrations/2020/01/22/1001998/29.jpg",
                time: "11:00",
                name: "Руслан",
                text: "Привет, а кто такой Рафик?"
            },
            {
                type : "other_message",
                img: "https://3dnews.ru/assets/external/illustrations/2020/01/22/1001998/29.jpg",
                time: "11:00",
                name: "Руслан",
                text: "Привет, а кто такой Рафик?"
            },
            {
                type : "your_message",
                img: "https://3dnews.ru/assets/external/illustrations/2020/01/22/1001998/29.jpg",
                time: "11:00",
                name: "Руслан",
                text: "Привет, а кто такой Рафик?"
            }]
    }
    render() {
        return (
            this.state.message.map(message => {
                return (
                    <Message_struct message={message}/>
                )
            })
        )
    }
}
//Message----------------------------------------------------------------------------------------------------------------------------------------------------------------

//Tabs----------------------------------------------------------------------------------------------------------------------------------------------------------------
function Tab_struct(props) {
    return (
        <div id={props.tab.id} className="tabcontent">
            <h3>{props.tab.title}</h3>
            <p>{props.tab.description}</p>
        </div>
    )
}

class Tab extends React.Component {
    state = {
        tab: [{
            id : "London",
            title : "London",
            description: "London"
        },
        {
            id : "Paris",
            title : "Paris",
            description: "Paris"
        },
        {
            id : "Tokyo",
            title : "Tokyo",
            description: "Tokyo"
        }]
    }
    render() {
        return (
            this.state.tab.map(tab => {
                return (
                    <Tab_struct tab={tab}/>
                )
            })
        )
    }
}


//Message----------------------------------------------------------------------------------------------------------------------------------------------------------------



class MyApp extends React.Component {
    render() {
        return (
            <div className="app">
                <div className="col" id="col1">
                    <Task/>
                </div>
                <div className="col" id="col2">
                    <div className="dialog_window">
                        <Message/>
                    </div>

                    <div className="input_window">
                        <form className="input_form" action="">
                            <textarea className="input-text" maxLength="350"></textarea>
                        </form>
                        <div className="buttons_chat">
                            <button className="btn_micro">
                                <img src={micro} />
                            </button>
                            <button className="btn_send">
                                <img src={send} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col" id="col3">
                    <div className="tab">
                        <button className="tablinks" onClick={(e) => openCity(e, 'London')}>London</button>
                        <button className="tablinks" onClick={(e) => openCity(e, 'Paris')}>Paris</button>
                        <button className="tablinks" onClick={(e) => openCity(e, 'Tokyo')}>Tokyo</button>
                    </div>
                    <Tab/>
                </div>
            </div>
        )
    }
}


ReactDOM.render(<MyApp/> , document.getElementById('root'));
document.getElementsByClassName("tabcontent")[0].style.display = "block";
document.getElementsByClassName("tablinks")[0].className += " active";
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
