import React from 'react';
import PropsTypes from 'prop-types';
import Herb from "./Herb";
import styles from './Herbs.module.css';
import useMemo from 'react'




const propTypes = {
    herbs: PropsTypes.array.isRequired,

}

const slowFunction = (count) => {
    for (let i = 0; i < 5000000; i++) { }
    return count;
}

function Herbs(props) {
    const count = useMemo = (() => {
        return slowFunction(props.herbs.length)
    }, [props.herbs.length]);
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Zioła({count}):</h2>
            {props.herbs.map(herb => (
                <Herb
                onOpen={props.onOpen}
                key={herb.id} {...herb} />
            ))};
        </div>
    );
}

Herbs.propTypes = propTypes;

const areEqual = (prevProps, nextProps) => {
    return prevProps.herbs === nextProps.herbs;
}

export default Herbs;