const express = require('express')
const hbs = require('hbs')

const port = process.env.PORT || 3000;

var app =express()

hbs.registerPartials(__dirname+ '/views/partials')
hbs.registerHelper('currentYear', ()=> {
    return  new Date().getFullYear()
});
hbs.registerHelper('screamIt', (text)=>{
    return text.toUpperCase();
})
app.set('view engine', 'hbs')
app.use(express.static(__dirname+'/public'))
app.use((req, res, next) => {
    var now = new Date().toString();
  
    console.log(`${now}: ${req.method} ${req.url}`);
    next();
  });


app.get('/', (req, res)=>{
    // res.send('<h1>Hello World !</h1>')
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to my website'

    })
    // res.send({
    //     name: 'Kapil Mathe',
    //     address: 'A-6013 Luxor Apartment, Masjid Banda, Kondapur, Hyderabad- 500084'
    // })
})


app.get('/about', (req, res)=> {
    // res.send('About me !')
    res.render('about.hbs', {
        pageTitle: 'About Page !'
    })
})


app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
}
)