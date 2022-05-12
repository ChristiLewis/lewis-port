//CREATE A VAR TO HOLD THE DB CONNECTION
let db;
//ESTABLISH A CONNECTION TO INDEXEDDB CALLED 'CLC_PORTFOLIO' AND SET TO VERSION 1
const request = indexedDB.open('clc_portfolio', 1);

//THIS EVENT WILL EMIT IF THE DB VERSION CHANGES
request.onupgradeneeded = function (event) {
    //SAVE A REFERENCE TO THE DATABASE
    const db = event.target.result;
    //CREATE AN OBJECT STORE(TABLE) CALLED 'NEW_INDEX?' I WILL TRY 'NEW_CLC' , SET TO HAVE A SIM SWL AUTO INCREMENTING PRIMARY KEY
    db.createObjectStore('new_clc', { autoIncrement: true });
};

//ADDITIONAL EVENT LISTENERS
//UPON SUCCESS
request.onsuccess = function (event) {
    //WHEN DB IS OK - CREATED W OBJECT STORE - OR - EST. A CONNECTION = SAVE A REF TO THE DB IN  GLOBAL VAR
    db = event.target.result;

    //CHECK IF APP IS ONLINE --> IF Y RUN UPLOADCLC() AND SEND ALL LOCAL DB DATA TO API
    if (navigator.online) {
        //ADD FUNCTION TO UPLOADCLC();
    }
};

request.onerror = function (event) {
    //LOG ERR HERE
    console.log(event.target.errorCode);
};

//NO INTERNET CONNECTION
function saveRecord(record) {
    //OPEN A NEW TRANSACTION W THE DB W READ AND WRITE PERMISSIONS
    const transaction = db.transaction(['new_clc'], 'readwrite');

    //ACCESS THE OBJECT STORE FOR `NEW_CLC`
    const clcObjectStore = transaction.objectStore('new_clc');

    //ADD RECORD TO YOUR STORE W ADD METHOD
    clcObjectStore.add(record);
}