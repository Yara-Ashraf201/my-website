import { Client } from "@gradio/client";

const client = await Client.connect("Smith-B/company_chatbot");
const result = await client.predict("/handle_text_input", { 		
		message: "Hello!!", 		
		history: [{"role":"user","metadata":None,"content":"Hello!","options":None},{"role":"assistant","metadata":None,"content":"How can I help you?","options":None}], 
});

console.log(result.data);
