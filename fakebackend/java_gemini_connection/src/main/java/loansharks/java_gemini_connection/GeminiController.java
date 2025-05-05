package loansharks.java_gemini_connection;

import org.springframework.web.bind.annotation.*;
import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Scanner;

import org.apache.http.HttpException;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/gemini")
public class GeminiController {

    @PostMapping
    public Map<String, String> getGeminiReply(@RequestBody Map<String, String> request) {
        try{
        
        // ===== CREATE LLM CONNECTION =====
		String modelName = "gemma-3-27b-it"; // Specify the Gemma 3 model
		String apiKey = "AIzaSyBOqwsbhtMy8psx554ccSfq4P_bbmFmlRU";
		Client client = Client.builder().apiKey(apiKey).build();

        // ===== PAYLOAD ===== 
        String prefixprompt, userprompt, finalprompt;
        prefixprompt = "You are a kind teacher. For the following prompt, only respond if it is related to finances, banking, or money.\n"+
        "If the prompt is not about those topics, respond with only: \"I am not able to assist with that.\"\n\n"+
        "If the prompt is about one of the acceptible topics, please respond in around 5 sentances using simple language."+
        "The prompt is as follows: \n";
        userprompt = request.get("prompt");
        finalprompt = prefixprompt + userprompt;

        // ===== GENERATE RESPONSE =====
        GenerateContentResponse response = client.models.generateContent(modelName, finalprompt, null);
        client.close();
        return Map.of("reply", response.text());

        }
        catch(Exception e){
            return Map.of("replay", "ERROR: " + e);
        }
    }
}