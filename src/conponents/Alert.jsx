import React from "react";

export const Alert = (props) => {
    const { name, closeAlert } = props;

    React.useEffect(
            () => {
                const timerId = setTimeout(closeAlert, 3000)

                return () => clearInterval(timerId);
            },
            //eslint-disable-next-line
            [name]
    )

    return <div id="toast-container">
        <div className='toast'>{name}</div>
    </div>
}