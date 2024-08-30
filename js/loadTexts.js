import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js';
import { getDatabase, ref, set, onValue } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-database.js';

const firebaseConfig = {
    apiKey: "AIzaSyBrRuiOk8rjxO6jH91v--LPuwwyIrZPiH8",
    authDomain: "bdreporttec.firebaseapp.com",
    databaseURL: "https://bdreporttec-default-rtdb.firebaseio.com",
    projectId: "bdreporttec",
    storageBucket: "bdreporttec.appspot.com",
    messagingSenderId: "153475202057",
    appId: "1:153475202057:web:2fa40b7f784e765b940cd8",
    measurementId: "G-LX51TDQBJM"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function loadTexts() {
    const textsRef = ref(database, 'textos');
    onValue(textsRef, (snapshot) => {
        const texts = snapshot.val();
        const textsContainer = document.getElementById('textsContainer');
        textsContainer.innerHTML = '';
        if(texts) {
            Object.keys(texts).forEach(key => {
            const text = texts[key];
            const textElement = document.createElement('div');
            textElement.classList.add('text-item');
            textElement.innerHTML = `
            <p><strong>Timestamp:</strong> ${text.timestamp}</p>
            <p><strong>Texto:</strong> ${text.texto}</p>
            <hr>
            `;
            textsContainer.appendChild(textElement);
            });
        }else {
            textsContainer.innerHTML = '<p>Nenhum texto encontrado.</p>';
        }
    }, {
    onlyOnce: true
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnload').addEventListener('click', loadTexts);
});
