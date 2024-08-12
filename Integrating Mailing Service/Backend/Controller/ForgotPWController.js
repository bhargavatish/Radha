
exports.forgotPassword = async (req, res, next) => {

    try {
        const Sib = require('sib-api-v3-sdk')

        const client = Sib.ApiClient.instance

        const apiKey = client.authentications['api-key']

        apiKey.apiKey = process.env.API_KEY

        const transEmailApi = new Sib.TransactionalEmailsApi()

        const sender = {
            email: 'bhargavatish@gmail.com',
            name: 'Atish Bhargav'
        }
        const receivers = [
            {
                email: req.body.email
            }
        ]
        const response = await transEmailApi.sendTransacEmail({
            sender,
            to: receivers,
            subject: 'Get signed in to get the marketing trends',
            textContent: `Cules coding will teach you how to become a successful {{params.role}} developer`,
            params: {
                role: 'Frontend'
            },
            htmlContent: `
                <h1>Full Stack Engineer</h1>
                <a href='mymarketservices.com'>Visit</a>
                `
        })

        // console.log(response)
        res.status(201).json({ message: `Mail sent to the ${req.body.email}.`, success: true })

    } catch (error) {
        // console.log('Error is : ', error)
        res.status(403).json({ message: 'Error', success: false })

    }

}