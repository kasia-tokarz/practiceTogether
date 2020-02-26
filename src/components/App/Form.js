import React, { useState } from 'react';
import "./Form.scss";

const Form = () => {
    const [data, setData] = useState(false);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [location, setLocation] = useState(true);
    const [experience, setExperience] = useState("beginner");
    const [gender, setGender] = useState("female");
    const [surname, setSurname] = useState("");
    const [practice, setPractice] = useState("body workout");


    return (
        <>
            <div id="formWrapper">
                

                

                <form>
                    <legend>Stwórz swoja grupę i zaproś przyjaciół!!</legend>

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



                    <legend>What's practice is good for Your body and mind?</legend>

                    <div class="form-group">
                        <label for="formGroupExampleInput2">Joga</label>
                        <input
                            type="radio"
                            name="practice"
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


                    <div class="form-group">
                        <label for="formGroupExampleInput">Meditation</label>
                        <input
                            type="radio"
                            name="practice"
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

                    <div class="form-group">
                        <label for="formGroupExampleInput">All Body Workout</label>
                        <input
                            type="radio"
                            name="practice"
                            class="form-control"
                            id="formGroupExampleInput"
                            value="body workout"
                            checked={practice === 'bodyWorkout'}
                            onChange={e => setPractice(e.target.value)} />
                    </div>

                    {/* <label>body workout</label>
                    <input
                        name="practice"
                        type="radio"
                        value="bodyWorkout"
                        checked={practice === 'bodyWorkout'}
                        onChange={e => setPractice(e.target.value)}
                    /> */}

                    <div class="form-group">
                        <label for="formGroupExampleInput">Running</label>
                        <input
                            type="radio"
                            name="practice"
                            class="form-control"
                            id="formGroupExampleInput"
                            value="running"
                            checked={practice === 'running'}
                            onChange={e => setPractice(e.target.value)} />
                    </div>




                    {/* <label>running</label>
                    <input
                        name="practice"
                        type="radio"
                        value="running"
                        checked={practice === 'running'}
                        onChange={e => setPractice(e.target.value)}
                    />*/}

                    <div class="form-group">
                        <label for="formGroupExampleInput">Cross Fit</label>
                        <input
                            type="radio"
                            name="practice"
                            class="form-control"
                            id="formGroupExampleInput"
                            value="cross fit"
                            checked={practice === 'crossFit'}
                            onChange={e => setPractice(e.target.value)} />
                    </div>

                    {/* <label>cross fit</label>
                    <input
                        name="practice"
                        type="radio"
                        value="crossFit"
                        checked={practice === 'crossFit'}
                        onChange={e => setPractice(e.target.value)}
                    /> */}

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

                    {/* <select
                        value={location}
                        onChange={e => setLocation(e.target.value)}>
                        <option value="true">Zapraszam do swojej przestrzeni</option>
                        <option value="false">Nie mam miejsca do ćwiczeć</option>

                    </select>*/}

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



                    {/* <select
                        value={experience}
                        onChange={e => setExperience(e.target.value)}>
                        <option value="practiced">I have a lot of experience in my practice</option>
                        <option value="beginner">I am a beginner</option>
                        <option value="teacher">I am a teacher</option>

                    </select> */}



                </form>
                </div>

           

           
        </>
    );
};

export default Form;

