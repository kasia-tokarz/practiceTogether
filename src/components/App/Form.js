import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { WorkoutService } from './WorkoutService';

import "./Form.scss";

const Form = (props) => {
    const [data, setData] = useState(false);

    const [groupName, setGroupName] = useState('');
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [location, setLocation] = useState(true);
    const [experience, setExperience] = useState("beginner");
    const [gender, setGender] = useState("female");
    const [surname, setSurname] = useState("");
    const [practice, setPractice] = useState("Workout");

    const history = useHistory();

    const validateAndCreate = (ev) => {
        const lat = parseFloat(props.match.params.latlon.split(',')[0]).toFixed(6);
        const lng = parseFloat(props.match.params.latlon.split(',')[1]).toFixed(6);

        ev.preventDefault();

        const matchExact = (r, str) => {
            var match = str.match(r);
            return match && str === match[0];
        }

        let onlyLetters = matchExact(/[a-z]+/ig, name);
        if (name.length < 2 || name.length > 60 || !onlyLetters) {
            alert("Wrong name!!")
            return null;

        }
        onlyLetters = matchExact(/[a-z]+/ig, surname);
        if (surname.length < 2 || surname.length > 60 || !onlyLetters) {
            alert("Wrong surname!!")
            return null;

        }

        if (age < 18 || isNaN(+age)) {
            alert("Wrong age!!")
            return null;

        }
        const group = {
            groupName: groupName,
            owner: {
                name: name,
                surname: surname,
                age: age,
                gender: gender,
                email: email
            },
            practices: practice,
            ownLocation: location,
            location: {
                lat: parseFloat(lat),
                lng: parseFloat(lng)
            },
            experience: experience,
            participans: [email]
        }

        const workoutService = new WorkoutService();
        workoutService.createGroup(group);

        history.push(`/success/${group.groupName}`);
    }

    return (
        <>
            <div id="formWrapper">
                <form onSubmit={validateAndCreate}>
                    <legend>Stwórz swoja grupę i zaproś przyjaciół!!</legend>
                    <div class="form-group">
                        <label forHtml="formGroupExampleInput">Podaj nazwę grupy</label>
                        <input
                            type="text"
                            className="form-control"
                            id="formGroupExampleInput"
                            value={groupName}
                            onChange={e => setGroupName(e.target.value)}
                            placeholder="Podaj nazwę swojej grupy" />
                    </div>


                    <div class="form-group">
                        <label for="formGroupExampleInput">Podaj imię</label>
                        <input
                            type="text"
                            class="form-control"
                            id="formGroupExampleInput"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Podaj swoje imię" />
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2">Podaj swoje nazwisko</label>
                        <input
                            type="text"
                            class="form-control"
                            id="formGroupExampleInput2"
                            value={surname}
                            placeholder="Podaj swoje nazwisko"
                            onChange={e => setSurname(e.target.value)}
                        />
                    </div>

                    <div class="form-group">
                        <label for="formGroupExampleInput">Podaj email</label>
                        <input
                            type="email"
                            class="form-control"
                            id="formGroupExampleInput"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Podaj swój email" />
                    </div>

                    <div class="form-group">
                        <label for="formGroupExampleInput2">Podaj swój wiek</label>
                        <input
                            type="text"
                            class="form-control"
                            id="formGroupExampleInput2"
                            value={age}
                            placeholder="Podaj wiek"
                            onChange={e => setAge(e.target.value)}
                        />
                    </div>

                    <div class="form-group">
                        <label for="formGroupExampleInput2">Gender</label>
                        <select
                            class="form-control"
                            id="formGroupExampleInput2"
                            value={gender}
                            onChange={e => setGender(e.target.value)}>
                            <option value="Famale">Famale</option>
                            <option value="Male">Male</option>
                            <option value="unknown">I don't wanna say</option>

                        </select>
                    </div>


                    {/* <select
                        value={gender}
                        onChange={e => setGender(e.target.value)}>
                        <option value="Famale">Famale</option>
                        <option value="Male">Male</option>
                        <option value="unknown">I don't wanna say</option>
                    </select> */}



                    <legend>What practice is good for Your body and mind?</legend>

                    <div class="form-group radio-group">
                        <label for="formGroupExampleInput2">Joga</label>
                        <input
                            type="checkbox"
                            class="form-control"
                            id="formGroupExampleInput2"
                            value="joga"
                            checked={practice === 'joga'}
                            onChange={e => setPractice(e.target.value)}
                        />
                    </div>

                    {/* <label>joga</label>
                    <input
                        name="practice"
                        type="radio"
                        value="joga"
                        checked={practice === 'joga'}
                        onChange={e => setPractice(e.target.value)}
                    /> */}


                    <div class="form-group radio-group">
                        <label for="formGroupExampleInput">Meditation</label>
                        <input
                            type="checkbox"
                            class="form-control"
                            id="formGroupExampleInput"
                            value="meditation"
                            onChange={e => setPractice(e.target.value)}
                            checked={practice === 'meditation'} />
                    </div>

                    {/*    <label>meditation</label>
                    <input
                        name="practice"
                        type="radio"
                        value="meditation"
                        checked={practice === 'meditation'}
                        onChange={e => setPractice(e.target.value)}
                    /> */}

                    <div class="form-group radio-group">
                        <label for="formGroupExampleInput">Workout</label>
                        <input
                            type="checkbox"
                            class="form-control"
                            id="formGroupExampleInput"
                            value="Workout"
                            checked={practice === 'Workout'}
                            onChange={e => setPractice(e.target.value)} />
                    </div>

                    <div class="form-group radio-group">
                        <label for="formGroupExampleInput">Running</label>
                        <input
                            type="checkbox"
                            class="form-control"
                            id="formGroupExampleInput"
                            value="running"
                            checked={practice === 'running'}
                            onChange={e => setPractice(e.target.value)} />
                    </div>

                    <div class="form-group radio-group">
                        <label for="formGroupExampleInput">Cross Fit</label>
                        <input
                            type="checkbox"
                            class="form-control"
                            id="formGroupExampleInput"
                            value="crossFit"
                            checked={practice === 'crossFit'}
                            onChange={e => setPractice(e.target.value)} />
                    </div>

                    <legend>What about the location? </legend>

                    <div class="form-group">
                        <label for="formGroupExampleInput2">Location</label>
                        <select
                            class="form-control"
                            id="formGroupExampleInput2"
                            value={location}
                            onChange={e => setLocation(e.target.value)}>
                            <option value="true">Zapraszam do swojej przestrzeni</option>
                            <option value="false">Nie mam miejsca do ćwiczeć</option>
                        </select>
                    </div>

                    <legend>What about experience? </legend>


                    <div class="form-group">
                        <label for="formGroupExampleInput2">My Experience</label>
                        <select
                            class="form-control"
                            id="formGroupExampleInput2"
                            value={experience}
                            onChange={e => setExperience(e.target.value)}>
                            <option value="practiced">I have a lot of experience in my practice</option>
                            <option value="beginner">I am a beginner</option>
                            <option value="teacher">I am a teacher</option>

                        </select>
                    </div>

                    <div className="form-group bottom-group">
                        <button class="btn btn-success" >Create</button>
                    </div>


                </form>
            </div>

        </>
    );
};

export default Form;
