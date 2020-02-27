import React, { useState, useEffect } from 'react';
import { WorkoutService } from './WorkoutService';

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
                        <h2><i class="fas fa-hashtag"></i>myGroups</h2>

                    </div>
                    <table border="collapse">
                        <tbody>
                            {groups.map((group, i) => <tr key={i} className="singleGroup">
                                <td>
                                    Prcatice: {group.practices}

                                </td>
                                <td>
                                    Name: {group.groupName}

                                </td>
                                <td>
                                    Owner: {group.owner.name}

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