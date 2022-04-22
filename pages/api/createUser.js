import {client} from '../../lib/sanityClient'

const createUser = async (req,res) =>{
    console.log('creating User')
    try{
        const userDoc ={
            _type:'users',
            _id:req.body.walletAddress,
            userName:'Unnamed',
            address: req.body.walletAddress,
        }

        await client.createIfNotExists(userDoc)

        res.status(201).send({ message: 'success' })
    } catch (error){
        res.status(500).send({message:'error',data:error.message})
    }
    console.log('Creaating user')

}

export default createUser