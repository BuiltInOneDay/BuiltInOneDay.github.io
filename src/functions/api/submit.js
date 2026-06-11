export async function onRequestPost({ request }) {
    try {
        // Check for honeypot and Turnstile token (server-side validation)
        const formData = await request.formData();
        const honeypot = formData.get('honeypot');
        if (honeypot) {
            return new Response('Spam detected', { status: 403 });
        }
        
        const token = formData.get('cf-turnstile-response');
        const { success } = await turnstileVerification(token);
        if (!success) {
            return new Response('Turnstile verification failed', { status: 400 });
        }

        // Extract form data
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Here you can send the email using a service like MailChannels
        // Or save the data to a database (e.g., Cloudflare D1 or KV)

        // For a simple example, just return a success message
    } catch (error) {
        return new Response('Error processing form data', { status: 500 });
    }
}

