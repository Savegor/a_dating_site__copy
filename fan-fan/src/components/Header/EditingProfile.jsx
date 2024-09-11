import React, { useEffect, useRef } from 'react';
import styles from "./EditingProfile.module.css"
import { Formik, useFormik } from 'formik';
import { useState } from 'react';
import editPen from '../../assets/images/editPen.png'
import { connect } from 'react-redux';
import { interestsAPI } from '../../api/api';
import { register } from '../../redux/auth-reducer';
    // const stateInterest = [
    //     '⚽Футбол',
    //     '🏀Баскетбол',
    //     '🤿Дайвинг',
    //     '🖼️Живопись',
    //     '🌱Растения',
    //     '♟️Шахматы',
    //     '🍿 Кино',
    //     '🧠 Квизы',
    //     '📚 Чтение книг',
    //     '🧳 Путешествия',
    //     '👨‍💻 Программирование',
    //     ' 🎣 Рыбалка',
    //     '🎳 Боулинг',
    //     '💚 ЗОЖ',
    //     '🎧 Музыка',
    //     '🎤 Пение',
    //     '💃 Танцы',
    //     '👟 Бег',
    //     '🌎 Волонтёрство',
    //     '🎮 Компьтерные игры',
    //     '🎱 Бильярд',
    // ]
const EditingProfile = (props) => {
    let formikRegis = useFormik({
        initialValues: {
            data: {},
            describe: "",
            clickInterest: [],
            interests: [] // Пока в бэк пойдет этот пустой масиив
        },
        onSubmit: (values) => {

            values.data = {
                ...props.regUserData,
                desc : values.describe
            }

            let interestsFinal = []
            interests.map( (interest, index) => {
                if (values.clickInterest[index] == true){
                    interestsFinal.push(interest.id)
                }
            } )
            let data = {
                ...values,
                interests : interestsFinal
            }

            //thunk регистрации
            props.register(data)
        },
    });

    let formikEdit = useFormik({
        initialValues: {
            name: "",
            login: "",
            password: "",
            email: "",
            describe: "",
            sex: 0,
            clickInterest: [],
            interests: [] // Пока в бэк пойдет этот пустой масиив
        },
        onSubmit: (values) => {
            //thunk регистрации
            // let interests = []
            // values.clickInterest.map((v,i) => v == true ? interests.push(i) : null);
            // let data = {
            //     ...values,
            //     interests
            // }
            // values.data = props.regUserData
            // props.register(values)
        },
    });

    let [interests, setInterests] = useState([]);
    
    // ref => FORWARD REF !!!!!!!
    // const WrappedComponent = React.forwardRef((props, ref) => {
    //     return <LogProps {...props} forwardedRef={ref} />;
    // });
    function Click(e) {
        formikRegis.values.clickInterest[e.target.id] = !formikRegis.values.clickInterest[e.target.id]
        e.target.className = formikRegis.values.clickInterest[e.target.id] ? (styles.btnInterest + " " + styles.active) : styles.btnInterest
    }

    const itemsRef = useRef([])
    const itemsRef2 = useRef([])
    const resetStyles1 = () => {
        for (let i = 0; i < formikRegis.values.clickInterest.length; i++) {
            itemsRef.current[i].className = styles.btnInterest
            formikRegis.values.clickInterest[i] = false
        }
    }
    const resetStyles2 = () => {
        for (let i = 0; i < formikRegis.values.clickInterest.length; i++) {
            itemsRef2.current[i].className = styles.btnInterest
            formikRegis.values.clickInterest[i] = false
        }

    }

    useEffect(() => {
        itemsRef.current = itemsRef.current.slice(0, 21);
        itemsRef2.current = itemsRef2.current.slice(0, 21);

        interestsAPI.getAllInterests()
        .then(response => {
            setInterests(response.data);
            formikRegis.clickInterest = Array(response.data.length).fill(false);
        });

    }, [])


    return (
        <>
            {/* Регистрация второй этап */}
            <div className={`modal fade ${styles.modal2}`} id="ModalRegistr2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="ModalRegistrLabel" aria-hidden="true">
                <div className={`modal-dialog modal-xl modal-dialog-centered ${styles.modalDialog2}`}>
                    <div className={`modal-content ${styles.modalContent}`}>
                        <div className={`modal-back-close d-flex justify-content-between ${styles.modalBackClose}`}>
                            <button type="button" className={`btnBack btn-close ${styles.btnBack}`} data-bs-toggle="modal" data-bs-target="#ModalRegistr" aria-label="Back"
                                onClick={resetStyles1}></button>
                            <button type="button" className={`btn-close ${styles.btnClose}`} data-bs-dismiss="modal" aria-label="Close"
                                onClick={resetStyles1}></button>
                        </div>
                        <form onSubmit={formikRegis.handleSubmit}>
                            <div className={`modal-body ${styles.modalBody}`}>
                                    <div className={`row`}>
                                        <div className="col">
                                            <div className={`row ${styles.mainContentBox}`}>
                                                <div className={`col-12 col-md-6 col-lg-3 image ${styles.profileImgBox}`}>
                                                    <img src={props.stateProfile.imgProfile} className={styles.progileImg} alt="no image" />
                                                </div>
                                                <div className="col info">
                                                    <p className='fs-4'><b>{props.regUserData.name}</b></p>
                                                    {/*<p className='text-muted mb-0'>Ник в Telegram: {props.regUserData.tgname}</p>*/}
                                                    <p className='text-muted mb-0'>Логин: {props.regUserData.login}</p>
                                                    {/* <p className='text-muted'>Почта: {props.regUserData.email}</p> */}
                                                    <div className={`fst-italic ${styles.descripstion}`}>
                                                        <div className={`${styles.boxTextarea}`}>
                                                            <textarea name="describe" className={styles.TextareaAutosize}
                                                                placeholder="Напишите немного о себе"
                                                                value={formikRegis.values.describe} onChange={formikRegis.handleChange} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className={styles.textInterest}>Выберите свои увлечения, чтобы найти группы по интересам</p>
                                                <div className={styles.interests}>
                                                    {interests.map((interest, index) => <>
                                                        <button id={index} type='button' className={styles.btnInterest} ref={el => itemsRef.current[index] = el}
                                                            onClick={Click}
                                                        >{interest.name}</button>
                                                    </>)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                            </div>
                            <div className={`modal-footer border-0 pt-0 pb-3 ${styles.modalFooter}`}>
                                <button type="submit" className={`btn ${styles.btnsub}`} data-bs-dismiss="modal">Зарегистрироваться</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            {/* EDIT */}
            <div className={`modal fade ${styles.modal2}`} id="ModalRegistr3" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="ModalRegistrLabel" aria-hidden="true">
                <div className={`modal-dialog modal-lg modal-dialog-centered ${styles.modalDialog2}`}>
                    <div className={`modal-content ${styles.modalContent}`}>
                        <div className={`modal-back-close d-flex justify-content-between ${styles.modalBackClose}`}>
                            <div></div>
                            <button type="button" className={`btn-close ${styles.btnClose}`} data-bs-dismiss="modal" aria-label="Close"
                                onClick={resetStyles2}></button>
                        </div>
                        <div className={`modal-body ${styles.modalBody}`}>
                            <form>
                                <div className={`row`}>
                                    <div className="col">
                                        <div className={`row ${styles.mainContentBox}`}>
                                            <div className={`col-3 image d-flex ${styles.profileImgBox}`}>
                                                <img src={props.stateProfile.imgProfile} className={styles.progileImg} alt="no image" />
                                            </div>
                                            <div className="col info">
                                                <p>{props.stateProfile.name} <button type='button' className={styles.editBtn}><img src={editPen} alt="editPen" /></button></p>
                                                <p>Ник в Telegram: {props.stateProfile.tg} <button type='button' className={styles.editBtn}><img src={editPen} alt="editPen" /></button></p>
                                                <div className={`fst-italic ${styles.descripstion}`}>
                                                    <label className="user-select-none">Напишите описание о себе</label>
                                                    <div className={`${styles.boxTextarea}`}>
                                                        <textarea name="describe" className={styles.TextareaAutosize}
                                                            placeholder="Enter your text here!"
                                                            value={formikEdit.values.describe} onChange={formikEdit.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <p className={styles.textInterest}>Выберите свои увлечения, чтобы найти группы по интересам</p>
                                            <div className={styles.interests}>
                                                {interests.map((interest, index) => <>
                                                    <button id={index} type='button' className={styles.btnInterest} ref={el => itemsRef2.current[index] = el}
                                                        onClick={Click}
                                                    >{interest.name}</button>
                                                </>)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className={`modal-footer border-0 pt-0 pb-3 ${styles.modalFooter}`}>
                            <button type="submit" className={`btn ${styles.btnsub}`} data-bs-dismiss="modal">Сохранить изменения</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default connect(null, {register})(EditingProfile);
