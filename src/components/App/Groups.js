import React, { useState, useEffect } from 'react';
import { WorkoutService } from './WorkoutService';

import './Groups.scss';

const Groups = () => {
    const [groups, setGroups] = useState([]);


    useEffect(() => {
        const allGroups = new WorkoutService().getAllGroupes();
        if(allGroups) {
            setGroups(allGroups);
        }
    }, []);

    return (
        <div>


            <div id="wrapperDiv" className="wrapperDivAbout">

                <div id="aboutDiv" className="aboutDiv">

                </div>
                <div id="textDiv" className="textDivAbout">
                    <div id="headerTitle" className="headerTitleAbout">
                        <h2 id="textH"><i class="fas fa-hashtag"></i>myGroups</h2>

                    </div>
                    <table id="tablePrac" border="collapse">
                        <thead>
                            <th>#practice</th>
                            <th>#groupName</th>
                            <th>#owner</th>


                        </thead>
                        <tbody>
                            {groups.map((group, i) => <tr key={i} className="singleGroup">
                                <td>
                                    {group.practices}

                                </td>
                                <td>
                                    {group.groupName}

                                </td>
                                <td>
                                    {group.owner.name}

                                </td>

                            </tr>

                            )}
                        </tbody>
                    </table>

                </div>


            </div>

        </div>
    );
};

export default Groups;