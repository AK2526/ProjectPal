// Description: Helper functions for the client side of the application

// Function to get the generated result from the server
const getGeneratedResult = async (text) =>
{
    const response = await fetch("http://localhost:5000/generate", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: text }),
    });
    const result = await response.json();
    return result.text;
}

// Function to generate an idea
export const generateIdea = async (input) => {
    if (input === "")
    {
        return getGeneratedResult("Generate a cool idea for a programming project and strictly return one sentence with the core idea");
    }
    else
    {
        return getGeneratedResult("Use the following keywords to create a cool programming project idea and strictly return one sentence with the core idea. Keywords: " + input);
    }
}