import React from 'react';
import "./HomePage.scss";

const HomePage = () => {
    return (
        <div>

            <div id="photoDiv">
                <div></div>
            </div>

            <div id="aboutUs">
                <div id="aboutWrapper">
                    <div className="aboutDiv" id="aboutDivFirst">
                        <div id="first"></div>
                        <p>Wiesz, ze najwiekszym problemem dzisiejszych czasów jest samotność i brak czasu? Dlatego checemy pomóc tworzyć grupy ludzi motywujących się na własnym, lokalnym podwórku. Chcemy tworzyć autentyczne wiezi, wykorzystując internet a nie trwać w nim. Chcemy wyjść wspólnie z domu, spotkać sie z freekami o tej samej zajawce i stworzyć prawdziwe  lokalne Community!! </p>

                    </div>
                    <div className="aboutDiv">
                        <div id="second"></div>
                        <p>Przyglądaj się swojemu ciału i patrz co mu słuzy. Dostosuj rodzaj aktywności fizycznej do tego co uspokoaja Twoją głowę. Jesteśmy systemem naczyń połączonych dlatego chcemy działać całościowo, łączyć aktywnośc fizyczną z czyszczeniem głowy a to wszytsko połaczyc w serie nawyków, które małymi ktokami zmienią naszą codzienność! Pamiętaj o tym! Jesteś sumą swoich myśli! </p>

                    </div>
                    <div className="aboutDiv">
                        <div id="third"></div>
                        <p>Wszytskim nam dzisiaj brakuje czasu, mieszkamy w róznych częściach naszych miast, mamy napięte grafiki, a nasze to do listy są w ciągłej gotowości.. A co gdbyśmy umawiali się z sąsiadem z bloku na przecikwo pobiegać? Nowa relacja, nowe doświadczenie, wymiana poglądów i niesamowita oszczedność czasu! Pomyśl o tym!!</p>

                    </div>
                </div>


            </div>

        </div>
    );
};

export default HomePage;