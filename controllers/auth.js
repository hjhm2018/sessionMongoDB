const User = require('../models/user');

exports.getLogin = (req, res, next)=>{
    // console.log('cookie val: ', req.get('Cookie'));
    
    // const isLoggedIn  = req.get('Cookie').split('=')[1] === 'true';

    console.log("session: ", req.session.isLoggedIn);

    res.render('auth/login', {
        path: '/auth/login',
        pageTitle: 'Login Page',
        isAuth: false
    })
}

exports.postLogin = (req, res, next)=>{
    // req.isLoggedIn = true;
    // res.setHeader('Set-Cookie', 'loggedIn=true');
    User.findById('5ecfe2efa541193ce0925e77')
    .then(user => {
        req.session.isLoggedIn = true;
        req.session.user = user;
        req.session.save((err)=>{
            console.log(err);
            res.redirect('/');
        });
    })
    .catch(err => console.log(err));

    // req.session.isLoggedIn = true;
    // res.redirect('/')
    // console.log("session: ", req.session.isLoggedIn);
};
    


exports.postLogout = (req,res,next) => {

    req.session.destroy((err)=> {
        console.log(err);
        res.redirect('/');
    })
}