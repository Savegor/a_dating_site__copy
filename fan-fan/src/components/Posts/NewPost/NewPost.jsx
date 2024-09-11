import { useFormik } from "formik";
import React, { useState } from "react";
import { Field, Form, Formik, FormikProps } from 'formik';
import './NewPost.css';
import close from '../../../assets/images/close.svg'
import { connect } from "react-redux";

const NewPost = (props) => {
    let [editMode, setEditMode] = useState(false);
    const today = new Date().toISOString().slice(0, 10);
    const time = new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric" });
    const miniState = {
        name: {
            'Встреча': 'Например “Поход в кино”',
            'Мероприятие': 'Например “Турнир по шахматам”',
            'Отзовись': 'Например “Отзовись женщина”'
        },
        description: {
            'Встреча': 'Хочу выпить пиво, составьте компанию',
            'Мероприятие': 'Алковечеринка',
            'Отзовись': "Отзовись, девушка с автобуса"
        },
        place: {
            'Встреча': 'Напишите место встречи',
            'Мероприятие': 'Напишите место мероприятия'
        },
        date: {
            'Встреча': 'Дата начала/дедлайна: ',
            'Мероприятие': 'Дата: ',
            'Отзовись': 'Дата актуальности объявления: '
        }
    }

    const formik = useFormik({
        initialValues: {
            picked1: 'Встреча',
            picked2: 'Чат',
            nameAnnouncement: '',
            descriptionLabel: '',
            placeLabel: '',
            maxResponseLabel: '',
            dateItemFormInput: today,
            dateTimeItemFormInput1: time,
            dateTimeItemFormInput2: "23:59",
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <>
                <div className={`row newads ${editMode ? "newadsOpened": ""}`}>
                    {/* проверка на авторизацию */}
                    {!editMode && (
                    props.auth.isAuth ?
                        <button type="button" className="btnAnnouncement d-flex justify-content-between" onClick={() => setEditMode(!editMode)}>
                            Напишите ваше объявление
                            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18C4.02353 18 0 13.9765 0 9C0 4.02353 4.02353 0 9 0C13.9765 0 18 4.02353 18 9C18 13.9765 13.9765 18 9 18ZM9 1.05882C4.60588 1.05882 1.05882 4.60588 1.05882 9C1.05882 13.3941 4.60588 16.9412 9 16.9412C13.3941 16.9412 16.9412 13.3941 16.9412 9C16.9412 4.60588 13.3941 1.05882 9 1.05882Z" fill="black" />
                                <path d="M4.23535 8.47058H13.7648V9.5294H4.23535V8.47058Z" fill="black" />
                                <path d="M8.4707 4.23529H9.52953V13.7647H8.4707V4.23529Z" fill="black" />
                            </svg>
                        </button>
                        :
                        // открытие модального окна
                        <button type="button" className="btnAnnouncement d-flex justify-content-between" data-bs-toggle="modal" data-bs-target="#ModalLogin">
                            Напишите ваше объявление
                            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18C4.02353 18 0 13.9765 0 9C0 4.02353 4.02353 0 9 0C13.9765 0 18 4.02353 18 9C18 13.9765 13.9765 18 9 18ZM9 1.05882C4.60588 1.05882 1.05882 4.60588 1.05882 9C1.05882 13.3941 4.60588 16.9412 9 16.9412C13.3941 16.9412 16.9412 13.3941 16.9412 9C16.9412 4.60588 13.3941 1.05882 9 1.05882Z" fill="black" />
                                <path d="M4.23535 8.47058H13.7648V9.5294H4.23535V8.47058Z" fill="black" />
                                <path d="M8.4707 4.23529H9.52953V13.7647H8.4707V4.23529Z" fill="black" />
                            </svg>
                        </button>
                    )
                    }
                    <form className="formPost" onSubmit={formik.handleSubmit}>
                        <div className="typeAnnouncement">
                            <div className="contentTypeAnnouncement" >
                                <label htmlFor="announcementLabel" className="fst-italic user-select-none">Тип объявления: </label>
                                <div className="announcementItem">
                                    <label className="labelFormAnnouncement user-select-none" >
                                        <input type="radio" name="picked1" value="Встреча" onChange={formik.handleChange}
                                            checked={formik.values.picked1 === "Встреча"} />
                                        Встреча
                                    </label>
                                </div>
                                <div className="announcementItem">
                                    <label className="labelFormAnnouncement user-select-none">
                                        <input type="radio" name="picked1" value="Мероприятие" onChange={formik.handleChange}
                                            checked={formik.values.picked1 === "Мероприятие"} />
                                        Мероприятие
                                    </label>
                                </div>
                                <div className="announcementItem">
                                    <label className="labelFormAnnouncement user-select-none">
                                        <input type="radio" name="picked1" value="Отзовись" onChange={formik.handleChange}
                                            checked={formik.values.picked1 === "Отзовись"} />
                                        Отзовись</label>
                                </div>
                            </div>
                            <div className="closeNewPost" onClick={() => setEditMode(!editMode)}><img src={close} alt="close" /></div>
                        </div>


                        <hr />
                        <div className="nameAnnouncement formText fst-italic">
                            <label htmlFor="nameAnnouncementLabel" className="user-select-none">Название объявления: </label>
                            <input type="text" name="nameAnnouncement" id="nameAnnouncementLabel"
                                placeholder={miniState.name[formik.values.picked1]}
                                value={formik.values.nameAnnouncement} onChange={e => formik.handleChange(e)} />
                        </div>
                        <div className="description formText fst-italic">
                            <label htmlFor="descriptionLabel" className="user-select-none">Описание: </label>
                            <textarea name="descriptionLabel" id="descriptionLabel" cols="" rows="" maxLength="200"
                                placeholder={miniState.description[formik.values.picked1]}
                                value={formik.values.descriptionLabel} onChange={e => formik.handleChange(e)} ></textarea>
                        </div>
                        <hr />
                        {formik.values.picked1 === "Отзовись" ? null :
                            <div className="placeItemForm formText fst-italic">
                                <label htmlFor="placeLabel" className="user-select-none">Место встречи: </label>
                                <input type="text" name="placeLabel" id="placeLabel"
                                    placeholder={miniState.place[formik.values.picked1]}
                                    value={formik.values.placeLabel} onChange={e => formik.handleChange(e)} />
                            </div>
                        }


                        <div className="dateItemForm fst-italic">
                            <label htmlFor="dateLabel" className="user-select-none">
                                {miniState.date[formik.values.picked1]}
                            </label>
                            <input type="date" className="dateItemFormInput" id="dateLabel" aria-required="true"
                                value={formik.values.dateItemFormInput} onChange={e => formik.handleChange(e)} name="dateItemFormInput"
                                aria-invalid="false" placeholder="" />
                            <div className="dateTimeStartEnd">
                                <div className="relative">
                                    <input type="time" id="start-time" className=" user-select-none " min="00:00" max="23:59"
                                        value={formik.values.dateTimeItemFormInput1} onChange={e => formik.handleChange(e)} name="dateTimeItemFormInput1" required />
                                </div>
                                {formik.values.picked1 === "Отзовись" ? null : <>
                                    <div className="tireDateTimeStartEnd user-select-none">-</div>
                                    <div className="relative">
                                        <input type="time" id="end-time" className="user-select-none" min="00:00" max="23:59"
                                            value={formik.values.dateTimeItemFormInput2} onChange={e => formik.handleChange(e)} name="dateTimeItemFormInput2" required />
                                    </div>
                                </>
                                }
                            </div>
                            <label className="warningDateItemForm user-select-none">* После данного срока объявление будет удалено!</label>
                        </div>


                        <hr />
                        <div className="typeResponse">
                            <label htmlFor="responseLabel" className="fst-italic user-select-none">Тип отклика: </label>
                            <div className="responseItem">
                                <label className="labelFormAnnouncement user-select-none">
                                    <input type="radio" name="picked2" value="Чат" onChange={formik.handleChange}
                                        checked={formik.values.picked2 === "Чат"} />
                                    Чат
                                </label>
                            </div>
                            <div className="responseItem">
                                <label className="labelFormAnnouncement user-select-none">
                                    <input type="radio" name="picked2" value="Список чатов" onChange={formik.handleChange}
                                        checked={formik.values.picked2 === "Список чатов"} />
                                    Список откликов
                                </label>
                            </div>
                        </div>
                        <hr />


                        <div className="maxResponse">
                            <label htmlFor="maxResponseLabel" className="fst-italic user-select-none">
                                Максимальное количество откликов:&nbsp;
                                <input type="number" step="1" min="1" max="100" name="maxResponseLabel"
                                    id="maxResponseLabel" placeholder="10" value={formik.values.maxResponseLabel < 0 ?
                                        alert("Количество участников не может быть отрицательным") :
                                        formik.values.maxResponseLabel > 500 ? alert("Количество участников не может превышать 500") :
                                            formik.values.maxResponseLabel
                                    } onChange={e => formik.handleChange(e)} />
                                &nbsp;пользователей
                            </label>
                        </div>
                        <input className="btnPost" type="submit" value={"Опубликовать"} onClick={() => setEditMode(!editMode)} />
                    </form>
                </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(NewPost)