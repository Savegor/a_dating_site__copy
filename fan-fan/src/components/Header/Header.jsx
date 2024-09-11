import { useFormik } from "formik";
import Logo from "../common/Logo";
import styles from './Header.module.css'
import React, { useEffect } from "react";
import Interests from "../Interests/Interests";
import { connect } from "react-redux";
import { login, Auth, register, unAuth } from "../../redux/auth-reducer";
import EditingProfile from "./EditingProfile";
import { myProfile } from "../../redux/profile-reducer";
import { NavLink } from "react-router-dom";
import * as Yup from 'yup'; //Валидация 

const Header = (props) => {
    const formikLogin = useFormik({
        initialValues: {
            name: "",
            password: "",
        },
        onSubmit: (values) => {
            props.login(values)
        },
    });
    const formikRegis = useFormik({
        initialValues: {
            name: "",
            login: "",
            password: "",
            email: "",
            sex: 0,
            interests: []
        },
        onSubmit: (values) => {
            // props.register(values)
        },
    });

    // useEffect(() => {
    //     if (props.userId === null) {

    //     } else {
    //         props.myProfile(props.userId)
    //     }
    // }, [])

    return (
        <>
            <nav className={`container-fluid ${styles.header} mb-3`}>
                <div className="container">
                    <div className={`row py-1`}>
                        <div className="col-0 col-md-2"></div>
                        <div className="col text-center">
                            <Logo />
                        </div>
                        <div className={`col-5 col-lg-3 wd-25 ${styles.as}`}>
                            <div className={`row ${styles.auth}`}>
                                {props.isAuth ?
                                    <>
                                        <div className={`col ${styles.authLogin}`}>
                                            <a href="http://localhost:3000/profile/1">{props.username}</a>
                                        </div>
                                        <NavLink className={`col ${styles.btnsLogReg}`} to={'/posts'}>
                                            <button type="button" className={`btn ${styles.button}`} onClick={props.unAuth}>Выйти</button>
                                        </NavLink>
                                    </> :
                                    <>
                                        <div className={`col ${styles.btnsLogReg}`}>
                                            <button type="button" className={`btn ${styles.button}`} data-bs-toggle="modal" data-bs-target="#ModalLogin">Вход</button>
                                        </div>
                                        <div className={`col ${styles.btnsLogReg}`}>
                                            <button type="button" className={`btn ${styles.button}`} data-bs-toggle="modal" data-bs-target="#ModalRegistr">Регистрация</button>
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Модальное окно логина */}
            <div className={`modal fade ${styles.modal}`} id="ModalLogin" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="ModalLoginLabel" aria-hidden="true">
                <div className={`modal-dialog modal-sm modal-dialog-centered ${styles.modalDialog}`}>
                    <div className={`modal-content p-1 ${styles.modalContent}`}>
                        <div className={`modal-close align-self-end ${styles.modalClose}`}>
                            <button type="button" className={`btn-close ${styles.btnClose}`} data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-header p-0 align-self-center border-0">
                            <div className="modal-title" id="ModalLoginLabel"><Logo /></div>
                        </div>
                        <div className={`modal-body ${styles.modalBody}`}>
                            <form onSubmit={formikLogin.handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="Login" className="col-form-label fst-italic mb-0">Логин</label>
                                    <input type="text" placeholder="boriska228" className={`form-control mt-0 ${styles.InputLog}`}
                                        id="Name" onChange={e => formikLogin.handleChange(e)} value={formikLogin.values.name}
                                        name="name" />
                                    <hr />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Password" className="col-form-label fst-italic mb-0">Пароль</label>
                                    <input type="password" placeholder="gt3we" className={`form-control mt-0 ${styles.InputLog}`}
                                        id="Password" onChange={e => formikLogin.handleChange(e)} value={formikLogin.values.password}
                                        name="password" />
                                    <hr />
                                </div>
                                <div className={`modal-footer border-0 pt-0 pb-5 ${styles.modalFooter}`}>
                                    <button type="submit" className={`btn w-50 ${styles.btnsub}`} data-bs-dismiss="modal">Войти</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Модальное окно регистрации */}
            <div className={`modal fade ${styles.modal}`} id="ModalRegistr" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="ModalRegistrLabel" aria-hidden="true">
                <div className={`modal-dialog  modal-dialog-centered ${styles.modalDialog}`}>
                    <div className={`modal-content p-1 ${styles.modalContent}`}>
                        <div className={`modal-close align-self-end ${styles.modalClose}`}>
                            <button type="button" className={`btn-close ${styles.btnClose}`} data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-header p-0 align-self-center border-0">
                            <div className="modal-title" id="ModalRegistrLabel"><Logo /></div>
                        </div>
                        <div className={`modal-body ${styles.modalBody}`}>
                            <form onSubmit={formikRegis.handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="Login" className="col-form-label fst-italic mb-0">Имя</label>
                                    <input type="text" placeholder="Иванов Иван" className={`form-control mt-0 ${styles.InputLog}`}
                                        id="Name" onChange={e => formikRegis.handleChange(e)} value={formikRegis.values.name}
                                        name="name" />
                                    <hr />
                                </div>
                                {/* Тт ник пока закоментил */}
                                {/* <div className="mb-3">
                                    <label htmlFor="Login" className="col-form-label fst-italic mb-0">Ник в Telegram</label>
                                    <input type="text" placeholder="@Nickname" className={`form-control mt-0 ${styles.InputLog}`}
                                        id="NickTG" onChange={e => formik.handleChange(e)} value={formik.values.tgname}
                                        name="tgname"/>
                                    <hr />
                                </div> */}
                                {/* <div className="mb-3">
                                    <label htmlFor="EmailReg" className="col-form-label fst-italic mb-0">Почта</label>
                                    <input type="text" placeholder="example@dvfu.ru" className={`form-control mt-0 ${styles.InputLog}`}
                                        id="EmailReg" onChange={e => formikRegis.handleChange(e)} value={formikRegis.values.email}
                                        name="email" />
                                    <hr />
                                </div> */}
                                <div className="mb-3">
                                    <label htmlFor="Login" className="col-form-label fst-italic mb-0">Логин</label>
                                    <input type="text" placeholder="Fio-Name2000" className={`form-control mt-0 ${styles.InputLog}`}
                                        id="LoginReg" onChange={e => formikRegis.handleChange(e)} value={formikRegis.values.login}
                                        name="login" />
                                    <hr />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Password" className="col-form-label fst-italic mb-0">Пароль</label>
                                    <input type="password" placeholder="Password" className={`form-control mt-0 ${styles.InputLog}`}
                                        id="PasswordReg" onChange={e => formikRegis.handleChange(e)} value={formikRegis.values.password}
                                        name="password" />
                                    <hr />
                                </div>
                                <div className={`modal-footer border-0 pt-0 pb-5 ${styles.modalFooter}`}>
                                    <button type="button" className={`btn ${styles.btnsub}`} data-bs-toggle="modal" data-bs-target="#ModalRegistr2">Продолжить</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2 этап регистрации */}
            {/* <EditingProfile stateProfile={props.stateProfile} /> */}
            <EditingProfile stateProfile={props.stateProfile} regUserData={formikRegis.values} />

            {/* // <nav class="container-fluid navbar navbar-expand-lg navbar-light bg-light">
        //     <div class="container-fluid">
        //         <a class="navbar-brand" href="#">Navbar</a>
        //         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span class="navbar-toggler-icon"></span>
        //         </button>
        //         <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        //                 <li class="nav-item">
        //                     <a class="nav-link active" aria-current="page" href="#">Home</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link" href="#">Link</a>
        //                 </li>
        //                 <li class="nav-item dropdown">
        //                     <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                         Dropdown
        //                     </a>
        //                     <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
        //                         <li><a class="dropdown-item" href="#">Action</a></li>
        //                         <li><a class="dropdown-item" href="#">Another action</a></li>
        //                         <li><hr class="dropdown-divider"/></li>
        //                         <li><a class="dropdown-item" href="#">Something else here</a></li>
        //                     </ul>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        //                 </li>
        //             </ul>
        //             <form class="d-flex">
        //                 <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        //                     <button class="btn btn-outline-success" type="submit">Search</button>
        //             </form>
        //         </div>
        //     </div>
        // </nav> */}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        username: state.auth.user?.username,
        name: state.auth.user?.name,
        stateProfile: state.profilePage,
        userId: state.auth.user?.id
    }
}

export default connect(mapStateToProps, { login, unAuth, Auth, myProfile, register })(Header)