var express = require('express');
var app = express();
var path = require('path');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render(path.resolve(__dirname, 'views', 'landing'));
});

app.get('/states', (req, res) => {
    var states = [
        { 'name': 'Arkansas', 'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arkansas.svg/1200px-Flag_of_Arkansas.svg.png', 'question1': 'Lorem Ipsum?', 'question2': 'Dolor sit amet?', 'question3': 'Consectetur adipiscing elit?' },
        { 'name': 'Illinois', 'image': 'https://images-na.ssl-images-amazon.com/images/I/41Q9KBF0M2L.jpg', 'question1': 'Lorem Ipsum?', 'question2': 'dolor sit amet?', 'question3': 'consectetur adipiscing elit?' },
        { 'name': 'Iowa', 'image': 'https://www.50states.com/flag/image/nunst022.gif', 'question1': 'Lorem Ipsum?', 'question2': 'dolor sit amet?', 'question3': 'consectetur adipiscing elit?' },
        { 'name': 'Kansas', 'image': 'https://www.50states.com/flag/image/nunst024.gif', 'question1': 'Lorem Ipsum?', 'question2': 'dolor sit amet?', 'question3': 'consectetur adipiscing elit?' },
        { 'name': 'Kentucky', 'image': 'https://cdn.britannica.com/01/1901-004-928E2258.jpg', 'question1': 'Lorem Ipsum?', 'question2': 'dolor sit amet?', 'question3': 'consectetur adipiscing elit?' },
        { 'name': 'Missorui', 'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Flag_of_Missouri.svg/1200px-Flag_of_Missouri.svg.png', 'question1': 'Lorem Ipsum?', 'question2': 'dolor sit amet?', 'question3': 'consectetur adipiscing elit?' },
        { 'name': 'Nebraska', 'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Flag_of_Missouri.svg/1200px-Flag_of_Missouri.svg.png', 'question1': 'Lorem Ipsum?', 'question2': 'dolor sit amet?', 'question3': 'consectetur adipiscing elit?' },
        { 'name': 'Oklahoma', 'image': 'https://libertyflagandbanner.com/wp-content/uploads/2015/08/oklahoma-flag.jpg', 'question1': 'Lorem Ipsum?', 'question2': 'dolor sit amet?', 'question3': 'consectetur adipiscing elit?' },
        { 'name': 'Tennessee', 'image': 'http://www.usa4kids.com/images/bigflags/tennessee.gif', 'question1': 'Lorem Ipsum?', 'question2': 'dolor sit amet?', 'question3': 'consectetur adipiscing elit?' }
    ];

    res.render('states',{ 'states': states });
});

/* eslint-disable no-process-env */
app.listen(process.env.PORT || 8080, process.env.IP || '0.0.0.0', () => {
    console.log('BUTA SERVER HAS STARTED');
});
