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


const tabs_js = require('./js/tabs.js');

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
                <div className="box_task">
                    <div className="avatar">
                </div>
                    <img src={props.task.img}/>
                </div>
                <div className="relationship">
                    <div className="person">
                        <p className="employer-and-employee">
                            <span className="person">{props.task.employer}</span>
                            &nbsp;дал задание&nbsp;
                            <span className="person">{props.task.employee}</span>
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
            date : "11.11.2021",
            description : "Отставить гейство!"
        },
            {
                img : "https://e7.pngegg.com/pngimages/33/432/png-clipart-angry-bird-bomb-illustration-angry-birds-friends-angry-birds-action-angry-birds-fight-film-angry-birds-bird-angry-birds-movie.png",
                employer: "Данила",
                employee: "Мише",
                source: "Teams",
                date : "11.11.2021",
                description : "Мини игры быстро делать!"
            },
            {
                img : "https://i.pinimg.com/originals/51/a1/b3/51a1b34e4d05f27dd269a5c10e08beda.jpg",
                employer: "Саша",
                employee: "Рафику",
                source: "Teams",
                date : "11.11.2021",
                description : "Сам носи свои кровати на второй этаж!"
            },
            {
                img : "https://e7.pngegg.com/pngimages/388/574/png-clipart-angry-birds-star-wars-angry-birds-go-angry-birds-2-angry-birds-pop-the-angry-birds-movie-chuck-angry-birds-speedy-bird-chicken-galliformes.png",
                employer: "Андрей",
                employee: "Абраму",
                source: "Telegram",
                date : "20.11.2021",
                description : "Забрать машину с ремонта!"
            },
            {
                img : "https://e7.pngegg.com/pngimages/599/41/png-clipart-angry-birds-go-angry-birds-star-wars-angry-birds-space-angry-birds-2-youtube-pink-bird-owl-bird.png",
                employer: "Анатолий",
                employee: "Никите",
                source: "Zoom",
                date : "19.12.2021",
                description : "Разработать frontend"
            },
            {
                img : "https://pm1.narvii.com/7114/d11626302bfa8acdf55fd93565ad6b3d33974d41r1-368-365v2_128.jpg",
                employer: "Алексей",
                employee: "Александру",
                source: "Teams",
                date : "13.01.2021",
                description : "Выключить компьютеры после окончания рабочего дня"
            },
            {
                img : "https://www.meme-arsenal.com/memes/754a1e43e63bde5279944a1fce2c9075.jpg",
                employer: "Анастасия",
                employee: "Михаилу",
                source: "Trello",
                date : "09.08.2021",
                description : "Разработать систему для умного дома"
            },
            {
                img : "https://www.meme-arsenal.com/memes/101142ad6b036a0d3db193eb1a5e743a.jpg",
                employer: "Афродита",
                employee: "Зевсу",
                source: "Zoom",
                date : "10.10.2021",
                description : "Сделать план местности"
            },
            {
                img : "https://www.meme-arsenal.com/memes/e82670561bc9731a04c756c6928b0664.jpg",
                employer: "Луна",
                employee: "Земле",
                source: "Teams",
                date : "17.01.2021",
                description : "Купи пару астероидов"
            },
            {
                img : "https://www.meme-arsenal.com/memes/0e16dcd1a02f5e33ed9d6e6c8732eb2a.jpg",
                employer: "Василий",
                employee: "Василисе",
                source: "Teams",
                date : "05.07.2021",
                description : "Построить дом"
            }]
    }
    render() {
        return (
            this.state.task.map(task => {
                return (
                    <Task_struct task={task} key={task.employer + Math.random()}/>
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
            <div className="box_message">
                <img src={props.message.img} alt="Avatar"></img>
            </div>
            <div className="column">
                <p className="message_person">{props.message.name}</p>
                <p className="message_text">{props.message.text}</p>
            </div>
            <div>

            </div>
            <span className="time">{props.message.time}</span>
        </div>
    )
}

class Message extends React.Component {
    state = {
        message: [{
            type : "your_message",
            img : "https://vjoy.cc/wp-content/uploads/2019/06/1-12.jpg",
            time: "11:00",
            name: "Руслан",
            text: "Привет, а кто такой Рафик?"
        },
            {
                type : "other_message",
                img: "https://wonder-day.com/wp-content/uploads/2020/10/wonder-day-among-us-png-50.png",
                time: "11:01",
                name: "Андрей",
                text: "Это наш бригадир"
            },
            {
                type : "other_message",
                img: "https://st4.depositphotos.com/1064024/20942/i/1600/depositphotos_209420380-stock-photo-digital-illustration-little-cute-unicorn.jpg",
                time: "11:01",
                name: "Иван",
                text: "Он не любит, когда отдыхают"
            },
            {
                type : "other_message",
                img: "https://pristor.ru/wp-content/uploads/2020/11/%D0%9A%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D0%B2-%D1%82%D0%B8%D0%BA-%D1%82%D0%BE%D0%BA-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-35-%D1%84%D0%BE%D1%82%D0%BE-2.jpg",
                time: "11:02",
                name: "Алена",
                text: "Будь поосторожнее с ним"
            },
            {
                type : "your_message",
                img: "https://vjoy.cc/wp-content/uploads/2019/06/1-12.jpg",
                time: "11:05",
                name: "Руслан",
                text: "Есть какие-либо способы схалявить?"
            },
            {
                type : "other_message",
                img: "https://st4.depositphotos.com/1064024/20942/i/1600/depositphotos_209420380-stock-photo-digital-illustration-little-cute-unicorn.jpg",
                time: "11:06",
                name: "Иван",
                text: "Притворись куском бревна"
            },
            {
                type : "other_message",
                img: "https://pristor.ru/wp-content/uploads/2020/11/%D0%9A%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D0%B2-%D1%82%D0%B8%D0%BA-%D1%82%D0%BE%D0%BA-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-35-%D1%84%D0%BE%D1%82%D0%BE-1.jpg",
                time: "11:07",
                name: "Никита",
                text: "Чтобы он его утилизировал!"
            },
            {
                type : "other_message",
                img: "https://pristor.ru/wp-content/uploads/2020/11/%D0%9A%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D0%B2-%D1%82%D0%B8%D0%BA-%D1%82%D0%BE%D0%BA-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-35-%D1%84%D0%BE%D1%82%D0%BE-2.jpg",
                time: "11:08",
                name: "Александр",
                text: "Есди слиться с местностью, то может и прокатить"
            },
            {
                type : "your_message",
                img: "https://vjoy.cc/wp-content/uploads/2019/06/1-12.jpg",
                time: "11:10",
                name: "Руслан",
                text: "Костюм из шрека подойдет?"
            },
            {
                type : "other_message",
                img: "https://happypik.ru/wp-content/uploads/2019/09/odinokij-volk23.jpg.webp",
                time: "11:11",
                name: "Валера",
                text: "Скорее всего костюм осла"
            },
            {
                type : "other_message",
                img: "https://3dnews.ru/assets/external/illustrations/2020/01/22/1001998/29.jpg",
                time: "11:12",
                name: "Рамзик",
                text: "Да ладно вам Рафик добрый"
            },
            {
                type : "other_message",
                img: "https://happypik.ru/wp-content/uploads/2019/09/odinokij-volk23.jpg.webp",
                time: "11:15",
                name: "Валера",
                text: "Опа, ну шо Рамзик спалися"
            },
            {
                type : "your_message",
                img: "https://vjoy.cc/wp-content/uploads/2019/06/1-12.jpg",
                time: "11:16",
                name: "Руслан",
                text: "Мы теперь знаем Рамзик, что ты подставной агент"
            },
            {
                type : "other_message",
                img: "https://st4.depositphotos.com/1064024/20942/i/1600/depositphotos_209420380-stock-photo-digital-illustration-little-cute-unicorn.jpg",
                time: "11:16",
                name: "Иван",
                text: "Удаляем его с конфы"
            },
            {
                type : "other_message",
                img: "https://happypik.ru/wp-content/uploads/2019/09/odinokij-volk23.jpg.webp",
                time: "11:16",
                name: "Валера",
                text: "Так точно и кровати ему поломаем с гардинами!"
            },
            {
                type : "your_message",
                img: "https://vjoy.cc/wp-content/uploads/2019/06/1-12.jpg",
                time: "11:17",
                name: "Валера",
                text: "Привет, а кто такой Рафик?"
            }]
    }
    render() {
        return (
            this.state.message.map(message => {
                return  (
                    <Message_struct message={message} key={message.type + Math.random()}/>
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
            title : "Поле 1",
            description: "Инфо ..."
        },
        {
            id : "Paris",
            title : "Задача 1",
            description: "Сделать ..."
        },
        {
            id : "Tokyo",
            title : "Текст...",
            description: ""
        }]
    }
    render() {
        return (
            this.state.tab.map(tab => {
                return (
                    <Tab_struct tab={tab} key={tab.id + Math.random()}/>
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
                        <button className="tablinks" onClick={(e) => tabs_js(e, 'London')}>Список полей сделки</button>
                        <button className="tablinks" onClick={(e) => tabs_js(e, 'Paris')}>Список задач</button>
                        <button className="tablinks" onClick={(e) => tabs_js(e, 'Tokyo')}>Редактор</button>
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
