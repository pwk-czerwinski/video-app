/**
 * Prepares Firebase config.
 * @param env
 * @returns {{storageBucket: *, apiKey: *, messagingSenderId: *, appId: *, projectId: *, measurementId: *, databaseURL: *, authDomain: *}}
 */
const prepareFirebaseConfig = (env) => {
    return {
        apiKey: env.REACT_APP_FIREBASE_API_KEY,
        authDomain: env.REACT_APP_FIREBASE_AUTH_KEY,
        databaseURL: env.REACT_APP_FIREBASE_DATABASE_URL,
        projectId: env.REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
        appId: env.REACT_APP_FIREBASE_APP_ID,
        measurementId: env.REACT_APP_FIREBASE_MEASUREMENT_ID
    }
}

export default prepareFirebaseConfig;
