import becrypt from 'bcryptjs'

const users = [
    {
        name:"Waqas Hassan",
        email:'admin@hashtagstore.pk',
        password:becrypt.hashSync('makkah321',10),
        isAdmin:true
    }
]
export default users