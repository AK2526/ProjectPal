// Description: Helper functions for the client side of the application

// Function to get the generated result from the server
const getGeneratedResult = async (text) => {
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

// Function to get generated json from the server
const getGeneratedJson = async (text) => {
    const response = await fetch("http://localhost:5000/generate_json", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: text }),
    });
    const result = await response.json();
    return JSON.parse(result.text);
}

// Function to generate an idea
export const generateIdea = async (input) => {
    if (input === "") {
        return getGeneratedResult("Generate a cool idea for a programming project and strictly return one sentence with the core idea");
    }
    else {
        return getGeneratedResult("Use the following keywords to create a cool programming project idea and strictly return one sentence with the core idea. Keywords: " + input);
    }
}

// Function to generate a feature
export const generateFeature = async (coreIdea, featurePrompt, existingFeatures) => {
    if (featurePrompt === "" && existingFeatures === "") {
        return getGeneratedResult(
            "Generate a cool feature for the programming project with the core idea: " + coreIdea + " and return one sentence with the feature (format with a hyphen at the beginning). Plain text only.");
    }
    else if (featurePrompt === "") {
        return getGeneratedResult(
            "Generate a cool feature for the programming project with the core idea: " + coreIdea +  ". Note that the following features have been added: " + existingFeatures + ". Return one sentence with the feature (add hyphen at beginning). Plain text only.");
    }
    else
    {
        return getGeneratedResult(
            "Generate a cool feature for the programming project with the core idea: " + coreIdea + ". The user has requested the following idea for a feature: " + featurePrompt + ". Note that the following features have been added: " + existingFeatures + ". Return one sentence with the feature (add hyphen at beginning). Plain text only.");
    }

}

// Function to figure out what tools to use
export const generateTools = async (idea, features) => {
    return getGeneratedResult("Generate a list of tools, softwares, languages, etc. for the following programming project with the core idea: " + idea + ". The following features have been added: " + features + ". Return the tools in a bulleted list, with 2-3 words for purpose. No jargon, straight to list. No headings or asterisks. Only add tools, no general information.. Don't offer options.");
}

// Function to generate final project plan
export const generateProjectPlan = async (idea, features, tools) => {
    return getGeneratedJson("Generate a comprehensive project plan for a programming project with the core idea: " + idea + ". The following features have been added: " + features + ". I'm using the following tools: " + tools + ". Return a comprehensive json list of tasks for this program (only titles)");
}