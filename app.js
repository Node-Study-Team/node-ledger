const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const path = require('path')

// const router = require('./routes');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'html');

nunjucks.configure('views', {
    express: app,
    watch: true,
  });

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
        res.render('tmp')
    })

// //달력 창
// app.get("montyly_account", (req, res) => {
//     res.send();
// }); 

// //주간 창
// app.get("weekly_account", (req, res) => {
//     res.send();
// }); 

// //일일 페이지
// app.get("daily_account", (req, res) => {
//     res.send();
// });

// //수입, 지출, 저축, 메모 기입란
// app.get("/daily_note", (req, res) => {
//     if(request.url === "/income") {  
//         res.send();
//     }else if(request.url ==="/expense"){
//         res.send();
//     }else if(request.url ==="/save"){
//         res.send();
//     }else if(request.url ==="/memo"){
//         res.send();
//     }else{
//         res.send(); //수입과 동일, 디폴드값 설정
//     }
// });


//기존 사용금액 a, 추가 입력금액 b
// var add = (a, b) => {
//     var sum = a+b;
//     return sum;
// }   

app.listen(app.get('port'), () => {
    console.log("서버 가동");
});