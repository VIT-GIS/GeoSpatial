const _0x20b015=_0x4fc9;(function(_0x39a487,_0x18d738){const _0x429b0b=_0x4fc9,_0x41ccd6=_0x39a487();while(!![]){try{const _0x5e5e67=-parseInt(_0x429b0b(0x1bd))/0x1+parseInt(_0x429b0b(0x1b3))/0x2*(parseInt(_0x429b0b(0x1ac))/0x3)+-parseInt(_0x429b0b(0x1a8))/0x4*(parseInt(_0x429b0b(0x1a6))/0x5)+parseInt(_0x429b0b(0x1c4))/0x6*(-parseInt(_0x429b0b(0x1a9))/0x7)+parseInt(_0x429b0b(0x1b6))/0x8*(-parseInt(_0x429b0b(0x1b2))/0x9)+parseInt(_0x429b0b(0x1c5))/0xa+parseInt(_0x429b0b(0x1ae))/0xb;if(_0x5e5e67===_0x18d738)break;else _0x41ccd6['push'](_0x41ccd6['shift']());}catch(_0x343470){_0x41ccd6['push'](_0x41ccd6['shift']());}}}(_0x5604,0xc7f06));function _0x4fc9(_0x2994be,_0x50f147){const _0x56046c=_0x5604();return _0x4fc9=function(_0x4fc971,_0x273012){_0x4fc971=_0x4fc971-0x1a4;let _0x5974a5=_0x56046c[_0x4fc971];return _0x5974a5;},_0x4fc9(_0x2994be,_0x50f147);}function _0x5604(){const _0x5d1b00=['catch','reset-password-form','then','1023705AJTuOJ','2cFIhGL','No\x20user\x20found\x20with\x20this\x20email\x20address.','Please\x20enter\x20a\x20valid\x20email\x20address.','104brjgQz','vitgis-ba14f','1:759209581914:web:3432c0511eba57eca66763','email','preventDefault','trim','code','1451856vgDTku','759209581914','textContent','auth/user-not-found','addEventListener','message','vitgis-ba14f.firebasestorage.app','197298sbhQHn','15141330YyqphV','AIzaSyCvg1AhjEd9vIiYWgqQlI5BO0jU3AF84t8','Error:\x20','184355LfshNz','Password\x20reset\x20email\x20sent!\x20Please\x20check\x20your\x20inbox.','32eCKaxh','133XvwyPz','getElementById','The\x20email\x20address\x20is\x20not\x20valid.','3720534glOkHl','auth/invalid-email','21064175KjDspw'];_0x5604=function(){return _0x5d1b00;};return _0x5604();}import{initializeApp}from'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js';import{getAuth,sendPasswordResetEmail}from'https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js';const firebaseConfig={'apiKey':_0x20b015(0x1a4),'authDomain':'vitgis-ba14f.firebaseapp.com','projectId':_0x20b015(0x1b7),'storageBucket':_0x20b015(0x1c3),'messagingSenderId':_0x20b015(0x1be),'appId':_0x20b015(0x1b8)},app=initializeApp(firebaseConfig),auth=getAuth(app),form=document[_0x20b015(0x1aa)](_0x20b015(0x1b0)),emailInput=document['getElementById'](_0x20b015(0x1b9)),errorMessage=document[_0x20b015(0x1aa)]('error-message');form[_0x20b015(0x1c1)]('submit',_0x3650a6=>{const _0x4fdf5e=_0x20b015;_0x3650a6[_0x4fdf5e(0x1ba)]();const _0x106338=emailInput['value'][_0x4fdf5e(0x1bb)]();if(!_0x106338){errorMessage[_0x4fdf5e(0x1bf)]=_0x4fdf5e(0x1b5);return;}sendPasswordResetEmail(auth,_0x106338)[_0x4fdf5e(0x1b1)](()=>{const _0x891ab8=_0x4fdf5e;errorMessage[_0x891ab8(0x1bf)]='',alert(_0x891ab8(0x1a7));})[_0x4fdf5e(0x1af)](_0x203e68=>{const _0x5802f7=_0x4fdf5e,_0x4fc77b=_0x203e68[_0x5802f7(0x1bc)],_0x485383=_0x203e68[_0x5802f7(0x1c2)];if(_0x4fc77b===_0x5802f7(0x1ad))errorMessage[_0x5802f7(0x1bf)]=_0x5802f7(0x1ab);else _0x4fc77b===_0x5802f7(0x1c0)?errorMessage['textContent']=_0x5802f7(0x1b4):errorMessage[_0x5802f7(0x1bf)]=_0x5802f7(0x1a5)+_0x485383;});});
