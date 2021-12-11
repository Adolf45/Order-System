import {ref, onValue} from '@firebase/database';
import database from '../firebaseConfig/firebaseConfigure';
import {getStorage, ref as stRef} from '@firebase/storage';


export const loadUser = (uid) => {
      const storage  = getStorage(database.app);
  return new Promise((resolve, reject) => {
      const usersRef = ref(database, `/users/${uid}`);
    
      onValue(usersRef, (snapshot) => {
        const userData = snapshot.val();
        
        if (userData.avatar) {
             
            // cargar url de avatar
            const avatarRef = stRef(storage, `/avatars/${userData.avatar}`);

         userData.avatar = avatarRef.fullPath;
             resolve(userData);

        } else {
          resolve(userData);
        }
      });
  });
};