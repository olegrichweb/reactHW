import React, {useState} from 'react';
import './showBtn.scss';


function ShowButton () {
    const [btnStatus, changeStatus] = useState(true);

    function eventClick() {
        changeStatus(!btnStatus);
    };
    return (
        <div>
            <button onClick = {eventClick}>
                Click
            </button>
            <p>
                {
                    btnStatus ? 'Active': 'Disable'
                }
            </p>
        </div>
    );
};

export default ShowButton;
