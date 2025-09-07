
import { NextRequest, NextResponse } from "next/server"
import NodeMail from "nodemailer"

// Fonction utilitaire pour les requêtes API
// interface ApiRequestOptions {
//     headers?: Record<string, string>
//     method?: string
//     body?: string
//     [key: string]: any
// }

// interface ApiErrorResponse {
//     error: string
//     [key: string]: any
// }

// interface ApiSuccessResponse {
//     [key: string]: any
// }

// const apiRequest = async (
//     endpoint: string,
//     options: ApiRequestOptions = {}
// ): Promise<ApiSuccessResponse> => {
//     const url = `${API_BASE_URL}${endpoint}`
//     const config: RequestInit = {
//         headers: {
//             'Content-Type': 'application/json',
//             ...options.headers,
//         },
//         credentials: 'include',
//         ...options,
//     }

//     try {
//         const response = await fetch(url, config)
//         const data: ApiSuccessResponse | ApiErrorResponse = await response.json()
        
//         if (!response.ok) {
//             throw new Error((data as ApiErrorResponse).error || 'Une erreur est survenue')
//         }
        
//         return data as ApiSuccessResponse
//     } catch (error) {
//         console.error('Erreur API:', error)
//         throw error
//     }
// }

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, email, phone, subject, message } = body

        // Validation des données
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Tous les champs sont requis' },
                { status: 400 }
            )
        }
        // Validation de l'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Format d\'email invalide' },
                { status: 400 }
            )
        }
        // Validation de telephone
        const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/
        if (!phoneRegex.test(phone)) {
            return NextResponse.json(
                { error: 'Format de numéro de téléphone invalide. Veillez renseigner l\'indicatif du pays comme dans l\'exemple' },
                { status: 400 }
            )
        }

        const user = 'djiokeng2003@gmail.com'
        const password = 'lfym jmgz ubsd tabm'
        const transporter = NodeMail.createTransport({
            service: 'gmail',
            auth: {
                user: user,
                pass: password,
            }
        })
        try {
            await transporter.verify()
            console.log('Mail application connected successfully')
        } catch (error) {
            console.error('Echec de la connexion au service de messagerie:', error)
            return NextResponse.json(
                { 
                    success: false, 
                    message: 'Echec de la connexion au service de messagerie' 
                },
                { status: 500 }
            )
        }
        const mailOptions = {
            from: email,
            to: user,
            subject: subject,
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; padding: 20px; background-color: #f9f9f9;">
                    <h2 style="color: #007BFF; text-align: center;">New Contact Request</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>phone:</strong> ${phone || ''}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <p><strong>Message:</strong></p>
                    <p style="background-color: #f1f1f1; padding: 10px; border-radius: 5px;">${message}</p>
                    <footer style="text-align: center; margin-top: 20px; font-size: 0.9em; color: #666;">
                        <p>Thank you for reaching out!</p>
                        <p>&copy; ${new Date().getFullYear()} G.E.N.I.N</p>
                    </footer>
                </div>
            `,
        }
        await transporter.sendMail(mailOptions)

        return NextResponse.json(
            { 
                success: true, 
                message: 'Message envoyé avec succès' 
            },
            { status: 200 }
        )
    } catch(error: any) {
        console.error('Erreur lors de l\'envoi du message:', error)
        return NextResponse.json(
            { error: error?.message || 'Erreur interne du serveur' },
            { status: error?.status || 500 }
        )
    }
}