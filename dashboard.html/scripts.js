const _0x11760e=_0xf6c3;(function(_0x2cb55d,_0xcd23de){const _0x369441=_0xf6c3,_0x3dac80=_0x2cb55d();while(!![]){try{const _0xfa480c=parseInt(_0x369441(0x19c))/0x1*(-parseInt(_0x369441(0x1bd))/0x2)+-parseInt(_0x369441(0x19e))/0x3*(-parseInt(_0x369441(0x1c2))/0x4)+parseInt(_0x369441(0x1b3))/0x5*(-parseInt(_0x369441(0x1a3))/0x6)+parseInt(_0x369441(0x1b4))/0x7*(-parseInt(_0x369441(0x1ac))/0x8)+parseInt(_0x369441(0x199))/0x9+-parseInt(_0x369441(0x1af))/0xa*(parseInt(_0x369441(0x1a1))/0xb)+parseInt(_0x369441(0x19d))/0xc*(parseInt(_0x369441(0x1b5))/0xd);if(_0xfa480c===_0xcd23de)break;else _0x3dac80['push'](_0x3dac80['shift']());}catch(_0x4793df){_0x3dac80['push'](_0x3dac80['shift']());}}}(_0x3f61,0xbb44a));function _0x3f61(){const _0x1dbe11=['Error\x20logging\x20out:\x20','VITian\x20Notice','538yslbVn','No\x20Content','Posted\x20by:\x20','innerText','noticeTitle','5952736LEnrSy','Unknown','addEventListener','No\x20such\x20document!','getElementById','forEach','title','\x20at\x20','User','toLocaleDateString','4940613xnpaOy','toLocaleTimeString','logoutBtn','673GRNBut','9084UqcBkW','3RDGqAq','1:759209581914:web:3432c0511eba57eca66763','then','98802uvUQNf','../Login\x20page/index.html','6SUZmTt','toDate','data','log','createdAt','759209581914','content','replace','Error\x20fetching\x20notice\x20data:\x20','12110232CRUhUj','noticeContent','No\x20Title','780PNafQD','location','name','exists','6621655dRzHuh','7qJXmeq','42068eVBQyF','error','vitgis-ba14f','vitgis-ba14f.storage.app','catch','userName'];_0x3f61=function(){return _0x1dbe11;};return _0x3f61();}function _0xf6c3(_0xb63f9d,_0x52742f){const _0x3f61ed=_0x3f61();return _0xf6c3=function(_0xf6c308,_0x1783e3){_0xf6c308=_0xf6c308-0x192;let _0x1520f1=_0x3f61ed[_0xf6c308];return _0x1520f1;},_0xf6c3(_0xb63f9d,_0x52742f);}import{initializeApp}from'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js';import{getAuth,onAuthStateChanged,signOut}from'https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js';import{getFirestore,doc,getDoc,collection,query,getDocs}from'https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js';const firebaseConfig={'apiKey':'AIzaSyCvg1AhjEd9vIiYWgqQlI5BO0jU3AF84t8','authDomain':'vitgis-ba14f.firebaseapp.com','projectId':_0x11760e(0x1b7),'storageBucket':_0x11760e(0x1b8),'messagingSenderId':_0x11760e(0x1a8),'appId':_0x11760e(0x19f)},app=initializeApp(firebaseConfig),auth=getAuth(app),db=getFirestore(app);onAuthStateChanged(auth,_0x532c7f=>{const _0x58b82e=_0x11760e;if(_0x532c7f){const _0x33523a=doc(db,'VITians',_0x532c7f['uid']);getDoc(_0x33523a)[_0x58b82e(0x1a0)](_0x39a636=>{const _0x293568=_0x58b82e;if(_0x39a636[_0x293568(0x1b2)]()){const _0x3dc3c1=_0x39a636['data'](),_0x23845d=document['getElementById'](_0x293568(0x1ba));if(_0x23845d)_0x23845d['innerText']=_0x3dc3c1[_0x293568(0x1b1)]||_0x293568(0x197);}else console[_0x293568(0x1a6)](_0x293568(0x192));})[_0x58b82e(0x1b9)](_0x1186f9=>{const _0x77c895=_0x58b82e;console[_0x77c895(0x1b6)]('Error\x20fetching\x20user\x20data:\x20',_0x1186f9);});const _0x4814cc=collection(db,_0x58b82e(0x1bc)),_0x4b2a1f=query(_0x4814cc);getDocs(_0x4b2a1f)['then'](_0x11866a=>{const _0x408add=_0x58b82e;_0x11866a[_0x408add(0x194)](_0x196a22=>{const _0x452161=_0x408add,_0x5ddea1=_0x196a22[_0x452161(0x1a5)](),_0x35fa94=document['getElementById'](_0x452161(0x1c1)),_0x41e361=document[_0x452161(0x193)](_0x452161(0x1ad)),_0x1d39c2=document['getElementById']('noticePostedBy'),_0x24d7dd=document[_0x452161(0x193)]('noticeTime');if(_0x35fa94)_0x35fa94[_0x452161(0x1c0)]=_0x5ddea1[_0x452161(0x195)]||_0x452161(0x1ae);if(_0x41e361)_0x41e361[_0x452161(0x1c0)]=_0x5ddea1[_0x452161(0x1a9)]||_0x452161(0x1be);if(_0x1d39c2)_0x1d39c2['innerText']=_0x452161(0x1bf)+(_0x5ddea1['postedBy']||_0x452161(0x1c3));if(_0x24d7dd)_0x24d7dd[_0x452161(0x1c0)]='Time:\x20'+formatTimestamp(_0x5ddea1[_0x452161(0x1a7)]);});})[_0x58b82e(0x1b9)](_0x49d9ec=>{const _0x8aa571=_0x58b82e;console['error'](_0x8aa571(0x1ab),_0x49d9ec);});}else window[_0x58b82e(0x1b0)][_0x58b82e(0x1aa)](_0x58b82e(0x1a2));}),document[_0x11760e(0x193)](_0x11760e(0x19b))[_0x11760e(0x1c4)]('click',()=>{const _0x22f17e=_0x11760e;signOut(auth)[_0x22f17e(0x1a0)](()=>{const _0x4e1aac=_0x22f17e;window['location']['replace'](_0x4e1aac(0x1a2));})[_0x22f17e(0x1b9)](_0x4f73a6=>{const _0x42a510=_0x22f17e;console[_0x42a510(0x1b6)](_0x42a510(0x1bb),_0x4f73a6);});});function formatTimestamp(_0x9aea63){const _0x51c266=_0x11760e,_0x118955=_0x9aea63[_0x51c266(0x1a4)]();return _0x118955[_0x51c266(0x198)]()+_0x51c266(0x196)+_0x118955[_0x51c266(0x19a)]();}
