import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId:process.env.FIREBASE_MEASUREMENT_ID
  };

  firebase.initializeApp(config);
  const db = firebase.database();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


  export {firebase , googleAuthProvider , db as default };
// /*
//   db.ref('expensiv').on('child_removed', (snapshot) => {
//    console.log(snapshot.key, snapshot.val());
//   });

//   db.ref('expensiv').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//    });
//    db.ref('expensiv').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//    });
//    */
// /*
//   db.ref('expensiv').on('value', (snapshot) => {
//     const expens = [];
//     snapshot.forEach((childSnapshot) => {
//         expens.push({
//           id:  childSnapshot.key,
//           ...childSnapshot.val()
//         });        
//     });
//     console.log(expens);
// });
// */
// /*db.ref('expensiv').once('value').then((snapshot) => {
//     const expens = [];
//     snapshot.forEach((childSnapshot) => {
//         expens.push(childSnapshot);        
//     });
//     console.log(expens);
// });
// */
//   /* db.ref('expensiv').push({
//     discription: 'tee add',
//     amount: 325,
//     createdAt: 35,
//     note: 'good'
//   });
//  db.ref('expensiv').push({
//     discription:  'ice cream',
//     amount: 238,
//     createdAt: 35,
//     note: 'cool!!!!'
//   });
//   db.ref('expensiv').push({
//     discription:  'nothing',
//     amount: 0,
//     createdAt: 34,
//     note: 'bed'
//   });*/


//  /*db.ref().set({
//     name: 'Olga Yevgrafov',
//     age: 51,
//     isSingle: false,
//     stressLevel: 6,
//     job:{
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Beer Sheva',
//         country: 'Israel'
//     }    
//   }).then(() => {
//     console.log('data is saved')
//   }).catch((e) => {
//     console.log('This failed! ', e);
//  });
// */

//  /*db.ref().on('value', (snapshot) => {
//      const name = snapshot.val().name;
//      const jobTitle = snapshot.val().job.title;
//      const jobCompany = snapshot.val().job.company;
//     console.log( name + ' is ' + jobTitle + ' at ' + jobCompany);
// });

// setTimeout(() => {
//     db.ref('job/title').set('Android developer');
//     db.ref('job/company').set('Data Pro');
// },3500);
// */
//  /*db.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// });

// setTimeout(() => {
//     db.ref('age').set(53);
// },3500);

// setTimeout(() => {
//     db.ref().off();
// },7000);

// setTimeout(() => {
//     db.ref('age').set(33);
// },10500);
// */
// /*db.ref().once('value')
// .then((snapshot) => {
//     const val= snapshot.val();
//     console.log(val)})
// .catch((e) => {
//     console.log('This failed! ', e);
//  });*/
// /* db.ref().update({
//     'job/company': 'Amazon',    
//     'location/city': 'Tel-Aviv',
//     stressLevel: 9,
//     isSingle: null
//  });*/

//   // db.ref('age').set(47);
//   //db.ref('location/city').set('Tel Aviv');
//   // db.ref('height').set(168);
//   // db.ref('weight').set(58);

//   /*db.ref('attributes').set({
//     height: 170,
//     weight:57
//   }).then(() => {
//     console.log('data is saved')
//   }).catch((e) => {
//     console.log('This failed! ', e);
//  });;
//  */

// /*const removeRef = db.ref('isSingle');
// removeRef.remove()
//   .then(function() {
//     console.log("Remove succeeded.")
//   })
//   .catch(function(error) {
//     console.log("Remove failed: " + error.message)
//   });
// */
// /*const setRef = db.ref('location');
// setRef.set(null)
//   .then(function() {
//     console.log("Remove succeeded.")
//   })
//   .catch(function(error) {
//     console.log("Remove failed: " + error.message)
//   });
// */
// // console.log('I made the request to change the data');