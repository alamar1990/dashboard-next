import {useState, useEffect} from "react";

function InfoLabel({mainText, description, color}) {
    return (
        <>
            <div style={styles.infoLabel}>
                <p style={{fontSize: '.9rem', color: color}}> {mainText} </p>
                <p style={styles.description}> {description} </p>
            </div>
        </>
    )
}

const styles = {
    infoLabel: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        fontFamily: 'Roboto',
        paddingTop: '.5rem',
        paddingBottom: '.5rem',
    },
    description: {
        paddingTop: '.2rem',
        fontSize: '.6rem',
        color: '#545454',
    }
};

export default InfoLabel