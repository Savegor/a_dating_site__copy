import React from "react";
import styles from './Message.module.css'
import { timeDecoding } from "../../../../../utils/commonFunc";
import { connect } from "react-redux";

const Message = (props) => {
    return (
        <div className={props.login === props.senderName ? styles.block :styles.block1} key={props.key}>
            <div className={styles.message}>
                <div className={styles.name}>{props.senderName}</div>
                <div className={styles.text}>{props.text}</div>
                <div className={styles.date}>{timeDecoding(props.date)}</div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {})(Message)