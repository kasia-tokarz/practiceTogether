import React, { useState } from 'react';

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
            <div>

            <form>
                <fieldset>

                    <legend>Stwórz swoja grupę i zaproś przyjaciół!!</legend>
                    <input
                        type="text"
                        value={name}
                        placeholder="Podaj imię"
                        onChange={e => setName(e.target.value)}
                    />

                    <input
                        type="text"
                        value={surname}
                        placeholder="Podaj nazwisko"
                        onChange={e => setSurname(e.target.value)}
                    />

                    <input
                        type="text"
                        value={age}
                        placeholder="Podaj wiek"
                        onChange={e => setAge(e.target.value)}
                    />


                    <select
                        value={gender}
                        onChange={e => setGender(e.target.value)}>
                        <option value="Famale">Famale</option>
                        <option value="Male">Male</option>
                        <option value="unknown">I don't wanna say</option>
                    </select>
                </fieldset>

                <fieldset>
                    <legend>What's practice is good for Your body and mind?</legend>
                    <label>joga</label>
                    <input
                        name="practice"
                        type="radio"
                        value="joga"
                        checked={practice === 'joga'}
                        onChange={e => setPractice(e.target.value)}
                    />

                    <label>meditation</label>
                    <input
                        name="practice"
                        type="radio"
                        value="meditation"
                        checked={practice === 'meditation'}
                        onChange={e => setPractice(e.target.value)}
                    />

                    <label>body workout</label>
                    <input
                        name="practice"
                        type="radio"
                        value="bodyWorkout"
                        checked={practice === 'bodyWorkout'}
                        onChange={e => setPractice(e.target.value)}
                    />

                    <label>running</label>
                    <input
                        name="practice"
                        type="radio"
                        value="running"
                        checked={practice === 'running'}
                        onChange={e => setPractice(e.target.value)}
                    />

                    <label>cross fit</label>
                    <input
                        name="practice"
                        type="radio"
                        value="crossFit"
                        checked={practice === 'crossFit'}
                        onChange={e => setPractice(e.target.value)}
                    />
                    <legend>What about the location? </legend>

                    <select
                        value={location}
                        onChange={e => setLocation(e.target.value)}>
                        <option value="true">Zapraszam do swojej przestrzeni</option>
                        <option value="false">Nie mam miejsca do ćwiczeć</option>

                    </select>

                    <select
                        value={location}
                        onChange={e => setLocation(e.target.value)}>
                        <option value="true">Zapraszam do swojej przestrzeni</option>
                        <option value="false">Nie mam miejsca do ćwiczeć</option>

                    </select>


                    <legend>What about experience? </legend>

                    <select
                        value={experience}
                        onChange={e => setExperience(e.target.value)}>
                        <option value="practiced">I have a lot of experience in my practice</option>
                        <option value="beginner">I am a beginner</option>
                        <option value="teacher">I am a teacher</option>

                    </select>
                </fieldset>


            </form>

        </div>
    
                 <form>
                    <div class="form-group">
                      <label for="formGroupExampleInput">Example label</label>
                     <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
                    </div>
                    <div class="form-group">
                    <label for="formGroupExampleInput2">Another label</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"/>
                    </div>
                    </form>
    
    </>
    );
};

export default Form;

