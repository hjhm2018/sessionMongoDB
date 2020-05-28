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
    req.session.isLoggedIn = true;
    res.redirect('/')
    // console.log("session: ", req.session.isLoggedIn);
}

exports.postLogout = (req,res,next) => {

    req.session.destroy((err)=> {
        console.log(err);
        res.redirect('/');
    })
}