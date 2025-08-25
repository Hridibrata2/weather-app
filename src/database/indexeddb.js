const DB_NAME = "MyDB";
const STORE_NAME = "Searches";
const DB_VERSION = 1;

function openDB(callback) {
  const request = indexedDB.open(DB_NAME, DB_VERSION);

  request.onupgradeneeded = (event) => {
    const db = event.target.result;
    if (!db.objectStoreNames.contains(STORE_NAME)) {
      db.createObjectStore(STORE_NAME, { autoIncrement: true });
    }
  };

  request.onsuccess = (event) => {
    callback(null, event.target.result);
  };

  request.onerror = (event) => {
    callback(event.target.error, null);
  };
}

export function saveQuery(query) {
  openDB((error, db) => {
    if (error) {
      console.error("Failed to open IndexedDB:", error);
      return;
    }

    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    store.add(query);

    transaction.oncomplete = () => db.close();
    transaction.onerror = (event) => {
      console.error("Failed to save query:", event.target.error);
    };
  });
}

export function getQueries(callback) {
  openDB((error, db) => {
    if (error) {
      console.error("Failed to open IndexedDB:", error);
      return;
    }

    const transaction = db.transaction(STORE_NAME, "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const getAll = store.getAll();

    getAll.onsuccess = () => {
      callback(getAll.result.reverse());
      db.close();
    };

    getAll.onerror = (event) => {
      console.error("Failed to retrieve queries:", event.target.error);
    };
  });
}
