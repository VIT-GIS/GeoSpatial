const _0x33005b=_0x2c74;(function(_0xcf1795,_0x2519fb){const _0xa72609=_0x2c74,_0x468981=_0xcf1795();while(!![]){try{const _0x940081=parseInt(_0xa72609(0x19c))/0x1*(-parseInt(_0xa72609(0x17f))/0x2)+parseInt(_0xa72609(0x195))/0x3+parseInt(_0xa72609(0x1a3))/0x4*(parseInt(_0xa72609(0x17a))/0x5)+parseInt(_0xa72609(0x18d))/0x6+parseInt(_0xa72609(0x194))/0x7+parseInt(_0xa72609(0x1aa))/0x8*(parseInt(_0xa72609(0x18a))/0x9)+parseInt(_0xa72609(0x19d))/0xa*(-parseInt(_0xa72609(0x18e))/0xb);if(_0x940081===_0x2519fb)break;else _0x468981['push'](_0x468981['shift']());}catch(_0x1e6b8d){_0x468981['push'](_0x468981['shift']());}}}(_0x16de,0xce6ce));import{initializeApp}from'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js';import{getAuth,createUserWithEmailAndPassword,sendEmailVerification,signInWithEmailAndPassword}from'https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js';import{getFirestore,doc,setDoc}from'https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js';const firebaseConfig={'apiKey':_0x33005b(0x196),'authDomain':_0x33005b(0x1a1),'projectId':'vitgis-ba14f','storageBucket':_0x33005b(0x185),'messagingSenderId':'759209581914','appId':_0x33005b(0x1a2)},app=initializeApp(firebaseConfig),auth=getAuth(),db=getFirestore(app),allowedDomains=[_0x33005b(0x180),_0x33005b(0x1a9)];function _0x2c74(_0x385f53,_0x352c39){const _0x16de1c=_0x16de();return _0x2c74=function(_0x2c7492,_0x52a9b8){_0x2c7492=_0x2c7492-0x176;let _0x592e5a=_0x16de1c[_0x2c7492];return _0x592e5a;},_0x2c74(_0x385f53,_0x352c39);}function isAllowedDomain(_0x40df41){const _0xa9bba4=_0x33005b,_0x2c1982=_0x40df41[_0xa9bba4(0x183)]('@')[0x1];return allowedDomains[_0xa9bba4(0x19f)](_0x2c1982);}function getFriendlyErrorMessage(_0x113354){const _0x2a93cc=_0x33005b,_0x401216={'auth/email-already-in-use':_0x2a93cc(0x197),'auth/invalid-email':_0x2a93cc(0x1b4),'auth/user-not-found':_0x2a93cc(0x177),'auth/wrong-password':'The\x20password\x20is\x20incorrect.\x20Please\x20try\x20again.','auth/weak-password':_0x2a93cc(0x186),'auth/network-request-failed':_0x2a93cc(0x191),'auth/too-many-requests':_0x2a93cc(0x1a7),'default':'An\x20error\x20occurred.\x20Please\x20try\x20again.'};return _0x401216[_0x113354]||_0x401216[_0x2a93cc(0x17d)];}const loginToggle=document[_0x33005b(0x19a)]('loginToggle'),registerToggle=document[_0x33005b(0x19a)](_0x33005b(0x1a8)),loginFormBox=document[_0x33005b(0x19a)](_0x33005b(0x19b)),registrationFormBox=document[_0x33005b(0x19a)](_0x33005b(0x198));loginToggle['addEventListener'](_0x33005b(0x192),()=>{const _0x262372=_0x33005b;loginFormBox[_0x262372(0x190)][_0x262372(0x18b)](_0x262372(0x1ad)),registrationFormBox['classList'][_0x262372(0x1ab)](_0x262372(0x1ad)),loginToggle[_0x262372(0x190)]['add']('active'),registerToggle[_0x262372(0x190)][_0x262372(0x18b)]('active');}),registerToggle[_0x33005b(0x1b3)](_0x33005b(0x192),()=>{const _0x52d6bc=_0x33005b;registrationFormBox['classList'][_0x52d6bc(0x18b)](_0x52d6bc(0x1ad)),loginFormBox[_0x52d6bc(0x190)][_0x52d6bc(0x1ab)](_0x52d6bc(0x1ad)),registerToggle[_0x52d6bc(0x190)][_0x52d6bc(0x1ab)](_0x52d6bc(0x199)),loginToggle[_0x52d6bc(0x190)]['remove']('active');}),document[_0x33005b(0x19a)](_0x33005b(0x1af))[_0x33005b(0x1b3)](_0x33005b(0x1b1),async _0x485b5c=>{const _0xff39d0=_0x33005b;_0x485b5c[_0xff39d0(0x181)]();const _0x3278b9=document['getElementById'](_0xff39d0(0x1ac));_0x3278b9['disabled']=!![];const _0x308a63=document[_0xff39d0(0x19a)](_0xff39d0(0x176))[_0xff39d0(0x18f)][_0xff39d0(0x179)](),_0x185aa5=document['getElementById'](_0xff39d0(0x17c))[_0xff39d0(0x18f)][_0xff39d0(0x179)]();if(!isAllowedDomain(_0x308a63)){alert(_0xff39d0(0x19e)),_0x3278b9[_0xff39d0(0x188)]=![];return;}try{const _0x125830=await signInWithEmailAndPassword(auth,_0x308a63,_0x185aa5),_0x4611e3=_0x125830[_0xff39d0(0x178)];if(!_0x4611e3[_0xff39d0(0x1a4)]){alert('Error:\x20Please\x20verify\x20your\x20email\x20before\x20logging\x20in.'),await auth['signOut']();return;}alert(_0xff39d0(0x17b)),window['location'][_0xff39d0(0x1a0)]=_0xff39d0(0x182);}catch(_0xf5a4ee){alert(getFriendlyErrorMessage(_0xf5a4ee['code']));}finally{_0x3278b9[_0xff39d0(0x188)]=![];}}),document[_0x33005b(0x19a)](_0x33005b(0x1ae))[_0x33005b(0x1b3)]('submit',async _0x55cf44=>{const _0x2518a3=_0x33005b;_0x55cf44['preventDefault']();const _0x3ced80=document[_0x2518a3(0x19a)](_0x2518a3(0x184));_0x3ced80[_0x2518a3(0x188)]=!![];const _0x123d52=document[_0x2518a3(0x19a)]('name')['value'][_0x2518a3(0x179)](),_0x293944=document[_0x2518a3(0x19a)](_0x2518a3(0x187))[_0x2518a3(0x18f)][_0x2518a3(0x179)](),_0x2c699c=document[_0x2518a3(0x19a)]('password')[_0x2518a3(0x18f)][_0x2518a3(0x179)](),_0x216d36=document[_0x2518a3(0x19a)]('reg-number')[_0x2518a3(0x18f)][_0x2518a3(0x179)](),_0x39f3ad=document[_0x2518a3(0x19a)](_0x2518a3(0x1a5))[_0x2518a3(0x18f)][_0x2518a3(0x179)]();if(!isAllowedDomain(_0x293944)){alert(_0x2518a3(0x19e)),_0x3ced80[_0x2518a3(0x188)]=![];return;}try{const _0x3a0136=await createUserWithEmailAndPassword(auth,_0x293944,_0x2c699c),_0x510c92=_0x3a0136['user'];await sendEmailVerification(_0x510c92),alert('Verification\x20email\x20sent.\x20Please\x20verify\x20to\x20proceed.');const _0x59f415={'name':_0x123d52,'email':_0x293944,'regNumber':_0x216d36,'phone':_0x39f3ad,'timestamp':new Date()};await setDoc(doc(db,_0x2518a3(0x1b2),_0x510c92[_0x2518a3(0x1a6)]),_0x59f415),alert(_0x2518a3(0x18c));}catch(_0x49c432){alert(getFriendlyErrorMessage(_0x49c432[_0x2518a3(0x17e)]));}finally{_0x3ced80[_0x2518a3(0x188)]=![];}});function goBack(){const _0x2b9ce2=_0x33005b;window[_0x2b9ce2(0x193)][_0x2b9ce2(0x189)]();}function _0x16de(){const _0x182bab=['href','vitgis-ba14f.firebaseapp.com','1:759209581914:web:3432c0511eba57eca66763','5510616VVCCYa','emailVerified','phone','uid','Too\x20many\x20failed\x20attempts.\x20Please\x20try\x20again\x20later.','registerToggle','vit.ac.in','88izmYgc','add','login-btn','hidden','registration-form','login-form','goBack','submit','VITians','addEventListener','The\x20email\x20address\x20is\x20not\x20valid.\x20Please\x20enter\x20a\x20valid\x20VIT\x20email.','login-email','No\x20account\x20found\x20with\x20this\x20email.\x20Please\x20register\x20first.','user','trim','5eQkmOi','Login\x20successful!','login-password','default','code','2eGfhyY','vitstudent.ac.in','preventDefault','/dashboard.html','split','register-btn','vitgis-ba14f.appspot.com','The\x20password\x20is\x20too\x20weak.\x20Please\x20use\x20a\x20stronger\x20password.','email','disabled','back','660897vJVNDe','remove','Registration\x20successful!\x20Verify\x20your\x20email\x20before\x20logging\x20in.','4042770iaFxnx','11EbRiyF','value','classList','Network\x20error\x20occurred.\x20Please\x20check\x20your\x20connection\x20and\x20try\x20again.','click','history','3812368SrSGkh','587361tbZtNG','AIzaSyCvg1AhjEd9vIiYWgqQlI5BO0jU3AF84t8','This\x20email\x20is\x20already\x20in\x20use.\x20Please\x20use\x20a\x20different\x20email.','registration-form-box','active','getElementById','login-form-box','1233266TkaHNX','15208390dLcALs','Error:\x20Only\x20VIT\x20emails\x20are\x20allowed.','includes'];_0x16de=function(){return _0x182bab;};return _0x16de();}window[_0x33005b(0x1b0)]=goBack;
