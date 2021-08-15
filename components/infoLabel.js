import {useState, useEffect} from "react";

function InfoLabel({mainText, description, color}) {
    return (
        <>
            <div style={styles.infoLabel}>
                <p style={styles.mainText} color={color}> {mainText} </p>
                <p style={styles.description}> {description} </p>
            </div>
        </>
    )
}

const styles = {
    infoLabel: {
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Roboto',
        paddingTop: '.5rem',
        paddingBottom: '.5rem',
    },
    mainText: {
        fontSize: '.8rem'
    },
    description: {
        paddingTop: '.2rem',
        fontSize: '.8rem',
        color: '#545454',
    }
};

export default InfoLabel